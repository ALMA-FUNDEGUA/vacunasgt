<template>
  <section>
    <v-card flat class="text-center">
      <!-- Top bar -->
      <v-toolbar flat color="#E4DFFF">
        <v-btn icon large link to="/">
          <v-icon> mdi-chevron-left </v-icon>
        </v-btn>

        <span
          style="
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 27px;
          "
          >Vacunas</span
        >
        <v-spacer />
        <v-btn icon link to="/filters">
          <v-icon @click="resetCase"> mdi-filter-variant </v-icon>
        </v-btn>

        <span
          style="
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 21px;
          "
        >
          Filtros
        </span>
      </v-toolbar>
      <!-- Top bar end -->

      <!-- Filter chips -->
      <v-container>
        <template>
          <div class="text-center">
            <v-chip
              class="ma-2"
              color="#CDC4FF"
              outlined
              v-if="department != null"
            >
              <span
                style="
                  font-family: 'Poppins';
                  font-style: normal;
                  font-weight: 700;
                  font-size: 12px;
                  line-height: 16px;
                  color: black;
                "
              >
                {{ department }}
              </span>
              <v-divider
                inset
                color="#CDC4FF"
                vertical
                class="mx-2"
              ></v-divider>
              <v-icon color="black"> mdi-chevron-down </v-icon>
            </v-chip>

            <v-chip
              class="ma-2"
              color="#CDC4FF"
              outlined
              v-if="municipality != null"
            >
              <span
                style="
                  font-family: 'Poppins';
                  font-style: normal;
                  font-weight: 700;
                  font-size: 12px;
                  line-height: 16px;
                  color: black;
                "
              >
                {{ municipality }}
              </span>
              <v-divider
                inset
                color="#CDC4FF"
                vertical
                class="mx-2"
              ></v-divider>
              <v-icon color="black"> mdi-chevron-down </v-icon>
            </v-chip>

            <!-- Test chip -->
            <v-chip
              class="ma-2"
              color="#CDC4FF"
              outlined
              v-if="vaccine != null"
            >
              <span
                style="
                  font-family: 'Poppins';
                  font-style: normal;
                  font-weight: 700;
                  font-size: 12px;
                  line-height: 16px;
                  color: black;
                "
              >
                {{ vaccine }}
              </span>
              <v-divider
                inset
                color="#CDC4FF"
                vertical
                class="mx-2"
              ></v-divider>
              <v-icon color="black"> mdi-chevron-down </v-icon>
            </v-chip>
            <!-- Test chip end -->

            <v-chip class="ma-2" color="#CDC4FF" outlined v-if="group != null">
              <span
                style="
                  font-family: 'Poppins';
                  font-style: normal;
                  font-weight: 700;
                  font-size: 12px;
                  line-height: 16px;
                  color: black;
                "
              >
                {{ group }}
              </span>
              <v-divider
                inset
                color="#CDC4FF"
                vertical
                class="mx-2"
              ></v-divider>
              <v-icon color="black"> mdi-chevron-down </v-icon>
            </v-chip>

            <v-chip class="ma-2" color="#CDC4FF" outlined v-if="dose != null">
              <span
                style="
                  font-family: 'Poppins';
                  font-style: normal;
                  font-weight: 700;
                  font-size: 12px;
                  line-height: 16px;
                  color: black;
                "
              >
                {{ dose }}
              </span>
              <v-divider
                inset
                color="#CDC4FF"
                vertical
                class="mx-2"
              ></v-divider>
              <v-icon color="black"> mdi-chevron-down </v-icon>
            </v-chip>

            <v-chip
              class="ma-2"
              color="#CDC4FF"
              outlined
              v-if="requirement != null"
            >
              <span
                style="
                  font-family: 'Poppins';
                  font-style: normal;
                  font-weight: 700;
                  font-size: 12px;
                  line-height: 16px;
                  color: black;
                "
              >
                {{ requirement }}
              </span>
              <v-divider
                inset
                color="#CDC4FF"
                vertical
                class="mx-2"
              ></v-divider>
              <v-icon color="black"> mdi-chevron-down </v-icon>
            </v-chip>

            <v-chip class="ma-2" color="#CDC4FF" outlined v-if="influx != null">
              <span
                style="
                  font-family: 'Poppins';
                  font-style: normal;
                  font-weight: 700;
                  font-size: 12px;
                  line-height: 16px;
                  color: black;
                "
              >
                {{ influx }}
              </span>
              <v-divider
                inset
                color="#CDC4FF"
                vertical
                class="mx-2"
              ></v-divider>
              <v-icon color="black"> mdi-chevron-down </v-icon>
            </v-chip>

            <v-chip
              class="ma-2"
              color="#CDC4FF"
              outlined
              v-if="entrance != null"
            >
              <span
                style="
                  font-family: 'Poppins';
                  font-style: normal;
                  font-weight: 700;
                  font-size: 12px;
                  line-height: 16px;
                  color: black;
                "
              >
                {{ entrance }}
              </span>
              <v-divider
                inset
                color="#CDC4FF"
                vertical
                class="mx-2"
              ></v-divider>
              <v-icon color="black"> mdi-chevron-down </v-icon>
            </v-chip>
          </div>
        </template>
      </v-container>
      <!-- End filter chips-->

      <!-- Title and cards for centers -->

      <!-- <v-spacer/> -->

      <!-- Vaccine center card test -->
      <!-- <v-card>
              <v-card-title style="font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 27px;
