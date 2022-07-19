<template>
  <section>
    <information-section
        icon="mdi-clock-outline"
        title="Horario de Atención">
      <template #information>
        <p v-if="item.schedule.week" class="font-weight-medium mb-0 caption">
          {{ getSchedule }} {{ item.schedule.week }}
        </p>

        <p v-if="item.schedule.weekend" class="font-weight-medium mb-0 caption">
          Sab:
          {{ item.days.saturday ? item.schedule.weekend : "No disponible" }}
        </p>

        <p v-if="item.schedule.weekend" class="font-weight-medium mb-0 caption">
          Dom:
          {{ item.days.sunday ? item.schedule.weekend : "No disponible" }}
        </p>
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

  computed: {
    getSchedule() {
      let start = "";
      let end = "";

      if (this.item.days.monday) {
        start = "Lun";
      } else if (this.item.days.tuesday) {
        start = "Mar";
      }

      if (this.item.days.friday) {
        end = "Vie";
      } else if (this.item.days.thursday) {
        end = "Jue";
      }

      return `${start} - ${end}:`;
    },
  }
}
</script>
