<template>
  <section>
    <section v-if="$vuetify.breakpoint.mdAndUp">
      <section class="d-flex align-center justify-center">
        <filter-vaccine-dialog></filter-vaccine-dialog>
        <filter-dose-dialog></filter-dose-dialog>
        <filter-municipality-dialog></filter-municipality-dialog>
        <filter-department-dialog></filter-department-dialog>
      </section>
    </section>

    <section v-else>
      <v-container style="background-color: #F8F6FF">
        <v-row>
          <v-col cols="6" class="pr-0 pb-3">
            <filter-vaccine-dialog></filter-vaccine-dialog>
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
import FilterVaccineDialog from './FilterVaccineDialog.vue';
import FilterDoseDialog from './FilterDoseDialog.vue';
import FilterMunicipalityDialog from './FilterMunicipalityDialog.vue';
import FilterDepartmentDialog from './FilterDepartmentDialog.vue';

export default {
  components: {
    FilterVaccineDialog,
    FilterDoseDialog,
    FilterMunicipalityDialog,
    FilterDepartmentDialog,
  },
}
</script>
