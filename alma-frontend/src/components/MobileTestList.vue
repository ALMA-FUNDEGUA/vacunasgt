<template>
  <section>
    <search-bar-mobile v-model="search"></search-bar-mobile>

    <v-card flat class="text-center">
      <v-toolbar flat color="#E4DFFF">
        <v-btn icon large link to="/">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <span style="font-weight: 700; font-size: 18px; line-height: 27px">
          Pruebas
        </span>

        <v-spacer />

        <v-btn icon link to="/testsfilters">
          <v-icon> mdi-filter-variant </v-icon>
        </v-btn>

        <span style="font-weight: 700; font-size: 14px; line-height: 21px">
          Filtros
        </span>
      </v-toolbar>

      <test-filter-inputs></test-filter-inputs>
      <map-filter></map-filter>

      <v-data-iterator
        :items="centers"
        :search="search"
        :loading="loading"
        :items-per-page="-1"
        hide-default-footer
      >
        <template #header="{ items }">
          <v-card-title
            class="justify-center"
            style="font-weight: 700; font-size: 18px; line-height: 27px"
          >
            Resultados ({{ items.length }})
          </v-card-title>
          <v-divider></v-divider>
        </template>

        <template #default="{ items }">
          <v-card
            v-for="(center, i) in items"
            :key="`center-${i}`"
            @click="onSelect(center.center)"
          >
            <v-card-title
              style="
                font-weight: 700;
                font-size: 18px;
                line-height: 27px;
                color: #000000;
                text-align: left;
                word-break: break-word;
              "
            >
              <v-row dense>
                <v-col cols="11">
                  {{ center.center }}
                </v-col>

                <v-col cols="1">
                  <v-icon large color="#A698FF"> mdi-chevron-right </v-icon>
                </v-col>
              </v-row>
            </v-card-title>

            <v-card-text
              style="font-weight: 400; font-size: 14px; line-height: 22px"
            >
              <v-row dense>
                <v-col cols="1">
                  <v-icon size="25" top> mdi-clock-outline </v-icon>
                </v-col>

                <v-col
                  cols="11"
                  class="d-flex flex-column justify-end black--text text-left"
                >
                  <div>
                    <span v-if="center.specificSchedule">
                      {{ center.specificSchedule }}
                      <br />
                    </span>

                    <span v-else>
                      Horario por confirmar
                      <br />
                    </span>
                  </div>
                </v-col>

                <v-col cols="1">
                  <v-icon size="25" top> mdi-google-circles </v-icon>
                </v-col>

                <v-col
                  cols="11"
                  class="d-flex flex-column justify-end black--text text-left"
                >
                  <div v-if="center.tests.length > 0">
                    {{ center.tests.map((i) => i.testType).join(', ') }}
                  </div>
                </v-col>

                <v-col cols="1">
                  <v-icon size="25" top> mdi-cash </v-icon>
                </v-col>

                <v-col
                  cols="11"
                  class="d-flex flex-column justify-end black--text text-left"
                >
                  <span
                    v-if="
                      center.tests.length > 0 && center.tests[0].serviceType
                    "
                  >
                    {{ center.tests[0].serviceType }}
                  </span>

                  <span v-else> Tipo de servicio por confirmar </span>
                </v-col>

                <v-col cols="1">
                  <v-icon size="25" top> mdi-phone-outline </v-icon>
                </v-col>

                <v-col
                  cols="11"
                  class="d-flex flex-column justify-end black--text text-left"
                >
                  {{
                    center.phoneNumber !== 'N/A'
                      ? center.phoneNumber
                      : 'Número por confirmar'
                  }}
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <!-- <v-card v-for="(center, i) in items" :key="`center-${i}`" @click="onSelect(center.center)">
            <v-card-title
              style="font-family: 'Poppins'; font-style: normal; font-weight: 700; font-size: 18px; line-height: 27px; color: #000000; text-align:left; word-break: break-word;">
              <v-row dense>
                <v-col cols="11">
                  Lugar: {{ center.center }}
                </v-col>

                <v-col cols="1">
                  <v-icon large color=#A698FF>
                    mdi-chevron-right
                  </v-icon>
                </v-col>
              </v-row>
            </v-card-title>

            <v-card-subtitle class="pb-1"
              style="text-align:left font-family: 'Poppins'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 22px; color: #848282;">
              Ultima actualización de datos:
            </v-card-subtitle>

            <v-card-text
              style="font-family: 'Poppins'; font-style: normal; font-weight: 400; font-size: 14px; line-height: 22px;">
              <v-row dense>
                <v-col cols="1">
                  <v-icon size=25 top>
                    mdi-clock-outline
                  </v-icon>
                </v-col>

                <v-col cols="1">
                  <v-icon size="25" top> mdi-map-marker-outline </v-icon>
                </v-col>

                <v-col cols="11" class="d-flex flex-column justify-end black--text text-left">
                  {{ center.address }}
                </v-col>
              </v-row>
            </v-card-text>
          </v-card> -->
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

      <bottom-navigation-mobile></bottom-navigation-mobile>
    </v-card>

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
import { mapGetters, mapMutations } from 'vuex'

