<template>
  <section>
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
                <v-list-item-subtitle class="text-decoration-underline">
                  Regresar a inicio
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-data-iterator
              :items="items"
              :loading="loading"
              :search="search"
              :items-per-page="-1"
              hide-default-footer>
            <template #header="{ items }">
              <v-list class="pb-0">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-subtitle>
                      Resultados ({{ items.length }})
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <span class="px-3 font-weight-bold text-h5"
                  v-if="getVaccine">
                Vacuna para COVID-19: {{ getVaccine }}
              </span>

              <div class="mb-5"></div>
            </template>

            <template #default="{ items }">
              <list-item-desktop
                v-for="(item, i) in items"
                :key="`list-item-${i}`"
                :item="item"
              ></list-item-desktop>
            </template>
          </v-data-iterator>
        </v-col>

        <v-col cols="1" offset="1">
          <map-filter></map-filter>
        </v-col>
      </v-row>
    </v-container>

    <site-footer></site-footer>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

import AppBar from "@/components/AppBar.vue";
import SiteFooter from "@/components/SiteFooter.Desktop.vue";
import MapFilter from "@/components/MapFilter.vue";
import FilterTopBarDesktop from '@/components/filters/FilterTopBar.Desktop.vue';
import ListItemDesktop from '@/components/list/ListItem.Desktop.vue';

export default {
  components: {
    AppBar,
    SiteFooter,
    MapFilter,
    FilterTopBarDesktop,
    ListItemDesktop,
  },

  data: () => ({
    loading: true,
    search: '',
  }),

  computed: {
    ...mapGetters({
      items: 'filtered',
      getVaccine: 'vaccine',
    })
  },
}
</script>
