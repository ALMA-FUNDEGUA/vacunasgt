<template>
  <section>
    <section v-if="$vuetify.breakpoint.mdAndUp">
      <home-view-desktop></home-view-desktop>
    </section>

    <section v-else>
      <home-view-mobile></home-view-mobile>
    </section>
  </section>
</template>

<script>
import HomeViewDesktop from "../components/views/HomeView.Desktop.vue";
import HomeViewMobile from "../components/views/HomeView.Mobile.vue";

export default {
  components: {
    HomeViewDesktop,
    HomeViewMobile,
  },
};
</script>
