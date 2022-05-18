<template>
  <section>
    <v-data-iterator
      :items="items"
      :loading="loading"
      :search="search"
      :items-per-page="-1"
      hide-default-footer
    >
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

        <span class="font-weight-bold text-h5" v-if="getVaccine">
          <span class="text-h5">Vacuna para COVID-19:</span>
          {{ getVaccine }}
        </span>

        <div class="mb-5"></div>
      </template>

      <template #default="{ items }">
        <section v-if="items.length > 5">
          <VueAutoVirtualScrollList
            :totalHeight="800"
            :defaultHeight="80"
            style="width: 100%"
          >
            <list-item-desktop
              v-for="(item, i) in items"
              :key="`list-item-${i}`"
              :item="item"
            ></list-item-desktop>
          </VueAutoVirtualScrollList>
        </section>
        <section v-else>
          <list-item-desktop
            v-for="(item, i) in items"
            :key="`list-item-${i}`"
            :item="item"
          ></list-item-desktop>
        </section>
      </template>

      <template #loading>
        <v-skeleton-loader
          v-for="item in 3"
          v-bind:key="item"
          class="mx-auto"
          max-width="100%"
          height="80px"
          type="card"
          style="margin-bottom: 1vh"
        ></v-skeleton-loader>
      </template>

      <template #no-data>
        <div class="d-flex flex-column align-center my-5">
          <i
            class="fas fa-hospital-user"
            style="font-size: 72px; color: #c3c1d8"
          ></i>

          <h3>No se encontraron registros</h3>
        </div>
      </template>

      <template #no-results>
        <div class="d-flex flex-column align-center my-5">
          <i
            class="fas fa-hospital-user"
            style="font-size: 72px; color: #c3c1d8"
          ></i>

          <h3>No se encontraron registros</h3>
        </div>
      </template>
    </v-data-iterator>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import VueAutoVirtualScrollList from 'vue-auto-virtual-scroll-list'
import ListItemDesktop from '@/components/list/ListItem.Desktop.vue'

export default {
  components: {
    ListItemDesktop,
    VueAutoVirtualScrollList,
  },

  data: () => ({
    loading: true,
    search: '',
  }),

  computed: {
    ...mapGetters({
      items: 'filtered',
      getVaccine: 'vaccine',
    }),
  },
}
</script>
