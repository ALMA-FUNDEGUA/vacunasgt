<template>
  <section>
    <information-section icon="mdi-magnify" title="Observaciones">
      <template #information>
        <v-col cols="8" class="pa-0 pb-2 caption">
          <span class="font-weight-bold"> </span>
        </v-col>

        <v-col cols="8" class="pa-0 pb-2 caption">
          <span v-if="item.tests[0].observations" class="font-weight-medium caption mb-5">
            {{ item.tests[0].observations }}
          </span>

          <span v-else class="caption mb-5">
            Sin información adicional
          </span>
        </v-col>

        <div class="mt-1">
          <v-btn rounded @click="onShare" class="mb-2"> Compartir </v-btn>
        </div>
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
    verifyObservation() {
      return this.item.tests[0].observations
    },
    openMaps() {
      window.open(`https://waze.com/ul?q=${this.selected.name}`)
    },

    async onShare() {
      const toShareData = {
        title: 'VacunasGT Center',
        url: window.location.href,
      }

      if (navigator.canShare && navigator.canShare(toShareData))
        await navigator.share(toShareData)
      else
        await this.copyToClipboard()
    },

    async copyToClipboard() {
      try {
        await navigator.clipboard.writeText(window.location.href)
        alert('URL copiado')
      } catch ($e) {
        alert('No se pudo copiar el URL')
      }
    }
  },
}
</script>
