<template>
  <section>
    <information-section icon="mdi-magnify" title="Observaciones">
      <template #information>
        <p class="caption mb-0"></p>

        <span class="font-weight-medium caption">
          {{ item.tests[0].observations }}
        </span>

        <v-col cols="8" class="pa-0 pb-2 caption">
          <span class="font-weight-bold"> </span>
        </v-col>
        <v-row
          v-for="(item, i) in testsAvailable.slice(0, 1)"
          :key="i"
          class="pa-0 pb-5 pt-2 caption"
        >
          <span class="font-weight-medium" v-if="item.specificSchedule != null">
            <span class="font-weight-bold"> Horario:</span>
            {{ item.specificSchedule }}
          </span>

          <span class="font-weight-medium" v-else>
            <span class="font-weight-bold"> Horario:</span>
            Por confirmar
          </span>
        </v-row>

        <v-else></v-else>
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
      if (navigator.canShare) {
        await navigator.share({
          title: 'VacunasGT Center',
          url: window.location.href,
        })
      } else {
        try {
          await navigator.clipboard.writeText(window.location.href)
          alert('URL copiado')
        } catch ($e) {
          alert('No se pudo copiar el URL')
        }
      }
    },
  },
}
</script>
