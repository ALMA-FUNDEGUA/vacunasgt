<template>
  <v-app style="background-color: #eae4f3">
    <loading-page></loading-page>

    <v-main class="no-scroll">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import LoadingPage from "./components/LoadingPage.vue";

import HotJar from "vue-hotjar";
import Vue from "vue";

import Textra from "vue-textra";

Vue.use(Textra);

Vue.use(HotJar, {
  id: "2536356",
  isProduction: true,
});

export default {
  name: "App",

  components: {
    LoadingPage,
  },

  data: () => ({
    //
  }),

  computed: {
    ...mapGetters("covidTestStore", ["loading", "centers"]),
  },

  created() {
    document.onreadystatechange = () => {
      if (this.$workbox) {
        this.$workbox.addEventListener("waiting", () => {
          this.showUpdateUI = true;
        });
      }

      if (document.readyState === "complete") {
        this.fetchCenters();
        this.fetchCovidTest();
      }
    };
  },

  methods: {
    ...mapActions(["fetchCenters"]),
    ...mapActions("covidTestStore", {
      fetchCovidTest: "fetchCenters",
    }),
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