color: #000000;"
              class="subtitile-padding:2px"
              >
                Lugar
                <v-spacer/>
                <v-icon large color=#A698FF>
            mdi-chevron-right
          </v-icon>
              </v-card-title>             
              <v-card-subtitle class="pb-1" style="text-align:left"> 
                Ultima actualización de datos:
              </v-card-subtitle>
              <v-card-text style="font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
text-align: left;
color: #000000">
                Horario
                <br>
                Direccion
              </v-card-text>
            </v-card> -->

      <v-data-iterator
        :items="centers"
        :search="search"
        :loading="loading"
        :items-per-page="-1"
        hide-default-footer
      >
        <!-- MAPA -->
        <map-filter-mobile> </map-filter-mobile>

        <template #header="{ items }">
          <v-card-title
            style="
              font-family: 'Poppins';
              font-style: normal;
              font-weight: 700;
              font-size: 18px;
              line-height: 27px;
            "
            class="justify-center"
          >
            Resultados ({{ items.length }})
          </v-card-title>
          <v-divider></v-divider>
        </template>

        <template #default="{ items }">
          <!-- <v-row> -->
          <!-- Center List -->
          <v-card v-for="(center, i) in items" :key="`center-${i}`">
            <!-- <v-card @click="onSelect(center.name)"> -->

            <v-card-title
              style="
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
                line-height: 27px;
                color: #000000;
                text-align: left;
                word-break: break-word;
              "
            >
              <v-row dense>
                <v-col cols="11"> Lugar: {{ center.name }} </v-col>

                <v-col cols="1">
                  <!-- <v-spacer/> -->
                  <v-icon large color="#A698FF"> mdi-chevron-right </v-icon>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-subtitle
              class="pb-1"
              style="text-align:left
                font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 22px;
