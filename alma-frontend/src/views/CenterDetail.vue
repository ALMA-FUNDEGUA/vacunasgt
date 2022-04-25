<template>
  <section>
    <section v-if="$vuetify.breakpoint.mdAndUp">
      <app-bar></app-bar>

      <v-container>
        <v-row>
          <v-col cols="4" offset="1">
            <v-list class="pb-0">
              <v-list-item @click="$router.back()">
                <v-list-item-avatar>
                  <v-icon>mdi-chevron-left</v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-subtitle class="text-decoration-underline">
                    Regresar a resultados
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
            </v-list>

            <center-detail></center-detail>
          </v-col>

          <v-col cols="1" offset="1">
            <map-filter></map-filter>
          </v-col>
        </v-row>
      </v-container>

      <site-footer></site-footer>
    </section>

    <section v-else>
      <v-app-bar flat color="#E4DFFF">
        <v-btn icon @click="$router.back()">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <div class="d-flex flex-column">
          <v-toolbar-title class="pl-0 font-weight-bold">
            {{ selected.name }}
          </v-toolbar-title>

          <!-- Add Update Feature -->
          <span class="caption d-none">
            Ultima actualizacion de datos: 2 de diciembre 2021
          </span>
        </div>
      </v-app-bar>

      <center-detail></center-detail>
    </section>
  </section>  
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

import AppBar from "../components/AppBar.vue";
import SiteFooter from "../components/SiteFooter.Desktop.vue";
import CenterDetail from '../components/CenterDetail.vue';
import MapFilter from "../components/MapFilter.vue";

export default {
  components: {
    AppBar,
    SiteFooter,
    CenterDetail,
    MapFilter,
  },

  beforeMount() {
    this.setSelected(this.$route.params.name)
  },

  computed: {
    ...mapGetters(['selected']),
  },

  methods: {
    ...mapMutations({
      setSelected: "SET_SELECTED",
    }),

    onSelect(name) {
      this.setSelected(name);
    },
  }
}
</script>
