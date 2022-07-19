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

      getDepartment: 'department',
      getMunicipality: 'municipality',
    }),

    department: {
      get() {
        return this.getDepartment
      },

      set() {
        this.setDepartment(null)
        this.setMunicipality(null)
        this.setDose(null)
        this.setGroup(null)
      },
    },
  },

  methods: {
    ...mapMutations({
      setDepartment: 'SET_DEPARTMENT',
      setCenter: 'SET_CENTER',
      setMunicipality: 'SET_MUNICIPALITY',
      setDescription: 'SET_DESCRIPTION',
      setMapsLink: 'SET_MAPSLINK',
      setPhonenumber: 'SET_PHONENUMBER',
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
