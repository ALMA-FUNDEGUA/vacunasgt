<template>
  <v-container class="mt-5">
    <div class="d-flex justify-center">
      <section v-if="$vuetify.breakpoint.mdAndUp">

        <p class="information-title" style="color: #200765">
          Información Sobre COVID-19
        </p>
      </section>

      <section v-else>
        <span class="text-h6 information-title">
          Informacion Sobre COVID-19
        </span>
      </section>
    </div>

    <v-row class="mb-5">

      <v-col v-for="(item, i) in items" :key="i" cols="12" md="4">
        <a :href="item.link" style="text-decoration: none">
          <v-card class="information-card">
            <div
              class="d-flex justify-center align-center my-5 mx-1"
              style="height: 100%"
            >
              <span class="text-center information__btn-text">
                {{ item.label }}
              </span>
            </div>
          </v-card>
        </a>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        label: "Encuentra tu vacuna",
        link: "/filters",
      },

      {
        label: "Encuentra hisopados ",
        link: "/testsfilters",
      },

      {
        label: "Disposiciones",
        link: "https://docs.almabot.com/",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.information {
  &-title {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    line-height: 50px;
  }

  &-card {
    height: 100%;
    color: #200765;
    font-weight: bold;
    background-color: #d0c2fd;
    border-radius: 100px;
  }

  &__btn-text {
    font-size: 1.3rem;
  }
}
</style>
