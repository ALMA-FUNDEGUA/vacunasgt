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
            style="color: #200765; font-weight: bold; background-color: #d0c2fd"
            class="no-uppercase mt-3"
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
import { mapMutations } from "vuex";

import CenterFilters from "../CenterFilters.vue";

export default {
  components: {
    CenterFilters,
  },

  data: () => ({
    dialog: false,
  }),

  methods: {
    ...mapMutations({
      setDepartment: "SET_DEPARTMENT",
      setMunicipality: "SET_MUNICIPALITY",
      setVaccine: "SET_VACCINE",
      setDose: "SET_DOSE",
      setGroup: "SET_GROUP",
    }),

    clearForm() {
      this.setVaccine(null);
      this.setDepartment(null);
      this.setDose(null);
      this.setMunicipality(null);
    },
  },
};
</script>
