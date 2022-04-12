<template>
  <section>
    <v-app-bar flat color="#E4DFFF">
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

      <v-toolbar-title class="pl-0">
        Vacunas
      </v-toolbar-title>
    </v-app-bar>

    <v-container>
      <v-row>
        <v-col class="pb-1">
          <span class="font-weight-black">
            ¿Qué estás buscando?
          </span>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <p class="mb-1 font-weight-medium">
            Tipo de Vacuna
          </p>

          <v-select
            v-model="vaccine"
            :items="vaccines"
            hide-details outlined dense
            clearable
            class="filter-input"
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <p class="mb-1 font-weight-medium">
            ¿En qué departamento estas buscando?
          </p>

          <v-select
            v-model="department"
            :items="departments"
            hide-details outlined dense
            clearable
            class="filter-input"
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <p class="mb-1 font-weight-medium">
            ¿Qué dosis buscas? (opcional)
          </p>

          <div>
            <v-radio-group v-model="dose">
              <v-radio
                v-for="(dose, i) in doses"
                :key="i"
                :label="dose.text"
                :value="dose.value"
                color="#6751EE"
              ></v-radio>
            </v-radio-group>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <p class="mb-1 font-weight-medium">
            Horario
          </p>

          <v-select
            v-model="schedule"
            :items="schedules"
            hide-details outlined dense
            clearable
            class="filter-input"
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="pb-1">
          <span class="font-weight-black">
            Otros filtros
          </span>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <p class="mb-1 font-weight-medium">
            ¿En que municipio buscas?
          </p>

          <v-select
            v-model="municipality"
            :items="municipalities"
            hide-details outlined dense
            clearable
            class="filter-input"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>

    <v-app-bar absolute bottom>
      <v-btn color="#FFD789" block rounded elevation="0"
          @click="$router.push('mobile-centers')">
        Aplicar Filtros
      </v-btn>
    </v-app-bar>
  </section>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  data: () => ({
    schedule: null,
    schedules: [
      { text: 'Entre Semana', value: 'week' },
      { text: 'Fines de Semana', value: 'weekend' },
    ]
  }),

  computed: {
    ...mapGetters({
      'departments': 'departments',
      'municipalities': 'municipalities',
      'vaccines': 'vaccines',
      'doses': 'doses',

      'getDepartment': 'department',
      'getMunicipality': 'municipality',
      'getVaccine': 'vaccine',
      'getDose': 'dose',
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
      'setDepartment': 'SET_DEPARTMENT',
      'setMunicipality': 'SET_MUNICIPALITY',
      'setVaccine': 'SET_VACCINE',
      'setDose': 'SET_DOSE',
      'setGroup': 'SET_GROUP',
    }),
  }
}
</script>

<style scoped>
.filter-input {
  background-color: #F3F3F3;
  border: 0px solid white !important; 
}

.v-text-field--outlined >>> fieldset {
  border: 0px solid black;
}

.v-input--selection-controls__input{
  background: black;
}
</style>
