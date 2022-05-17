<template>
  <section>
    <information-section
        icon="mdi-map-marker-outline"
        title="Dirección">
      <template #information>
        <span class="font-weight-medium caption">
          {{ item.address }}
        </span>

        <div>
          <v-btn color="#65CBF9" rounded class="mt-2 mb-2" @click="openMaps">
            Abrir en Waze
          </v-btn>
        </div>

        <div class="mt-1">
          <v-btn rounded @click="onShare" class="mb-2">
            Compartir
          </v-btn>
        </div>
      </template>
    </information-section>
  </section>
</template>

<script>
import InformationSection from './InformationSection.vue';

export default {
  props: ['item'],

  components: {
    InformationSection,
  },

  methods: {
    openMaps() {
      window.open(`https://waze.com/ul?q=${this.selected.name}`);
    },

    async onShare() {
      if(navigator.canShare){
        await navigator.share({
          title: "VacunasGT Center",
          url: window.location.href,
        });
      }
      else{
        try {
          await navigator.clipboard.writeText(window.location.href);
          alert('URL copiado');
        } catch($e) {
          alert('No se pudo copiar el URL');
        }
      }
    },
  }
}
</script>
