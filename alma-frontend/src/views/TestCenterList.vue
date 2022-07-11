<template>
  <section>
    <section v-if="$vuetify.breakpoint.mdAndUp">
      <center-list-desktop></center-list-desktop>
    </section>

    <section v-else>
      <center-list-mobile></center-list-mobile>
    </section>
  </section>
</template>

<script>
import CenterListDesktop from '@/components/views/TestCenterList.Desktop.vue'
import CenterListMobile from '@/components/MobileCenterList.vue'

export default {
  components: {
    CenterListDesktop,
    CenterListMobile,
  },
}
</script>
