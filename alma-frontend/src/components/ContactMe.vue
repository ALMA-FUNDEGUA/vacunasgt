<template>
  <div
    class="d-flex flex-column justify-center align-center py-5 site-header__information"
  >
    <span class="text-h6 site-header__information-text mt-3">
      Escríbeme por WhatsApp o llámame GRATIS
    </span>

    <!-- Llámame GRATIS o escríbeme por WhatsApp para que uno de mis agentes te ayude a resolver tus dudas -->

    <div class="d-flex flex-column site-header__information-actions">
      <div
        class="d-flex flex-column justify-end site-header__information-action"
      >
        <div class="d-flex flex-column site-header__information-action">
          <v-btn
            rounded
            color="#00B176"
            elevation="0"
            href="https://api.whatsapp.com/send?phone=50224144321&text=Preg%C3%BAntale%20a%20ALMA"
            style="height: 65px; font-size: 20px"
            class="white--text font-weight-bold"
          >
            <v-icon style="margin-right: 6px"> mdi-whatsapp </v-icon>

            <span style="text-transform: none"> WhatsApp </span>
          </v-btn>
        </div>
        <v-btn
          rounded
          color="#704EEE"
          elevation="0"
          href="tel:1801-0054-321"
          style="height: 65px; font-size: 20px; width: 100%"
          class="white--text font-weight-bold"
        >
          <v-icon style="margin-right: 6px"> mdi-phone-outline </v-icon>

          <span style="text-transform: none"> 1-801-00-54321 </span>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.site-header {
  &__top-panel {
    height: 700px;
    background-image: url("@/assets/images/alma-header.svg");
  }

  &__title {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 54px;
    color: #200765;
  }

  &__information {
    gap: 20px;

    background-color: #beb1f8;
    background-image: url("@/assets/images/information-background.svg");
    background-size: cover;

    &-text {
      width: 85vw;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      text-align: center;
      color: #200765;
    }

    &-actions {
      gap: 15px;
    }

    &-action {
      gap: 15px;
    }
  }
}
</style>
