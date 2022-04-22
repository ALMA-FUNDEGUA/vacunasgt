<template>
  <section>
    <v-container>
      <v-row>
        <v-col class="text-center">
          <span class="display-1 font-weight-bold">
            ¡Ponte en contacto con nosotros!
          </span>

          <section class="mt-5">
            <v-btn
              rounded
              color="#FFE6B7"
              elevation="0"
              href="tel:1801-0054-321"
              class="no-uppercase mr-5"
            >
              <v-icon style="margin-right: 10px">mdi-phone-outline</v-icon>
              1-801-00-54321
            </v-btn>

            <v-btn
              rounded
              color="#FFE6B7"
              elevation="0"
              class="no-uppercase ml-5"
              href="https://api.whatsapp.com/send?phone=50224144321&text=Preg%C3%BAntale%20a%20ALMA"
              target="_blank"
            >
              <v-icon style="margin-right: 10px">mdi-whatsapp</v-icon>
              Hablanos por Whatsapp
            </v-btn>
          </section>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="9" class="pb-0">
          <div class="d-flex justify-space-between align-center">
            <span class="text-h3 font-weight-bold" style="color: #7f6cf6">
              alma
            </span>

            <div
              class="d-flex justify-space-around align-center"
              style="width: 50%"
            >
              <v-btn
                text
                class="no-uppercase"
                style="text-decoration: underline"
                to="/filters"
              >
                <v-icon style="display: inline-block; text-decoration: none"
                  >mdi-magnify</v-icon
                >
                Busca tu vacuna
              </v-btn>

              <v-btn
                text
                class="no-uppercase"
                style="text-decoration: underline"
              >
                <v-icon style="display: inline-block; text-decoration: none"
                  >mdi-book-open-page-variant-outline</v-icon
                >
                Directorio
              </v-btn>

              <v-btn
                text
                class="no-uppercase"
                style="text-decoration: underline"
                href="https://docs.almabot.com/"
                target="_blank"
              >
                <v-icon style="display: inline-block; text-decoration: none"
                  >mdi-help-circle-outline</v-icon
                >
                FAQ
              </v-btn>
            </div>

            <div style="width: 10%"></div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="9">
          <v-divider color="#CDC4FF"></v-divider>

          <div class="d-flex justify-space-between align-center">
            <!--
    <v-img
              :src="require('@/assets/icons/svg-desktopFooter.svg')"
              style="z-index: 1"
              max-height="800px"
              max-width="800px"
            ></v-img>
              -->

            <span class="font-weight-light"> ©️ 2022 All Rights Reserved </span>

            <div class="d-flex justify-space-between align-center">
              <v-btn
                icon
                href="https://twitter.com/alma_responde"
                target="_blank"
              >
                <v-icon>mdi-twitter</v-icon>
              </v-btn>

              <v-btn
                icon
                href="https://www.instagram.com/alma_responde/"
                target="_blank"
              >
                <v-icon>mdi-instagram</v-icon>
              </v-btn>

              <v-btn
                icon
                href="https://www.facebook.com/chatbotALMA"
                target="_blank"
              >
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
