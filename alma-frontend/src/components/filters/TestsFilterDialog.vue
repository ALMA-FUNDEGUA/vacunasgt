<template>
  <section>
    <v-btn text class="no-uppercase" @click="dialog = true">
      <v-icon>mdi-filter-variant</v-icon>
      Filtros
    </v-btn>

    <v-dialog v-model="dialog" max-width="670px">
      <v-card class="filter-dialog-padding">
        <v-card-title>
          Filtros
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-divider></v-divider>

        <section class="my-4">
          <center-filters dialog></center-filters>
        </section>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            text
            @click="clearForm"
            class="no-uppercase text-decoration-underline"
          >
            Borrar
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            rounded
            elevation="0"
            color="#FFE6B7"
            class="no-uppercase"
            @click="dialog = false"
          >
            Aplicar Filtros
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

import CenterFilters from '../TestCenterFilters.vue'

export default {
  components: {
    CenterFilters,
  },

  data: () => ({
    dialog: false,
  }),

  methods: {
    ...mapMutations({
      setDepartment: 'SET_DEPARTMENT',
      setCenter: 'SET_CENTER',
      setMunicipality: 'SET_MUNICIPALITY',
      setDescription: 'SET_DESCRIPTION',
      setMapsLink: 'SET_MAPSLINK',
      setPhonenumber: 'SET_PHONENUMBER',
    }),

    clearForm() {
      this.setDepartment(null)
      this.setMunicipality(null)
      this.setCenter(null)
      this.setDescription(null)
      this.setMapsLink(null)
      this.setPhonenumber(null)
    },
  },
}
</script>
