<template>
  <section>
    <v-data-iterator
      :items="centers"
      :search="search"
      hide-default-footer
      :items-per-page="-1"
    >
      <template #header>
        <v-text-field
          v-model="search"
          label="Buscar"
          color="primary"
          outlined
          dense
          hide-details
          class="my-3"
          prepend-inner-icon="mdi-magnify"
          clearable
        ></v-text-field>
      </template>

      <template #default="{ items }">
        <div
          v-for="(item, index) in items"
          :key="`center-${index}`"
          @click="$emit('select', { item, index })"
        >
          <center-item
            :item="item"
            :selected="selected === index"
          ></center-item>
        </div>
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
        <div class="d-flex flex-column align-center">
          <i
            class="fas fa-hospital-user"
            style="font-size: 72px; color: #c3c1d8"
          ></i>

          <h3>No se encontraron registros</h3>
        </div>
      </template>

      <template #no-results>
        <div class="d-flex flex-column align-center">
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

import CenterItem from './CenterItem.vue'

export default {
  props: ['selected'],
  components: {
    CenterItem,
  },

  data: () => ({
    search: '',
  }),

  computed: {
    ...mapGetters({
      centers: 'FILTERED_COVIDTESTCENTERS',
    }),
  },
}
</script>
