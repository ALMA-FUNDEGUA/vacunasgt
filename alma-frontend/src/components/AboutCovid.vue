<template>
  <v-container class="mt-5">
    <div class="d-flex justify-center">
      <section v-if="$vuetify.breakpoint.mdAndUp">
        <span class="text-h2 information-title">
          Informacion Sobre COVID-19
        </span>
      </section>

      <section v-else>
        <span class="text-h6 information-title">
          Informacion Sobre COVID-19
        </span>
      </section>
    </div>

    <v-row class="mb-5">
      <v-col v-for="(item, i) in items" :key="i"
          cols="12" md="4">
        <v-card class="information-card">
          <div class="d-flex justify-center align-center my-5 mx-1" style="height: 100%">
            <span class="text-center information__btn-text">
              {{ item.label }}
            </span>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        label: 'Encuentra tu vacuna',
      },

      {
        label: 'Encuentra Hisopados cerca de ti',
      },

      {
        label: 'Disposiciones',
      },
    ]
  })
};
</script>

<style lang="scss" scoped>
.information {
  &-title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    line-height: 50px;
  }

  &-card {
    height: 100%;
    color: #200765;
    background-color: #D0C2FD;
    border-radius: 100px;
  }

  &__btn-text {
    font-size: 1.3rem;
  }
}
</style>