import CenterDetail from '../components/CenterDetail.vue'

import MapFilter from '../components/maps/CovidTestMapFilter.vue'

import BottomNavigationMobile from '../components/BottomNavigation.Mobile.vue'
import TestFilterInputs from './filters/TestsFilterInputs.vue'
import SearchBarMobile from './list/SearchBar.Mobile.vue'

export default {
  components: {
    MapFilter,
    CenterDetail,
    BottomNavigationMobile,
    TestFilterInputs,
    SearchBarMobile,
  },

  data: () => ({
    loading: true,
    fab: false,
    search: '',
    detail: false,
    schedule: null,
    // unavailable: false,
    schedules: [
      { text: 'Entre Semana', value: 'week' },
      { text: 'Fines de Semana', value: 'weekend' },
    ],
    apiKey: process.env.VUE_APP_GOOGLE_MAPS_APIKEY,
  }),

  computed: {
    ...mapGetters('covidTestStore', {
      _centers: 'filtered',
      getDepartment: 'department',
      getMunicipality: 'municipality',
      getVaccine: 'vaccine',
      getGroup: 'group',
      getDose: 'dose',
      getRequirement: 'requirement',
      getInflux: 'influx',
      getEntrance: 'entrance',
    }),

    department: {
      get() {
        return this.getDepartment
      },
    },

    municipality: {
      get() {
        return this.getMunicipality
      },
    },

    vaccine: {
      get() {
        return this.getVaccine
      },
    },

    group: {
      get() {
        return this.getGroup
      },
    },

    dose: {
      get() {
        return this.getDose
      },
    },

    requirement: {
      get() {
        return this.getRequirement
      },
    },

    influx: {
      get() {
        return this.getInflux
      },
    },

    entrance: {
      get() {
        return this.getEntrance
      },
    },

    centers() {
      return this._centers
    },
  },

  methods: {
    ...mapMutations('covidTestStore', {
      setSelected: 'SET_SELECTED',
    }),

    formatDose(dose) {
      switch (dose) {
        case dose.match(/AGOTADA/)?.input:
          return 'Agotada'
        case 'PRIMERA':
          return '1era'
        case 'SEGUNDA':
          return '2nda'
        default:
          return dose
      }
    },

    onSelect(name) {
      this.$router.push({
        name: 'TestsCenterDetailView',
        params: {
          name: name,
        },
      })
    },

    onSelectTest() {
      this.$router.push({
        name: 'TestsCenterDetailView',
        params: {
          name: 'CAP Palencia',
        },
      })
      // this.$router.push({
      //   name: 'TestsCenterDetailView',
      //   params: {
      //     name: name,
      //   },
      // })
    },

    moveToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>
