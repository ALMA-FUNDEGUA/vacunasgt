<template>
  <section>
    <section v-if="$vuetify.breakpoint.mdAndUp">
      <section class="d-flex align-center justify-center">
        <filter-test-type></filter-test-type>
        <filter-test-price></filter-test-price>
      </section>
    </section>

    <section v-else>
      <v-container style="background-color: #f8f6ff">
        <v-row>
          <v-col cols="6" class="pr-0 pb-3">
            <filter-test-type></filter-test-type>
          </v-col>

          <v-col cols="6" class="pl-0 pb-3">
            <filter-dose-dialog></filter-dose-dialog>
          </v-col>

          <v-col cols="6" class="pr-0 pt-0">
            <filter-municipality-dialog></filter-municipality-dialog>
          </v-col>

          <v-col cols="6" class="pl-0 pt-0">
            <filter-department-dialog></filter-department-dialog>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </section>
</template>

<script>
import FilterTestType from './FilterTestType.vue'
import FilterTestPrice from './FilterTestPrice.vue'
import FilterDoseDialog from './FilterDoseDialog.vue'
import FilterMunicipalityDialog from './FilterMunicipalityDialog.vue'
import FilterDepartmentDialog from './FilterDepartmentDialog.vue'

export default {
  components: {
    FilterDoseDialog,
    FilterMunicipalityDialog,
    FilterDepartmentDialog,
    FilterTestType,
    FilterTestPrice,
  },
}
</script>
