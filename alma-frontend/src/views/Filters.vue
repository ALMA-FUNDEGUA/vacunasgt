<template>
  <section style="background-color: #fff">
    <section v-if="$vuetify.breakpoint.mdAndUp">
      <app-bar></app-bar>

      <v-container>
        <v-row>
          <v-col cols="4" offset="1">
            <center-filters></center-filters>

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
              @click="$router.push('/centers')"
            >
              Buscar mi vacuna
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
          Vacunas
        </v-toolbar-title>
      </v-app-bar>

      <center-filters></center-filters>
      <v-app-bar class="mt-9" flat>
        <v-btn
          style="color: #200765; font-weight: bold; background-color: #d0c2fd"
          class="no-uppercase mt-3"
          block
          rounded
          elevation="0"
          @click="$router.push('/centers')"
        >
          Buscar mi vacuna
        </v-btn>
      </v-app-bar>
    </section>
  </section>
</template>

<script>
import CenterFilters from "../components/CenterFilters.vue";
import AppBar from "../components/AppBar.vue";
import SiteFooter from "../components/SiteFooter.Desktop.vue";
import MapFilter from "../components/maps/MapFilter.vue";

export default {
  components: {
    AppBar,
    CenterFilters,
    SiteFooter,
    MapFilter,
  },
};
</script>
