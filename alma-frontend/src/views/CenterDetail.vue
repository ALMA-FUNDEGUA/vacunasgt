<template>
  <section>
    <section v-if="$vuetify.breakpoint.mdAndUp">
      <app-bar></app-bar>

      <v-container>
        <v-row>
          <v-col cols="4" offset="1">
            <div class="d-flex flex-column">
              <v-card-title class="pl-0 font-weight-bold" style="word-break: break-word; line-height: 27px;">
                {{ selected.name }}
              </v-card-title>
            </div>
            <v-list class="pb-0">
              <v-list-item @click="$router.push('/centers')">
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
            <selected-map-desktop></selected-map-desktop>
          </v-col>
        </v-row>
      </v-container>

      <site-footer></site-footer>
    </section>

    <section v-else>
      <v-app-bar flat color="#E4DFFF">
        <v-btn icon @click="$router.push('/centers')">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <div class="d-flex flex-column">
          <v-card-title class="pl-0 font-weight-bold" style="word-break: break-word; line-height: 27px;">
            {{ selected.name }}
          </v-card-title>

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
import { mapGetters, mapMutations } from "vuex";
import "leaflet/dist/leaflet.css";

import AppBar from "../components/AppBar.vue";
import SiteFooter from "../components/SiteFooter.Desktop.vue";
import CenterDetail from "../components/CenterDetail.vue";
import SelectedMapDesktop from "../components/SelectedMapDesktop.vue";

export default {
  components: {
    AppBar,
    SiteFooter,
    CenterDetail,
    SelectedMapDesktop,
  },

  beforeMount() {
    this.setSelected(this.$route.params.name);
  },

  computed: {
    ...mapGetters(["selected"]),
  },

  methods: {
    ...mapMutations({
      setSelected: "SET_SELECTED",
    }),

    onSelect(name) {
      this.setSelected(name);
    },
  },
};
</script>
