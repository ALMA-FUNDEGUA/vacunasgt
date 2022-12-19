<template>
  <div>
    <v-container class="py-0 mt-5">
      <div class="d-flex justify-end align-center site-header__top-panel">
        <div style="width: 600px" class="mt-n15">
          <span class="site-header__title">
            Encuentra vacunas contra
            <span style="color: #704eee"
              ><textra :data="vaccines" :timer="1.5" infinite="true" />
            </span>
            para ti y tu familia
          </span>
        </div>
      </div>
    </v-container>

    <div
      class="d-flex flex-column justify-center align-center site-header__information"
    >
      <span class="site-header__information-text justify-center">
        ¡Escríbeme por WhatsApp o llámame GRATIS!
      </span>

      <div class="d-flex site-header__information-actions">
        <div class="d-flex flex-column site-header__information-action">
          <v-btn
            rounded
            color="#00B176"
            elevation="0"
            href="https://api.whatsapp.com/send?phone=50224144321&text=Preg%C3%BAntale%20a%20ALMA"
            target="_blank"
            style="height: 65px; font-size: 20px"
            class="white--text font-weight-bold"
          >
            <v-icon style="margin-right: 6px"> mdi-whatsapp </v-icon>

            <span style="text-transform: none"> WhatsApp </span>
          </v-btn>

          <span class="text-center">
            Disponible en español los siete días de la semana, las 24 horas.
          </span>
        </div>
        <div class="d-flex flex-column site-header__information-action">
          <v-btn
            rounded
            color="#704EEE"
            elevation="0"
            href="tel:1801-0054-321"
            style="height: 65px; font-size: 20px"
            class="white--text font-weight-bold"
          >
            <v-icon style="margin-right: 6px"> mdi-phone-outline </v-icon>

            <span style="text-transform: none"> 1-801-00-54321 </span>
          </v-btn>

          <span class="text-center">
            Disponible en español los siete días de la semana, las 24 horas.
          </span>
        </div>
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
    height: 500px;
    gap: 40px;

    background-color: #beb1f8;
    background-image: url("@/assets/images/information-background.svg");
    background-size: cover;

    &-text {
      width: 60vw;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 48px;
      line-height: 50px;
      text-align: center;
      color: #200765;
    }

    &-actions {
      gap: 15px;
    }

    &-action {
      gap: 15px;
      width: 275px;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      vaccines: [
        "influenza",
        "COVID-19",
        "hepatitis B",
        "hepatitis A",
        "VPH",
        "varicela",
        "antirabia",
        "BCG",
        "poliomielitis",
        "5 en 1 (pentavalente)",
        "neuomococo",
        "rotavirus",
        "SDR",
        "DPT",
        "TDaP",
        "tétano",
      ],
    };
  },
};
</script>
