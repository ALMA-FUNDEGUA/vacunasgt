<template>
  <section>
    <v-container>
      <v-row v-if="$vuetify.breakpoint.mdAndUp && !dialog">
        <v-col class="pb-1">
          <span class="text-h5 font-weight-bold">
            Centros para hisopados COVID-19
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
          <p class="mb-1 font-weight-medium">Tipo de hisopado</p>

          <v-select
            placeholder="Ver Todos"
            :items="testType"
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
          <p class="mb-1 font-weight-medium">Precio de prueba</p>

          <v-radio-group>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                  v-for="(price, i) in testPrice"
                  :key="i"
                  class="pb-0"
                >
                  <v-radio
                    :label="price.text"
                    :value="price.value"
                    color="#6751EE"
                  ></v-radio>
                </v-col>
              </v-row>
            </v-container>
          </v-radio-group>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <p class="mb-1 font-weight-medium">Horario</p>

          <v-select
            v-model="schedule"
            :items="schedules"
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

  data: () => ({
    schedule: 'week',
    schedules: [
      { text: 'Entre Semana', value: 'week' },
      { text: 'Fines de Semana', value: 'weekend' },
    ],
    testType: [
      { text: 'Antígeno', value: 'Antígeno' },
      { text: 'PCR', value: 'PCR' },
    ],
    testPrice: [
      { text: 'Gratuito', value: 'Gratuito' },
      { text: 'Pagado', value: 'Pagado' },
      { text: 'Ver todos', value: 'Ver todos' },
    ],
  }),

  computed: {
    ...mapGetters({
      departments: 'departments',
      municipalities: 'municipalities',
      vaccines: 'vaccines',
      doses: 'doses',

      getDepartment: 'department',
      getMunicipality: 'municipality',
      getVaccine: 'vaccine',
      getDose: 'dose',
    }),

    department: {
      get() {
        return this.getDepartment
      },

      set(value) {
        this.setDepartment(value)
        this.setMunicipality(null)
        // this.setVaccine(null)
        this.setDose(null)
        this.setGroup(null)
      },
    },

    municipality: {
      get() {
        return this.getMunicipality
      },

      set(value) {
        this.setMunicipality(value)
        // this.setVaccine(null)
        // this.setDose(null)
        // this.setGroup(null)
      },
    },

    vaccine: {
      get() {
        return this.getVaccine
      },

      set(value) {
        this.setVaccine(value)
        // this.setDose(null)
        // this.setGroup(null)
      },
    },

    dose: {
      get() {
        return this.getDose
      },

      set(value) {
        this.setDose(value)
        // this.setGroup(null)
      },
    },
  },

  methods: {
    ...mapMutations({
      setDepartment: 'SET_DEPARTMENT',
      setMunicipality: 'SET_MUNICIPALITY',
      setVaccine: 'SET_VACCINE',
      setDose: 'SET_DOSE',
      setGroup: 'SET_GROUP',
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
