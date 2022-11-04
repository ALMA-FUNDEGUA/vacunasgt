<template>
  <section>
    <information-section
        icon="mdi-phone-in-talk-outline"
        title="Información de Contacto">
      <template #content>
        <v-container fluid>
          <v-row>
            <v-col
              cols="8"
              offset="2"
              class="pa-0 caption"
            >
              <span class="font-weight-bold caption">
                Número:
              </span>

              <span class="font-weight-medium caption">
                {{ item.phoneNumber && item.phoneNumber !== 'N/A' ? item.phoneNumber : "Número por confirmar" }}
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
import InformationSection from '../InformationSection.vue';

export default {
  props: ['item'],

  components: {
    InformationSection,
  },

  methods: {
    openMaps() {
      window.open(`https://waze.com/ul?q=${this.item.center}`);
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
