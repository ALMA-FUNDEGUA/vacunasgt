<template>
  <section>
    <section v-if="$vuetify.breakpoint.mdAndUp">
      <section class="d-flex align-center justify-center">
        <test-type-dialog></test-type-dialog>
        <filter-dose-dialog></filter-dose-dialog>
        <filter-municipality-dialog></filter-municipality-dialog>
        <filter-department-dialog></filter-department-dialog>
      </section>
    </section>

    <section v-else>
      <v-container style="background-color: #F8F6FF">
        <v-row>
          <v-col cols="6" class="pr-0 pb-3">
            <test-type-dialog></test-type-dialog>
          </v-col>

          <v-col cols="6" class="pl-0 pb-3">
            <test-price-dialog></test-price-dialog>
          </v-col>

          <!-- <v-col cols="6" class="pr-0 pt-0">
            <filter-municipality-dialog></filter-municipality-dialog>
          </v-col>

          <v-col cols="6" class="pl-0 pt-0">
            <filter-department-dialog></filter-department-dialog>
          </v-col> -->
        </v-row>
      </v-container>
    </section>
  </section>
</template>

<script>
import TestTypeDialog from './TestTypeDialog.vue';
import TestPriceDialog from './TestPriceDialog.vue';
import FilterMunicipalityDialog from './FilterMunicipalityDialog.vue';
import FilterDepartmentDialog from './FilterDepartmentDialog.vue';

export default {
  components: {
    TestTypeDialog,
    TestPriceDialog,
    FilterMunicipalityDialog,
    FilterDepartmentDialog,
  },
}
</script>
