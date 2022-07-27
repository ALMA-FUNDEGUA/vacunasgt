<template>
  <section>
    <information-section
      icon="mdi-checkbox-marked-circle-outline"
      title="Hisopados Disponibles"
    >
      <template #content>
        <v-container fluid>
          <v-row v-for="(item, i) in testsAvailable" :key="i">
            <v-col
              cols="8"
              offset="2"
              class="pa-0 caption"
            >
              <span class="font-weight-bold">
                {{ item.testType }}:
              </span>

              <span class="font-weight-medium">
                &nbsp;&nbsp;
                {{ formatTestPrice(item) }}
              </span>
            </v-col>

            <v-col
              cols="8"
              offset="2"
              class="pa-0 pb-2 caption"
            >
              <span class="font-weight-bold">
                Horario:
              </span>

              <span class="font-weight-medium">
                {{ item.specificSchedule }}
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
      return this.item.tests.filter(item => item.available)
    },
  },

  methods: {
    formatTestPrice({ serviceType, price }) {
      if (serviceType == 'GRATUITO') {
        return 'Servicio Gratuito'
      }

      return `Q${ price }`
    }
  }
}
</script>
