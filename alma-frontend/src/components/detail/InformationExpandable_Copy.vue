<template>
  <section>
    <v-container>
      <v-row @click="expanded = !expanded">
        <v-col cols="2" class="d-flex align-center justify-center pb-0">
          <v-icon>
            mdi-checkbox-marked-circle-outline
          </v-icon>
        </v-col>

        <v-col cols="8" class="d-flex align-center pb-0 px-0">
          <span class="font-weight-bold">
            Vacunas Disponibles
          </span>
        </v-col>

        <v-col cols="2" class="d-flex align-center justify-center pb-0">
          <v-btn icon disabled>
            <v-icon>
              {{ expanded ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="vaccines"
        :class="{'expanded': isExpanded}">
      <v-row v-for="(item, i) in formatedVaccines" :key="i">
        <v-col offset="2" class="pa-0 caption"
            :class="{'pb-1': (i == formatedVaccines.length - 1)}">
          <span class="font-weight-bold">
            {{ item.vaccine }}:
          </span>

          <span class="font-weight-medium">
            {{ item.detail }}
          </span>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-if="formatedVaccines.length > 3">
      <v-row>
        <v-col class="py-0" @click="expanded = !expanded">
          <p class="text-center caption mb-0 font-weight-thin">
            {{ expanded ? 'Ver Menos' : 'Ver Mas' }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  props: ['item'],

  data: () => ({
    expanded: false,
  }),

  computed: {
    isExpanded() {
      if (this.formatedVaccines.length <= 3)
        return true
      else return this.expanded
    },

    formatedVaccines() {
      const vaccines = [];

      Object.entries(this.item.vaccines).forEach(([vaccine, dose]) => {
        Object.entries(dose).forEach(([doseKey, doseData]) => {
          doseData.forEach((req) => {
            if (req.available) {
              vaccines.push({
                vaccine: vaccine,
                detail: `${this.formatDose(doseKey)} / ${req.group}`,
              });
            }
          });
        });
      });

      return vaccines;
    },
  },

  methods: {
    formatDose(dose) {
      switch (dose) {
        case "PRIMERA":
          return "1era";
        case "SEGUNDA":
          return "2nda";
        case "TERCERA":
          return "3ra";
        case "CUARTA":
          return "4ta";
        default:
          return dose;
      }
    },
  }
}
</script>

<style scoped>
.vaccines {
  height: auto;
  max-height: 5rem;
  overflow-y: hidden;
  transition: max-height 0.7s ease-in-out;
}

.expanded {
  max-height: 100vh;
}
</style>
