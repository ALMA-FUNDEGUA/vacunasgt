<template>
  <v-app style="background-color: #fffcff;">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  beforeMount(){
    this.$store.dispatch('CENTROS_HORARIOS_VACUNA')

    this.fetchCenters()
  },

  methods: {
    ...mapActions(['fetchCenters'])
  }
};
</script>

<style>
@import '../src/assets/css/general.css';
@import '../src/assets/libraries/fontawesome/css/all.css';

/* @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  font-family: 'Poppins', sans-serif !important;
} */

.no-uppercase {
  text-transform: unset !important;
}
</style>
