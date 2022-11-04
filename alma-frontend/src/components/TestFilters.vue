<template>
  <section>
    <v-container>
      <v-row v-if="$vuetify.breakpoint.mdAndUp && !dialog">
        <v-col class="pb-1">
          <span class="text-h5 font-weight-bold">
            Encuentra tu vacuna COVID-19
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
            v-model="test"
            :items="testTypes"
            hide-details
            outlined
            dense
            clearable
            class="filter-input"
          ></v-select>
        </v-col>
      </v-row>

      <!-- <v-row>
        <v-col>
          <p class="mb-1 font-weight-medium">
            ¿En qué departamento estas buscando?
          </p>

          <v-select
            placeholder="Ver Todos"
            v-model="department"
            :items="departments"
            hide-details outlined dense
            clearable
            class="filter-input"
          ></v-select>
        </v-col>
      </v-row> -->

      <v-row>
        <v-col>
          <p class="mb-1 font-weight-medium">¿Gratis o pagado?</p>

          <v-radio-group v-model="dose">
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                  v-for="i in costs"
                  :key="i"
                  class="pb-0"
                >
                  <v-radio :label="i" :value="i" color="#6751EE"></v-radio>
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

      <!-- <v-row>
        <v-col class="pb-1">
          <span class="font-weight-bold">
            Otros filtros
          </span>
        </v-col>
      </v-row> -->

      <!-- <v-row>
        <v-col>
          <p class="mb-1 font-weight-medium">
            ¿En que municipio buscas?
          </p>

          <v-select
            placeholder="Ver Todos"
            v-model="municipality"
            :items="municipalities"
            hide-details outlined dense
            clearable
            class="filter-input"
          ></v-select>
        </v-col>
      </v-row> -->
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
