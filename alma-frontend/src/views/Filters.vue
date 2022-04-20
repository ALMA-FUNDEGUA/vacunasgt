<template>
  <section>
    <section v-if="$vuetify.breakpoint.mdAndUp">
      <app-bar></app-bar>

      <v-container>
        <v-row>
          <v-col cols="4" offset="1">
            <center-filters></center-filters>

            <v-btn
              color="#FFD789"
              block
              rounded
              elevation="0"
              class="no-uppercase"
              @click="$router.push('dashboard')"
            >
              Buscar mi vacuna
            </v-btn>
          </v-col>
          <v-col cols="1" offset="1"> <map-filter></map-filter> </v-col>
        </v-row>
      </v-container>

      <site-footer></site-footer>
    </section>

    <section v-else>
      <v-app-bar app flat color="#E4DFFF">
        <v-btn icon @click="$router.go(-1)">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <v-toolbar-title class="pl-0 font-weight-bold">
          Vacunas
        </v-toolbar-title>
      </v-app-bar>

      <center-filters></center-filters>

      <v-app-bar class="mt-2">
        <v-btn
          color="#FFD789"
          block
          rounded
          elevation="0"
          @click="$router.push('mobile-centers')"
        >
          Aplicar Filtros
        </v-btn>
      </v-app-bar>
    </section>
  </section>
</template>

<script>
import CenterFilters from "../components/CenterFilters.vue";
import AppBar from "../components/AppBar.vue";
import SiteFooter from "../components/SiteFooter.Desktop.vue";
import MapFilter from "../components/MapFilter.vue";

export default {
  components: {
    AppBar,
    CenterFilters,
    SiteFooter,
    MapFilter,
  },
};
</script>
