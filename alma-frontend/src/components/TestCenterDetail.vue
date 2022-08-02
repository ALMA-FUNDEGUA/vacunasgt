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
        La información presentada es el resultado de la recopilación de
        información de diferentes establecimientos públicos y privados. Los
        precios que se muestran están sujetos a cambios y son responsabilidad de
        cada empresa. Con el fin de mostrar información certera y actualizada,
        nuestro equipo se encuentra en constante actualización de la base de
        datos
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
