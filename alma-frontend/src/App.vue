<template>
  <v-app>
    <loading-page></loading-page>

    <v-main class="no-scroll">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

import LoadingPage from './components/LoadingPage.vue'

export default {
  name: 'App',

  components: {
    LoadingPage,
  },

  data: () => ({
    //
  }),

  created() {
    document.onreadystatechange = () => {
      if (this.$workbox) {
        this.$workbox.addEventListener('waiting', () => {
          this.showUpdateUI = true
        })
      }

      if (document.readyState === 'complete') {
        this.$store.dispatch('CENTROS_HORARIOS_VACUNA')
        this.fetchCenters()

        this.fetchCovidTest()
      }
    }
  },

  methods: {
    ...mapActions(['fetchCenters']),
    ...mapActions('covidTestStore', {
      fetchCovidTest: 'fetchCenters',
    }),
  },
}
</script>

<style>
@import '../src/assets/css/general.css';
@import '../src/assets/libraries/fontawesome/css/all.css';

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
