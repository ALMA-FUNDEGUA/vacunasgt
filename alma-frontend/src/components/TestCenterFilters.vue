<template>
  <section>
    <v-container style="background-color: #fff">
      <v-row v-if="$vuetify.breakpoint.mdAndUp && !dialog">
        <v-col class="pb-1">
          <span class="text-h5 font-weight-bold">
            Centros para pruebas COVID-19
          </span>
        </v-col>
      </v-row>

      <v-dialog
        v-model="covidDialog"
        max-width="700px"
        persistent
        :fullscreen="!$vuetify.breakpoint.mdAndUp"
      >
        <v-card style="overflow-y: hidden; overflow-x: hidden">
          <v-btn style="margin-left: 90%" icon @click="exitCovidQuestions">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-row>
            <v-col style="padding: 5% 10% 0% 10%">
              <p class="mb-1 font-weight-medium">
                ¿Has tenido contacto con alguien COVID-19 positivo?*
              </p>

              <v-select
                v-model="hasCovid"
                placeholder="Selecciona tu opción"
                :items="covidContact"
                hide-details
                outlined
                dense
                clearable
                class="filter-input"
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col style="padding: 5% 10% 0% 10%">
              <p class="mb-1 font-weight-medium">
                Si has tenido síntomas ¿Cuáles han sido?*
              </p>

              <v-autocomplete
                v-if="$vuetify.breakpoint.mdAndUp"
                v-model="hasSymptoms"
                placeholder="Busca tus síntomas"
                :items="orderedSymptoms()"
                hide-details
                outlined
                dense
                multiple
                clearable
                class="filter-input"
                :search-input.sync="searchInput"
                @change="searchInput = ''"
              ></v-autocomplete>

              <v-select
                v-else
                v-model="hasSymptoms"
                placeholder="Busca tus síntomas"
                :items="orderedSymptoms()"
                hide-details
                outlined
                dense
                multiple
                clearable
                class="filter-input"
                :menu-props="{ offsetY: true }"
              ></v-select>
            </v-col>
          </v-row>

          <v-row
            ><v-col align="center" justify="center" style="margin-top: 2%">
              <v-btn
                color="#FFD789"
                rounded
                elevation="0"
                class="no-uppercase"
                @click="sendAnswers"
              >
                Siguiente
              </v-btn></v-col
            ></v-row
          >
          <v-row>
            <v-col>
              <v-col
                class="caption"
                style="text-align: justify; padding: 5%; margin-top: -5%"
              >
                <span style="font-weight: bold"> Nota:</span>
                <span>
                  Gracias por tu respuesta. Los datos que proporcionas son
                  anónimos y confidenciales, serán utilizados únicamente para
                  fines estadísticos y para mejorar nuestros servicios.
                </span>
              </v-col>
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>

      <v-row>
        <v-col class="pb-1">
          <span class="font-weight-bold"> ¿Qué estás buscando? </span>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <p class="mb-1 font-weight-medium">Tipo de prueba</p>

          <v-container>
            <v-row>
              <v-col
                cols="12"
                class="pa-0"
                v-for="(type, i) in testTypes"
                :key="i"
              >
                <v-checkbox
                  v-model="testType"
                  :label="type.text"
                  :value="type.value"
                  color="#6751EE"
                  hide-details
                  class="mt-1"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <p class="mb-1 font-weight-medium">
            ¿En qué departamento estas buscando?
          </p>

          <v-select
            placeholder="Ver Todos"
            v-model="department"
            :items="departments"
            hide-details
            outlined
            dense
            clearable
            class="filter-input"
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <p class="mb-1 font-weight-medium">Horario</p>

          <!-- <v-select
            v-model="schedule"
            :items="schedules"
            placeholder="Ver Todos"
            hide-details
            outlined
            dense
            clearable
            class="filter-input"
          ></v-select> -->

          <v-container>
            <v-row>
              <v-col
                cols="12"
                class="pa-0"
                v-for="(type, i) in schedules"
                :key="i"
              >
                <v-checkbox
                  v-model="schedule"
                  :label="type.text"
                  :value="type.text"
                  color="#6751EE"
                  hide-details
                  class="mt-1"
                  multiple
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <p class="mb-1 font-weight-medium">Precio de Hisopado</p>

          <v-select
            v-model="serviceType"
            :items="serviceTypes"
            placeholder="Ver Todos"
            hide-details
            outlined
            dense
            clearable
            class="filter-input"
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="pb-1">
          <span class="font-weight-bold"> Otros filtros </span>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <p class="mb-1 font-weight-medium">¿En que municipio buscas?</p>

          <v-select
            placeholder="Ver Todos"
            v-model="municipality"
            :items="municipalities"
            hide-details
            outlined
            dense
            clearable
            class="filter-input"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

