<template>
  <section>
    <v-app-bar flat color="#F8F6FF">
      <v-spacer></v-spacer>

      <filter-inputs></filter-inputs>

      <v-divider vertical inset></v-divider>

      <filter-dialog></filter-dialog>
    </v-app-bar>
  </section>
</template>

<script>
import FilterInputs from './TestsFilterInputs.vue'
import FilterDialog from './TestsFilterDialog.vue'

export default {
  components: {
    FilterInputs,
    FilterDialog,
  },
}
</script>