color: #848282;"
            >
              Ultima actualización de datos:
            </v-card-subtitle>

            <v-card-text
              style="
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
              "
            >
              <!-- Schedule -->
              <v-row dense>
                <v-col cols="1">
                  <v-icon size="25" top> mdi-clock-outline </v-icon>
                </v-col>
                <v-col
                  cols="11"
                  class="d-flex flex-column justify-end black--text text-left"
                >
                  <div>
                    <span v-if="center.schedule.week">
                      Lun - Vie > {{ center.schedule.week }}
                      <br />
                    </span>

                    <span v-if="center.schedule.weekend">
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
                    </span>
                  </div>
                </v-col>
                <!-- </v-row> -->

                <!-- Address -->
                <!-- <v-row> -->
                <v-col cols="1">
                  <v-icon size="25" top> mdi-map-marker-outline </v-icon>
                </v-col>
                <v-col
                  cols="11"
                  class="d-flex flex-column justify-end black--text text-left"
                >
                  {{ center.address }}
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
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
      <!-- End vaccine center card -->

      <!-- Bottom navigation bar -->

      <v-bottom-navigation
        horizontal
        grow
        height="70"
        background-color="#E4DFFF"
      >
        <v-btn
          @click="
            $router.push('/');
            moveToTop();
          "
        >
          <v-col cols="12">
            <v-row style="place-content: center">
              <v-icon large color="#A698FF"> mdi-home </v-icon>
            </v-row>
            <v-row style="place-content: center">
              <span
                style="
                  font-family: 'Poppins';
                  font-style: normal;
                  font-weight: 400;
                  font-size: 10px;
                  line-height: 22px;
                  color: #a698ff;
                "
              >
                Inicio
              </span>
            </v-row>
          </v-col>
        </v-btn>

        <v-btn text @click="$router.push('/filters')">
          <v-col cols="12">
            <v-row style="place-content: center">
              <v-icon large color="#A698FF"> mdi-needle </v-icon>
            </v-row>
            <v-row style="place-content: center">
              <span
                style="
                  font-family: 'Poppins';
                  font-style: normal;
                  font-weight: 400;
                  font-size: 10px;
                  line-height: 22px;
                  color: #a698ff;
                "
              >
                Vacunas
              </span>
            </v-row>
          </v-col>
        </v-btn>

        <v-btn text href="https://docs.almabot.com/docs" target="_blank">
          <v-col cols="12">
            <v-row style="place-content: center">
              <v-icon large color="#A698FF"> mdi-account-box </v-icon>
            </v-row>
            <v-row style="place-content: center">
              <span
                style="
                  font-family: 'Poppins';
                  font-style: normal;
                  font-weight: 400;
                  font-size: 10px;
                  line-height: 22px;
                  color: #a698ff;
                "
              >
                Directorio
              </span>
            </v-row>
          </v-col>
        </v-btn>

        <v-btn text href="https://docs.almabot.com/" target="blank">
          <v-col cols="12">
            <v-row style="place-content: center">
              <v-icon large color="#A698FF"> mdi-help-circle </v-icon>
            </v-row>
            <v-row style="place-content: center">
              <span
                style="
                  font-family: 'Poppins';
                  font-style: normal;
                  font-weight: 400;
                  font-size: 10px;
                  line-height: 22px;
                  color: #a698ff;
                "
              >
                Preguntas
              </span>
            </v-row>
          </v-col>
        </v-btn>
      </v-bottom-navigation>
    </v-card>

    <!-- <v-dialog
      v-model="detail"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <center-detail @close="detail = false"></center-detail>
    </v-dialog> -->

    <!-- </header> -->
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import MapFilterMobile from "../components/MapFilterMobile.vue";

// import CenterDetail from "../components/CenterDetail.vue";
// import CenterListFilters from "../components/CenterListFilters.vue";
// import SiteFooter from "../components/SiteFooter.vue";

export default {
  components: { MapFilterMobile },

  data: () => ({
    loading: true,
    search: "",
    detail: false,
    schedule: null,
    // unavailable: false,
    schedules: [
      { text: "Entre Semana", value: "week" },
      { text: "Fines de Semana", value: "weekend" },
    ],
    apiKey: process.env.VUE_APP_GOOGLE_MAPS_APIKEY,
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

    // scroll(id) {
    //   document.getElementById(id).scrollIntoView({
    //     behavior: "smooth"
    //   });
    // },

    // mapsSource() {
    //   const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${this.apiKey}`
    //   // const mapCenter = `&center=${this.mapsLatLon}`
    //   const mapQuery = `&q=${this.selected.name}`
    //   return `${mapUrl}${mapQuery}`
    // },
  },
};
</script>
