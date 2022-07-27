<template>
  <section>
    <v-list two-line>
      <item-schedule :item="item"></item-schedule>
      <v-divider></v-divider>

      <item-tests :item="item"></item-tests>
      <v-divider></v-divider>

      <item-address :item="item"></item-address>
      <v-divider></v-divider>
    </v-list>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import ItemSchedule from './detail/ItemSchedule.vue'
import ItemTests from './detail/ItemTests.vue'
import ItemAddress from './detail/ItemAddress.vue'

export default {
  components: {
    ItemSchedule,
    ItemAddress,
    ItemTests,
  },

  computed: {
    ...mapGetters({
      item: 'selected',
    }),
  },
}
</script>
