<template>
  <section>
    <section v-if="$vuetify.breakpoint.mdAndUp">
      <section class="d-flex align-center justify-center">
        <test-type-dialog></test-type-dialog>
        <test-department-dialog></test-department-dialog>
        <test-municipality-dialog></test-municipality-dialog>
        <test-service-type-dialog></test-service-type-dialog>
      </section>
    </section>

    <section v-else>
      <v-container style="background-color: #f8f6ff">
        <v-row>
          <v-col cols="6" class="pr-0 pb-3">
            <test-type-dialog></test-type-dialog>
          </v-col>

          <v-col cols="6" class="pr-0 pb-3">
            <test-department-dialog></test-department-dialog>
          </v-col>

          <v-col cols="6" class="pl-0 pb-3">
            <test-municipality-dialog></test-municipality-dialog>
          </v-col>

          <v-col cols="6" class="pl-0 pb-3">
            <test-service-type-dialog></test-service-type-dialog>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </section>
</template>

<script>
import TestTypeDialog from './covid_tests/TestTypeDialog.vue';
import TestDepartmentDialog from './covid_tests/TestDepartmentDialog.vue';
import TestMunicipalityDialog from './covid_tests/TestMunicipalityDialog.vue';
import TestServiceTypeDialog from './covid_tests/TestServiceTypeDialog.vue';

export default {
  components: {
    TestTypeDialog,
    TestDepartmentDialog,
    TestMunicipalityDialog,
    TestServiceTypeDialog,
  },
}
</script>
