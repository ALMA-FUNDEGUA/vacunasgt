<template>
  <div class="site-footer white--text">
    <v-container>
      <div class="d-flex justify-space-between align-end">
        <span class="font-weight-bold site-footer__title"> alma </span>

        <div class="mb-n1">
          <span>¡Ponte en contacto con nosotros!</span>
        </div>
      </div>

      <hr class="mt-4" />

      <v-row>
        <v-col>
          <div class="mt-2">
            <span class="font-weight-light"> ©️ 2022 All Rights Reserved </span>
          </div>
        </v-col>
        <v-col class="text-right">
          <div class="mt-1">
            <v-btn
              icon
              color="white"
              href="https://api.whatsapp.com/send?phone=50224144321&text=Preg%C3%BAntale%20a%20ALMA"
              target="_blank"
            >
              <v-icon>mdi-whatsapp</v-icon>
            </v-btn>
            <v-btn icon color="white" href="tel:1801-0054-321">
              <v-icon>mdi-phone-outline</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.site-footer {
  padding-top: 125px;
  padding-bottom: 50px;
  background-image: url("@/assets/images/footer-bg.svg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;

  &__title {
    font-size: 34px;
    line-height: 1;
  }

  &__input {
    width: 350px;
  }
}
</style>
