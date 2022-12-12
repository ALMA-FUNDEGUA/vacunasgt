<template>
  <section style="background-color: #fff">
    <app-bar></app-bar>

    <filter-top-bar-desktop></filter-top-bar-desktop>

    <v-container>
      <v-row>
        <v-col cols="4" offset="1">
          <v-list class="pb-0">
            <v-list-item @click="$router.push('/')">
              <v-list-item-avatar>
                <v-icon>mdi-chevron-left</v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-subtitle> Regresar a inicio </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <list-iterator-desktop></list-iterator-desktop>
        </v-col>

        <v-col cols="5" offset="1">
          <map-filter></map-filter>
        </v-col>
      </v-row>
    </v-container>

    <site-footer></site-footer>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import AppBar from "@/components/AppBar.vue";
import SiteFooter from "@/components/SiteFooter.Desktop.vue";
import MapFilter from "@/components/maps/CovidTestMapFilter.vue";
import FilterTopBarDesktop from "@/components/filters/TestFilterTopBar.Desktop.vue";
import ListIteratorDesktop from "@/components/list/TestListIterator.Desktop.vue";

export default {
  components: {
    AppBar,
    SiteFooter,
    MapFilter,
    FilterTopBarDesktop,
    ListIteratorDesktop,
  },

  data: () => ({
    loading: true,
    search: "",
  }),

  computed: {
    ...mapGetters("covidTestStore", {
      items: "filtered",
    }),
  },
};
</script>
