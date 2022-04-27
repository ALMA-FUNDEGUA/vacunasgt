<template>
  <section>
    <v-app-bar flat color="#F8F6FF">
      <v-spacer></v-spacer>

      <filter-inputs></filter-inputs>

      <v-divider vertical inset></v-divider>

      <v-btn text class="no-uppercase"
          @click="$router.push('/filters')">
        <v-icon>mdi-filter-variant</v-icon>
        Filtros
      </v-btn>
    </v-app-bar>
  </section>  
</template>

<script>
import FilterInputs from '../../components/filters/FilterInputs.vue';

export default {
  components: {
    FilterInputs,
  }
}
</script>
