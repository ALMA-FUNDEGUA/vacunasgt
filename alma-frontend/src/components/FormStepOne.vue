<template>
  <v-card class="step-card">
    <p class="text-center">
      ¿En donde buscas?
    </p>

    <v-container fluid>
      <v-row>
        <v-select
          label="Departamentos"
          :items="departments"
          v-model="department"
          dark color="white"
          background-color="primary"
          single-line flat filled
          rounded clearable hide-details
          class="text-uppercase"
        ></v-select>

        <v-select
          label="Municipios"
          :items="municipalities"
          v-model="municipality"
          dark color="white"
          background-color="primary"
          single-line flat filled
          rounded clearable hide-details
          class="my-4 text-uppercase"
        ></v-select>

        <v-btn x-large block rounded
            color="primary"
            class="justify-start"
            @click="all">
          Ver Todos
        </v-btn>
      </v-row>
    </v-container>

    <v-card-actions class="mt-5 px-0 justify-space-between">
      <v-btn color="primary" text large
          @click="$emit('back')"
          style="width: 48%; border: 1px solid #4F4A88">
        <v-icon>mdi-chevron-left</v-icon>
        Atras
      </v-btn>

      <v-btn color="primary" large
          @click="$emit('next')"
          style="width: 48%;">
        Siguiente
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      'departments': 'departments',
      'municipalities': 'municipalities',

      'getDepartment': 'department',
      'getMunicipality': 'municipality',
    }),

    department: {
      get() {
        return this.getDepartment
      },

      set(value) { 
        this.setDepartment(value)
        this.setMunicipality(null)
        this.setVaccine(null)
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
        this.setVaccine(null)
        this.setDose(null)
        this.setGroup(null)
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

    all() {
      this.department = null
      this.municipality = null

      this.$emit('next')
    }
  }
}
</script>
