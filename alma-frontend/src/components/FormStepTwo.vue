<template>
  <v-card class="step-card">
    <p class="text-center">
      ¿Qué vacuna buscas?
    </p>

    <v-container fluid>
      <v-row>
        <v-select
          label="Vacuna"
          :items="remove_centro(vaccines)"
          v-model="vaccine"
          dark color="white"
          background-color="primary"
          single-line flat filled
          rounded clearable hide-details
          class="text-uppercase"
        ></v-select>

        <v-select
          label="Dosis"
          :items="remove_out_of_stock(doses)"
          v-model="dose"
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
      'vaccines': 'vaccines',
      'doses': 'doses',

      'getVaccine': 'vaccine',
      'getDose': 'dose',
    }),

    vaccine: {
      get() {
        return this.getVaccine
      },

      set(value) { 
        this.setVaccine(value)
        this.setDose(null)
        this.setGroup(null)
      },
    },

    dose: {
      get() {
        return this.getDose
      },

      set(value) { 
        this.setDose(value)
        this.setGroup(null)
      },
    },
  },

  // data(){ return {
  //   filtered_doses : this.remove_out_of_stock('doses')
  // }},

  methods: {
    ...mapMutations({
      'setVaccine': 'SET_VACCINE',
      'setDose': 'SET_DOSE',
      'setGroup': 'SET_GROUP',
    }),

    remove_out_of_stock(list) {
      for(let i = 0; i < list.length; i++) {
        if(list[i].text.match(/AGOTAD/) || list[i].text.match(/CERRADO/)){
          list.splice(i,1)
          // Decrease value of i to properly traverse array since splice changes index values
          i--
        }
      }
      return list
    },

    remove_centro(list) {
      for(let i = 0; i < list.length; i++) {
        if(list[i].text.match(/CENTRO/)){
          list.splice(i,1)
          // Decrease value of i to properly traverse array since splice changes index values
          i--
        }
      }
      return list
    },

    all() {
      this.vaccine = null
      this.dose = null

      this.$emit('next')
    }
  }
}
</script>
