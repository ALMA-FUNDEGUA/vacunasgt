<template>
  <section>
    <section v-if="$vuetify.breakpoint.mdAndUp">
      <center-list-desktop></center-list-desktop>
    </section>

    <section v-else>
      <test-list-mobile></test-list-mobile>
    </section>
  </section>
</template>

<script>
import CenterListDesktop from '@/components/views/CenterList.Desktop.vue';
import TestListMobile from '@/components/MobileTestList.vue';

export default {
  components: {
    CenterListDesktop,
    TestListMobile,
  }
}
</script>
