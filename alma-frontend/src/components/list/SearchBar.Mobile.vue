<template>
  <section>
    <v-container fluid class="search-box">
      <v-row>
        <v-col cols="12" class="d-flex justify-end">
          <v-text-field
            :value="modelValue" @input='input'
            dense outlined :rounded="fab"
            hide-details
            placeholder="Buscar Centro..."
            prepend-inner-icon="mdi-magnify"
            append-icon="mdi-close"
            @click:prepend-inner="fab = true"
            @click:append="fab = !fab"
            class="expandable-input"
            :class="{'closed': !fab}"
            :dark="!fab"
            :background-color="!fab ? 'primary' : 'white'"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  props: {
    modelValue: String,
  },

  data: () => ({
    fab: false,
  }),

  methods: {
    input(val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.search-box {
  position: fixed;
  width: 100vw;
  z-index: 1;
  bottom: 80px;
  right: 0;
}

.expandable-input {
  width: auto;
  max-width: 100vw;
}

.closed {
  max-width: 45px;
  transition: border-radius 0.1s linear;
}
</style>
