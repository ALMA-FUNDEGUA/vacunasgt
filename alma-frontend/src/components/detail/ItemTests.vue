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
    formatedVaccines() {
      const vaccines = []

      Object.entries(this.item.vaccines).forEach(([vaccine, dose]) => {
        Object.entries(dose).forEach(([doseKey, doseData]) => {
          doseData.forEach((req) => {
            if (req.available) {
              vaccines.push({
                vaccine: vaccine,
                detail: `${this.formatDose(doseKey)} / ${req.group}`,
              })
            }
          })
        })
      })

      return vaccines
    },
    formatedTests() {
      const tests = []

      tests.push({ type: 'Antígeno', price: 'Q250' })
      tests.push({ type: 'PCR', price: 'Q600' })

      return tests
    },
  },

  methods: {
    formatDose(dose) {
      switch (dose) {
        case 'PRIMERA':
          return '1era'
        case 'SEGUNDA':
          return '2nda'
        case 'TERCERA':
          return '3ra'
        case 'CUARTA':
          return '4ta'
        default:
          return dose
      }
    },
  },
}
</script>
