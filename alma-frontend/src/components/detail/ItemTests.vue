<template>
  <section>
    <information-section
      icon="mdi-checkbox-marked-circle-outline"
      title="Hisopados Disponibles"
    >
      <template #content>
        <v-container fluid>
          <v-row v-for="(item, i) in testsAvailable" :key="i">
            <v-col cols="8" offset="2" class="pa-0 caption pb-2">
              <span class="font-weight-bold"> {{ item.testType }}: </span>

              <span class="font-weight-medium">
                {{ item.resultTime ? `${item.resultTime} - ` : '' }}
                {{ formatTestPrice(item) }}
              </span>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </information-section>
  </section>
</template>

<script>
import InformationSection from './InformationSection.vue'

export default {
  props: ['item'],

  components: {
    InformationSection,
  },

  computed: {
    testsAvailable() {
      return this.item.tests.filter((item) => item.available)
    },
  },

  methods: {
    formatTestPrice({ serviceType, price }) {
      if (serviceType === 'Gratis') {
        return 'Servicio Gratuito'
      }

      return `Q${price}`
    },
  },
}
</script>
