<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="2" class="d-flex align-center justify-center pb-0">
          <v-icon>
            {{ icon }}
          </v-icon>
        </v-col>

        <v-col cols="8" class="d-flex align-center pb-0 px-0">
          <span class="font-weight-bold">
            {{ title }}
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

    <section class="expandable-content" :class="{'expanded': isExpanded}">
      <slot name="content">
        <v-container fluid>
          <v-row>
            <v-col cols="8" offset="2" class="px-0 pt-0">
              <slot name="information">
                <span>Insert Information Here!</span>
              </slot>
            </v-col>
          </v-row>
        </v-container>
      </slot>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
  },

  data: () => ({
    expanded: true,
  }),

  computed: {
    isExpanded() {
      return this.expanded
    },
  }
}
</script>

<style scoped>
.expandable-content {
  height: auto;
  max-height: 5rem;
  overflow-y: hidden;
  transition: max-height 0.7s ease-in-out;
}

.expanded {
  max-height: 100vh;
}
</style>
