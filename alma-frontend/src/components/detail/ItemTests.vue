<template>
  <section>
    <information-section
      icon="mdi-checkbox-marked-circle-outline"
      title="Hisopados Disponibles"
    >
      <template #content>
        <v-container fluid>
          <v-row v-for="(item, i) in formatedTests" :key="i">
            <v-col
              cols="8"
              offset="2"
              class="pa-0 caption"
              :class="{ 'pb-1': i == formatedTests.length - 1 }"
            >
              <span class="font-weight-bold"> {{ item.type }}: </span>

              <span class="font-weight-medium"> {{ item.price }} </span>
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
    formatedTests() {
      const tests = []

      Object.entries(this.item.available).forEach(([type, price]) => {
        Object.entries(price).forEach(([testKey, testData]) => {
          testData.forEach((req) => {
            if (req.available) {
              tests.push({
                type: type,
                price: testKey,
              })
            }
          })
        })
      })

      return tests
    },
  },
}
</script>
