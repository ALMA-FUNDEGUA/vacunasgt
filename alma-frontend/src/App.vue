<template>
  <v-app>
    <v-main class="no-scroll">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",

  data: () => ({
    //
  }),

  created() {
    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        this.showUpdateUI = true;
      });
    }
  },
  beforeMount() {
    this.$store.dispatch("CENTROS_HORARIOS_VACUNA");

    this.fetchCenters();
  },

  methods: {
    ...mapActions(["fetchCenters"]),
  },
};
</script>

<style>
@import "../src/assets/css/general.css";
@import "../src/assets/libraries/fontawesome/css/all.css";

.no-uppercase {
  text-transform: unset !important;
}

.no-scroll {
  overflow-x: hidden !important;
}

.filter-dialog-padding {
  padding-left: 5rem !important;
  padding-right: 5rem !important;
}
</style>
