<template>
  <section style="background-color: #fff">
    <section v-if="$vuetify.breakpoint.mdAndUp">
      <app-bar></app-bar>

      <v-container>
        <v-row>
          <v-col cols="4" offset="1">
            <test-center-filters></test-center-filters>

            <v-btn
              style="
                color: #200765;
                font-weight: bold;
                background-color: #d0c2fd;
              "
              class="no-uppercase mt-3"
              block
              rounded
              elevation="0"
              @click="$router.push('/testscenters')"
            >
              Buscar mi prueba
            </v-btn>
          </v-col>

          <v-col cols="1" offset="1">
            <map-filter></map-filter>
          </v-col>
        </v-row>
      </v-container>

      <site-footer></site-footer>
    </section>

    <section v-else>
      <v-app-bar app flat color="#E4DFFF">
        <v-btn icon @click="$router.push('/')">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <v-toolbar-title class="pl-0 font-weight-bold">
          Pruebas COVID-19
        </v-toolbar-title>
      </v-app-bar>
      <test-center-filters></test-center-filters>
      <v-app-bar class="mt-9" flat>
        <v-btn
          style="color: #200765; font-weight: bold; background-color: #d0c2fd"
          class="no-uppercase mt-3"
          block
          rounded
          elevation="0"
          @click="$router.push('/testscenters')"
        >
          Buscar mi prueba
        </v-btn>
      </v-app-bar>
    </section>
  </section>
</template>

<script>
import TestCenterFilters from "../components/TestCenterFilters.vue";
import AppBar from "../components/AppBar.vue";
import SiteFooter from "../components/SiteFooter.Desktop.vue";
import MapFilter from "../components/maps/CovidTestMapFilter.vue";

export default {
  components: {
    AppBar,
    TestCenterFilters,
    SiteFooter,
    MapFilter,
  },
  data: () => ({
    schedule: "week",
  }),
};
</script>

<style scoped>
.filter-input {
  background-color: #f3f3f3;
  border: 0px solid white !important;
}
.v-text-field--outlined >>> fieldset {
  border: 0px solid black;
}
.v-input--selection-controls__input {
  background: black;
}
</style>
