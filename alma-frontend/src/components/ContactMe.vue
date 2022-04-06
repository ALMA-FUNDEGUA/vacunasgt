<template>
  <section>
    <v-container>
      <v-row>
        <v-col>
          <p class="text-center mb-0 font-weight-bold">Comunícate conmigo</p>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card color="#F8F6FF" flat>
            <section
              class="d-flex flex-column py-5 justify-center align-center"
            >
              <section>
                <!-- <span class="display-4">
                  📱
                </span> -->
                <span style="font-size: 85px"> 📞 </span>
              </section>

              <section class="mt-3">
                <span class="font-weight-bold">
                  Llama a nuestro Call Center
                </span>
              </section>

              <section class="mt-3 text-center">
                <span class="font-weight-light">
                  Habla con uno de nuestros agentes para resolver tus dudas
                </span>
              </section>

              <section class="mt-3">
                <v-btn
                  rounded
                  color="#FFE6B7"
                  elevation="0"
                  href="tel:1801-0054-321"
                >
                  <v-icon>mdi-phone-outline</v-icon>
                  1801-0054-321
                </v-btn>
              </section>
            </section>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card color="#DFF5EB" flat>
            <section
              class="d-flex flex-column py-5 justify-center align-center"
            >
              <section>
                <!-- <span class="display-4">
                  𓀊
                </span> -->

                <span class="display-4">
                  <v-img
                    :src="
                      require('@/assets/icons/svg-contact-me-whatsapp-icon.svg')
                    "
                    max-height="140px"
                    max-width="140px"
                  ></v-img>
                </span>
              </section>

              <section class="mt-3">
                <span class="font-weight-bold"> Escríbenos por WhatsApp </span>
              </section>

              <section class="mt-3 text-center">
                <span class="font-weight-light">
                  Habla con uno de nuestros agentes para resolver tus dudas
                </span>
              </section>

              <section class="mt-3">
                <v-btn
                  rounded
                  color="#FFE6B7"
                  elevation="0"
                  href="https://api.whatsapp.com/send?phone=50224144321&text=Preg%C3%BAntale%20a%20ALMA"
                >
                  <v-icon style="margin-right: 6px">mdi-whatsapp</v-icon>

                  <span style="text-transform: none"> WhatsApp </span>
                </v-btn>
              </section>
            </section>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card color="#FFEBE8" flat>
            <section
              class="d-flex flex-column py-5 justify-center align-center"
            >
              <section>
                <!-- <span class="display-4">
                  ❤️
                </span> -->

                <span class="display-4">
                  <v-img
                    :src="require('@/assets/icons/svg-contact-me-heart.svg')"
                    max-height="140px"
                    max-width="140px"
                  ></v-img>
                </span>
              </section>

              <section class="mt-3">
                <span class="font-weight-bold">
                  ¡Sigueme por nuestras redes sociales!
                </span>
              </section>

              <section class="mt-3 text-center">
                <span class="font-weight-light">
                  Te podrás enterar de muchas cosas relacionas con COVID y
                  además pregúntame lo que quieras
                </span>
              </section>

              <section class="mt-3" style="width: 100%">
                <section class="d-flex justify-space-around">
                  <v-btn
                    rounded
                    color="#FFE6B7"
                    elevation="0"
                    href="https://twitter.com/alma_responde"
                  >
                    <v-icon style="margin-right: 6px">mdi-twitter</v-icon>

                    <span style="text-transform: none">Twitter</span>
                  </v-btn>

                  <v-btn
                    rounded
                    color="#FFE6B7"
                    elevation="0"
                    href="https://www.facebook.com/chatbotALMA"
                  >
                    <v-icon style="margin-right: 6px">mdi-facebook</v-icon>
                    <span style="text-transform: none; f">Facebook</span>
                  </v-btn>
                </section>
              </section>
            </section>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
