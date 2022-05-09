<template>
  <section>
    <section class="d-flex align-center justify-center">
      <filter-vaccine-dialog></filter-vaccine-dialog>
      <filter-dose-dialog></filter-dose-dialog>
      <filter-municipality-dialog></filter-municipality-dialog>
      <filter-department-dialog></filter-department-dialog>
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
