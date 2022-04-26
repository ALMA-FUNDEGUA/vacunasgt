<template>
  <section>
    <section v-if="$vuetify.breakpoint.mdAndUp">
      <center-list-desktop></center-list-desktop>
    </section>

    <section v-else>

    </section>
  </section>
</template>

<script>
import CenterListDesktop from '@/components/views/CenterList.Desktop.vue';

export default {
  components: {
    CenterListDesktop,
  }
}
</script>
