<template>
  <section>
    <v-list two-line>
      <item-tests :item="item"></item-tests>
      <v-divider></v-divider>

      <item-address :item="item"></item-address>
      <v-divider></v-divider>
    </v-list>

    <v-col class="mx-1 mt-1 caption">
      <span style="font-weight: bold;">
        Nota:&nbsp;  
      </span>
      <span>
        Esta es información recopilada y no garantiza los precios mostrados.
      </span>
    </v-col>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import ItemTests from './detail/ItemTests.vue'
import ItemAddress from './detail/covid_tests/TestAddress.vue'

export default {
  components: {
    ItemAddress,
    ItemTests,
  },

  computed: {
    ...mapGetters('covidTestStore', {
      item: 'selected',
    }),
  },
}
</script>
