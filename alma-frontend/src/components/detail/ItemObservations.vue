<template>
  <section>
    <information-section icon="mdi-magnify" title="Observaciones">
      <template #information>
        <p class="caption mb-0"></p>

        <span class="font-weight-medium caption">
          {{ item.observations }}
        </span>
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

  methods: {
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
