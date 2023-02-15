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
            <span class="font-weight-light"> ©️ 2023 All Rights Reserved </span>
          </div>
        </v-col>
        <v-col class="text-right">
          <div class="mt-1">
            <v-btn icon color="white"
              href="https://api.whatsapp.com/send?phone=50224144321&text=Preg%C3%BAntale%20a%20ALMA" target="_blank">
              <v-icon>mdi-whatsapp</v-icon>
            </v-btn>
            <v-btn icon color="white" href="tel:1801-0054-321">
              <v-icon>mdi-phone-outline</v-icon>
            </v-btn>
            <v-btn icon color="white" href="https://twitter.com/alma_responde" target="_blank">
              <v-icon>mdi-twitter</v-icon>
            </v-btn>

            <v-btn icon color="white" href="https://www.instagram.com/alma_responde/" target="_blank">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>

            <v-btn icon color="white" href="https://www.facebook.com/chatbotALMA" target="_blank">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn elevation="0" icon color="white" class="no-uppercase font-weight-bold"
              href="https://www.tiktok.com/@alma_responde" target="_blank">
              <template>
                <svg width="24px" height="24px" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z">
                  </path>
                </svg>
              </template>
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
