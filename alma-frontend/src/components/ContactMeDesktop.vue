<template>
  <section>
    <v-container>
      <v-row>
        <v-col>
          <h2 class="text-h4 text-center mb-10 font-weight-bold align-center">
            ¿No has encontrado lo que buscas?
          </h2>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="5" align-self="center">
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

        <v-col align-self="center" cols="5">
          <v-card color="#DFF5EB" flat>
            <section
              class="d-flex flex-column py-5 justify-center align-center"
            >
              <section>
                <span class="display-4">
                  <v-img
                    :src="
                      require('@/assets/icons/svg-contact-me-whatsapp-icon.svg')
                    "
                    max-height="128px"
                    max-width="128px"
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
      <v-row> </v-row>
    </v-container>
  </section>
</template>