import gtag from "ga-gtag";

export default {
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    searchInput: "",
    covidContact: [
      { text: "Sí", value: true },
      { text: "No", value: false },
    ],

    covidSymptoms: [
      { text: "Cansancio", value: "isFatigued" },
      { text: "Dolor de garganta", value: "hasSorethroat" },
      { text: "Mocos", value: "hasRunnyNose" },
      { text: "Escalofríos", value: "hasChills" },
      { text: "Dolor muscular o articulaciones", value: "hasMuscleAche" },
      { text: "Dolor de cabeza", value: "hasHeadache" },
      { text: "Náuseas", value: "hasNausea" },
      { text: "Dolor de estómago", value: "hasStomachache" },
      { text: "Diarrea", value: "hasDiarrhea" },
      { text: "Dificultad para respirar", value: "breathing" },
      { text: "Pérdida de olfato", value: "hasAnosmia" },
      { text: "Pérdida de gusto", value: "hasLossOfTaste" },
      { text: "Dolor de pecho", value: "hasChestpain" },
      { text: "Tos", value: "hasCough" },
      { text: "Fiebre alta", value: "hasFever" },
      { text: "Pérdida de consciencia", value: "isConfused" },
      { text: "Convulsiones", value: "hasConvulsions" },
      { text: "Arrastra palabras", value: "isSlurring" },
      { text: "Tos con sangre", value: "hasBloodycough" },
    ],

    hasCovid: null,
    hasSymptoms: [],
  }),

  computed: {
    ...mapGetters("covidTestStore", {
      testTypes: "testTypes",
      getTestType: "testType",

      schedules: "simpleSchedules",
      getSchedule: "simpleSchedule",

      departments: "departments",
      getDepartment: "department",

      municipalities: "municipalities",
      getMunicipality: "municipality",

      serviceTypes: "serviceTypes",
      getServiceType: "serviceType",

      getFirstVisitModal: "firstVisitModal",
    }),

    covidDialog: {
      get() {
        return this.getFirstVisitModal;
      },

      set(value) {
        this.setFirstVisitModal(value);
      },
    },

    testType: {
      get() {
        return this.getTestType;
      },

      set(value = []) {
        this.setTestType(value);
      },
    },

    schedule: {
      get() {
        return this.getSchedule;
      },

      set(value) {
        if (this.setSchedule) this.setSchedule(value);
      },
    },

    department: {
      get() {
        return this.getDepartment;
      },

      set(value) {
        this.setDepartment(value);
      },
    },

    municipality: {
      get() {
        return this.getMunicipality;
      },

      set(value) {
        this.setMunicipality(value);
      },
    },

    serviceType: {
      get() {
        return this.getServiceType;
      },

      set(value) {
        this.setServiceType(value);
      },
    },
  },

  methods: {
    sendAnswers() {
      this.covidDialog = false;

      gtag("event", "action", {
        action_type: "contact_covid_symptoms",
        event_value: this.hasSymptoms,
      });

      gtag("event", "action", {
        action_type: "contact_covid",
        event_value: this.hasCovid,
      });
    },

    exitCovidQuestions() {
      this.covidDialog = false;

      gtag("event", "action", {
        action_type: "close_contact_covid_dialog",
      });
    },

    ...mapMutations("covidTestStore", {
      setTestType: "SET_TEST_TYPE",
      setSchedule: "SET_SIMPLE_SCHEDULE",
      setDepartment: "SET_DEPARTMENT",
      setMunicipality: "SET_MUNICIPALITY",
      setServiceType: "SET_SERVICE_TYPE",
      setCovidContact: "SET_COVID_CONTACT",
      setCovidSymptoms: "SET_COVID_SYMPTOMS",
      setFirstVisitModal: "SET_FIRST_VISIT_MODAL",
    }),

    orderedSymptoms() {
      return this.covidSymptoms
        .slice()
        .sort((a, b) => a.text.localeCompare(b.text));
    },
  },
};
</script>

<style scoped>
.filter-input {
  background-color: #f3f3f3;
  border: 0px solid white !important;
}

.v-text-field--outlined >>> fieldset {
  border: 0px solid black;
}

.v-input--selection-controls__input {
  background: black;
}
</style>
