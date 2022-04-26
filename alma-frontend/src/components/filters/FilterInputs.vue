<template>
  <section>
    <section class="d-flex align-center justify-center">
      <v-text-field
        :value="getVaccine"
        dense solo rounded flat
        hide-details readonly
        placeholder="Vacuna"
        class="mr-3"
      ></v-text-field>

      <v-text-field
        :value="getDose"
        dense solo rounded flat
        hide-details readonly
        placeholder="Dosis"
        class="mr-3"
      ></v-text-field>

      <v-text-field
        :value="getMunicipality"
        dense solo rounded flat
        hide-details readonly
        placeholder="Municipio"
        class="mr-3"
      ></v-text-field>

      <v-text-field
        :value="getDepartment"
        dense solo rounded flat
        hide-details readonly
        placeholder="Departamento"
        class="mr-3"
      ></v-text-field>
    </section>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      'getDepartment': 'department',
      'getMunicipality': 'municipality',
      'getVaccine': 'vaccine',
      'getDose': 'dose',
    })
  },
}
</script>
