<template>
  <section>
    <v-list two-line>
      <test-contact-information :item="item"></test-contact-information>
      <v-divider></v-divider>

      <item-tests :item="item"></item-tests>
      <v-divider></v-divider>

      <item-address :item="item"></item-address>
      <v-divider></v-divider>
    </v-list>

    <v-col class="mx-1 mt-1 caption">
      <span style="font-weight: bold"> Nota:&nbsp; </span>
      <span>
        Esta información fue recopilada y el centro se reserva el derecho de
        cambiar sus precios.
      </span>
    </v-col>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import TestContactInformation from './detail/covid_tests/TestContactInformation.vue'
import ItemTests from './detail/ItemTests.vue'
import ItemAddress from './detail/covid_tests/TestAddress.vue'

export default {
  components: {
    TestContactInformation,
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
