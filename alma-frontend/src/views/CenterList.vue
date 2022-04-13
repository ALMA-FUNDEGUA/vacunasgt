<template>
  <section>
    <v-app-bar flat color="#E4DFFF">
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

      <v-toolbar-title class="pl-0"> Vacunas </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="$router.push('/filters')">
        <v-icon> mdi-filter-variant</v-icon>
      </v-btn>
      <span @click="$router.push('/filters')">Filtros</span>
    </v-app-bar>

    <!--<div style="height: 15vh;"></div>-->

    <!-- Filter chips -->
    <v-container>
      <template>
        <div class="text-center">
          <v-chip
            class="ma-2"
            outlined
            color="primary"
            v-if="department != null"
          >
            {{ department }}
          </v-chip>

          <v-chip
            class="ma-2"
            outlined
            color="primary"
            v-if="municipality != null"
          >
            {{ municipality }}
          </v-chip>

          <v-chip class="ma-2" outlined color="primary" v-if="vaccine != null">
            {{ vaccine }}
          </v-chip>

          <v-chip class="ma-2" outlined color="primary" v-if="group != null">
            {{ group }}
          </v-chip>

          <v-chip class="ma-2" outlined color="primary" v-if="dose != null">
            {{ dose }}
          </v-chip>

          <v-chip
            class="ma-2"
            outlined
            color="primary"
            v-if="requirement != null"
          >
            {{ requirement }}
          </v-chip>

          <v-chip class="ma-2" outlined color="primary" v-if="influx != null">
            {{ influx }}
          </v-chip>

          <v-chip class="ma-2" outlined color="primary" v-if="entrance != null">
            {{ entrance }}
          </v-chip>
        </div>
      </template>
    </v-container>
    <!-- End filter chips-->

    <template>
      <div class="mapa">
        <l-map
          style="height: 300px"
          v-model="zoom"
          :zoom="zoom"
          :center="[14.4818156, -90.5351601]"
          @move="log('move')"
        >
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-marker :lat-lng="markerLatLng">
            <l-icon :icon-url="iconUrl"
          /></l-marker>

          <l-marker :lat-lng="markerLatLng2">
            <l-icon :icon-url="iconUrl"
          /></l-marker>

          <l-marker :lat-lng="markerLatLng3">
            <l-icon :icon-url="iconUrl"
          /></l-marker>
          <l-control-layers />
        </l-map>
      </div>
    </template>

    <v-container class="center-list-content">
      <v-data-iterator
        :items="centers"
        :search="search"
        :loading="loading"
        :items-per-page="-1"
        hide-default-footer
      >
        <template #header="{ items }">
          <v-row justify="space-between" align="center">
            <v-row>
              <!-- <iframe
                width="100%"
                height="300"
                style="border: 0"
                loading="lazy"
                :src="mapsSource"
              >
              </iframe> -->
            </v-row>
            <v-col cols="6" md="4">
              <span> Resultados ({{ items.length }}) </span>
            </v-col>

            <v-col cols="6" md="4">
              <v-select
                label="Horario"
                v-model="schedule"
                :items="schedules"
                outlined
                dense
                hide-details
                clearable
              ></v-select>
            </v-col>
          </v-row>
        </template>

        <template #default="{ items }">
          <v-row>
            <v-col cols="12" v-for="(center, i) in items" :key="`center-${i}`">
              <v-card @click="onSelect(center.name)">
                <v-card-title class="justify-space-between py-0 px-0">
                  <!-- <v-container fluid>
                    <v-row>
                      <v-col cols="7" class="pb-0"> -->
                  <v-container fluid class="pb-0">
                    <div class="primary--text text-subtitle-2">
                      {{ center.name }}
                    </div>
                  </v-container>
                  <!-- </v-col>

                      <v-col cols="5" class="text-right pb-0">
                        <span class="secondary--text caption">
                          {{ center.entrance }}
                        </span>
                      </v-col>
                    </v-row>
                  </v-container> -->
                </v-card-title>

                <v-container fluid>
                  <v-row>
                    <v-col cols="6" class="secondary--text">
                      <div
                        v-for="(doses, vaccine) in center.vaccines"
                        :key="`center-${i}-vaccine-${vaccine}`"
                        class="mb-0 caption"
                      >
                        <div
                          v-for="(dosisData, doseName) in doses"
                          :key="`vaccine-${vaccine}-dosis${doseName}`"
                        >
                          <!-- Use unavailable variable to only write AGOTADA once
                          {{unavailable}} = false -->
                          <div
                            v-for="(r, i) in dosisData"
                            :key="`vaccine-${vaccine}-dosis${doseName}-requirement-${i}`"
                          >
                            <!-- Get group and requirements 
                            <div v-if="unavailable == false"> -->
                            <div v-if="formatDose(doseName) == 'Agotada'">
                              <p class="mb-0 caption">
                                {{ doseName }} - {{ vaccine }}
                                <!-- {{unavailable}} = true -->
                              </p>
                            </div>
                            <div v-else-if="doseName == 'CERRADO HOY'">
                              <p class="mb-0 caption">
                                {{ doseName }}
                                <!-- {{unavailable}} = true -->
                              </p>
                            </div>
                            <div v-else>
                              <p class="mb-0 caption">
                                {{ formatDose(doseName) }} - {{ vaccine }} -
                                {{ r.group }}
                              </p>
                            </div>
                            <!-- </div> -->
                          </div>
                        </div>

                        <!-- Insert group here -->

                        <!--<div v-for="k in doses"
                        :key="`center-${i}-vaccine-${vaccine}-dose-${doses}-requirement-${k}`">
                          {{ k }}
                        </div> -->

                        <!-- End -->
                      </div>
                    </v-col>

                    <v-col
                      cols="6"
                      class="d-flex flex-column justify-end black--text text-right"
                    >
                      <p class="mb-0 caption" v-if="center.schedule.week">
                        Lun - Vie > {{ center.schedule.week }}
                      </p>

                      <p class="mb-0 caption" v-if="center.schedule.weekend">
                        Sab >
                        {{
                          center.days.saturday
                            ? center.schedule.weekend
                            : "No disponible"
                        }}
                        <br />
                        Dom >
                        {{
                          center.days.sunday
                            ? center.schedule.weekend
                            : "No disponible"
                        }}
                      </p>
                    </v-col>
                  </v-row>
                </v-container>

                <v-container fluid class="pt-0">
                  <p class="mb-0 primary--text caption">
                    {{ center.entrance }}
                  </p>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </template>

        <template #loading>
          <v-row>
            <v-col cols="12">
              <v-skeleton-loader
                v-for="item in 3"
                v-bind:key="item"
                class="mx-auto"
                max-width="100%"
                height="80px"
                type="card"
                style="margin-bottom: 1vh"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </template>

        <template #no-data>
          <div class="d-flex flex-column align-center my-5">
            <i
              class="fas fa-hospital-user"
              style="font-size: 72px; color: #c3c1d8"
            ></i>

            <h3>No se encontraron registros</h3>
          </div>
        </template>

        <template #no-results>
          <div class="d-flex flex-column align-center my-5">
            <i
              class="fas fa-hospital-user"
              style="font-size: 72px; color: #c3c1d8"
            ></i>

            <h3>No se encontraron registros</h3>
          </div>
        </template>
      </v-data-iterator>
    </v-container>

    <v-btn
      fab
      small
      color="primary"
      fixed
      bottom
      right
      @click="moveToTop"
      :style="{ marginBottom: '65px' }"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>

    <center-list-filters></center-list-filters>
    <site-footer></site-footer>

    <v-dialog
      v-model="detail"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <center-detail @close="detail = false"></center-detail>
    </v-dialog>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import CenterDetail from "../components/CenterDetail.vue";
