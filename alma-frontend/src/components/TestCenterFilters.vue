<template>
  <section>
    <v-container>
      <v-row v-if="$vuetify.breakpoint.mdAndUp && !dialog">
        <v-col class="pb-1">
          <span class="text-h5 font-weight-bold">
            Centros para pruebas COVID-19
          </span>
        </v-col>
      </v-row>

      <v-row v-else>
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

          <v-select
            v-model="schedule"
            :items="schedules"
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
import { mapMutations, mapGetters } from 'vuex'

export default {
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({}),

  computed: {
    ...mapGetters('covidTestStore', {
      testTypes: 'testTypes',
      getTestType: 'testType',

      schedules: 'simpleSchedules',
      getSchedule: 'simpleSchedule',

      departments: 'departments',
      getDepartment: 'department',

      municipalities: 'municipalities',
      getMunicipality: 'municipality',
    }),

    testType: {
      get() {
        return this.getTestType
      },

      set(value = []) {
        this.setTestType(value)
      },
    },

    schedule: {
      get() {
        return this.getSchedule
      },

      set(value) {
        if (this.setSchedule) this.setSchedule(value)
      },
    },

    department: {
      get() {
        return this.getDepartment
      },

      set(value) {
        this.setDepartment(value)
      },
    },

    municipality: {
      get() {
        return this.getMunicipality
      },

      set(value) {
        this.setMunicipality(value)
      },
    },
  },

  methods: {
    ...mapMutations('covidTestStore', {
      setTestType: 'SET_TEST_TYPE',
      setSchedule: 'SET_SIMPLE_SCHEDULE',
      setDepartment: 'SET_DEPARTMENT',
      setMunicipality: 'SET_MUNICIPALITY',
    }),
  },
}
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