import CenterListFilters from "../components/CenterListFilters.vue";
import SiteFooter from "../components/SiteFooter.vue";
import "leaflet/dist/leaflet.css";

import { LMap, LMarker, LTileLayer, LControlLayers, LIcon } from "vue2-leaflet";

export default {
  components: {
    CenterDetail,
    CenterListFilters,
    SiteFooter,
    LMap,
    LMarker,
    LTileLayer,
    LControlLayers,
    LIcon,
  },

  ngAfterViewChecked: () => {
    this.map.invalidateSize(true);
    this.map.center = this.center;
  },

  // Data de prueba de punteros
  PuntosMapa: () => {
    var centrosVacunas = [];

    for (var i = 0; i < centrosVacunas.length; i++) {
      var marker = new LMarker([centrosVacunas[i][1], centrosVacunas[i][2]]);
      console.log(marker);
    }
  },

  //14.5644777,-90.5648528
  //https://www.google.es/maps/place/Centra+Norte/@14.6453045,-90.4604147,13.82z/data=!4m5!3m4!1s0x8589a2ad5be3bb13:0x37a1521338b0c9c2!8m2!3d14.6470499!4d-90.4511337?hl=es
  data: () => ({
    apiKey: process.env.VUE_APP_GOOGLE_MAPS_APIKEY,
    loading: true,
    search: "",
    detail: false,
    schedule: null,
    // unavailable: false,
    schedules: [
      { text: "Entre Semana", value: "week" },
      { text: "Fines de Semana", value: "weekend" },
    ],
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    zoom: 9,
    markerLatLng: [14.4818156, -90.5351601],
    markerLatLng2: [14.5644777, -90.5648528],
    markerLatLng3: [14.6453045, -90.4604147],
    iconUrl: "http://www.clker.com/cliparts/R/B/J/Z/k/m/map-marker-hi.png",
    iconSize: [100, 100],
  }),

  computed: {
    ...mapGetters({
      _centers: "filtered",
      getDepartment: "department",
      getMunicipality: "municipality",
      getVaccine: "vaccine",
      getGroup: "group",
      getDose: "dose",
      getRequirement: "requirement",
      getInflux: "influx",
      getEntrance: "entrance",
    }),

    // 1) Store all filtered map locations on an array

    // 2) for loop to create positions on map

    // 3) Render map

    department: {
      get() {
        return this.getDepartment;
      },
    },

    municipality: {
      get() {
        return this.getMunicipality;
      },
    },

    vaccine: {
      get() {
        return this.getVaccine;
      },
    },

    group: {
      get() {
        return this.getGroup;
      },
    },

    dose: {
      get() {
        return this.getDose;
      },
    },

    requirement: {
      get() {
        return this.getRequirement;
      },
    },

    influx: {
      get() {
        return this.getInflux;
      },
    },

    entrance: {
      get() {
        return this.getEntrance;
      },
    },

    centers() {
      return this._centers.filter((center) => {
        switch (this.schedule) {
          case "week":
            return !!center.schedule.week;

          case "weekend":
            return !!center.schedule.weekend;

          default:
            return true;
        }
      });
    },
  },

  methods: {
    ...mapMutations({
      setSelected: "SET_SELECTED",
    }),

    formatDose(dose) {
      switch (dose) {
        case dose.match(/AGOTADA/)?.input:
          return "Agotada";
        case "PRIMERA":
          return "1era";
        case "SEGUNDA":
          return "2nda";
        default:
          return dose;
      }
      /* const mapper = ([key,]) => {
        switch (key) {
          case 'PRIMERA': return '1era'
          case 'SEGUNDA': return '2nda'
          default: return key
        }
      }

      const formatted = Object.entries(dose).map(mapper).toString()
      return formatted */
    },

    goBack() {
      this.$router.go(-1);
    },

    onSelect(name) {
      this.setSelected(name);
      this.detail = true;
    },

    moveToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.center-list-view {
  color: white !important;
  background-color: #4f4a88 !important;
}

.center-list-content {
  color: #4f4a88 !important;
  background-color: rgb(245, 245, 245) !important;
}
</style>
