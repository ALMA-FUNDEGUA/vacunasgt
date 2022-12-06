<template>
  <section>
    <v-container>
      <v-row justify="center">
        <v-col justify="center">
          <p
            class="font-weight-bold text-center"
            style="color: #200765; font-size: larger"
          >
            Encuéntrame como @alma_responde en
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row align="center" justify="center mx-15">
        <v-col cols="2" align-self="center">
          <v-card color="#D0C2FD" flat class="rounded-xl">
            <a
              href="https://www.facebook.com/chatbotALMA"
              target="_blank"
              style="text-decoration: none"
            >
              <section
                class="d-flex flex-column py-10 justify-center align-center"
              >
                <div class="d-flex flex-column align-center">
                  <div class="d-flex flex-row align-center">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          text
                          class="btn-social"
                          target="_blank"
                          color="#3e3e3e"
                          v-bind="attrs"
                          v-on="on"
                          href="https://www.facebook.com/chatbotALMA"
                          x-large
                        >
                          <v-icon color="#6B54E6" size="50">
                            mdi-facebook
                          </v-icon>
                        </v-btn>
                      </template>

                      <span>Facebook</span>
                    </v-tooltip>
                  </div>
                </div>
              </section>
            </a>
          </v-card>
        </v-col>
        <v-col cols="2" align-self="center">
          <v-card color="#D0C2FD" flat class="rounded-xl">
            <a
              href="https://twitter.com/alma_responde"
              target="_blank"
              style="text-decoration: none"
            >
              <section
                class="d-flex flex-column py-10 justify-center align-center"
              >
                <div class="d-flex flex-column align-center">
                  <div class="d-flex flex-row align-center">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          text
                          class="btn-social"
                          target="_blank"
                          v-bind="attrs"
                          v-on="on"
                          href="https://twitter.com/alma_responde"
                          x-large
                        >
                          <v-icon color="#6B54E6" size="50">
                            mdi-twitter
                          </v-icon>
                        </v-btn>
                      </template>

                      <span>Twitter</span>
                    </v-tooltip>
                  </div>
                </div>
              </section>
            </a>
          </v-card>
        </v-col>
        <v-col cols="2" align-self="center">
          <v-card color="#D0C2FD" flat class="rounded-xl">
            <a
              href="https://www.instagram.com/alma_responde/"
              target="_blank"
              style="text-decoration: none"
            >
              <section
                class="d-flex flex-column py-10 justify-center align-center"
              >
                <div class="d-flex flex-column align-center">
                  <div class="d-flex flex-row align-center">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          text
                          class="btn-social"
                          color="#6B54E6"
                          target="_blank"
                          v-bind="attrs"
                          v-on="on"
                          href="https://www.instagram.com/alma_responde/"
                          x-large
                        >
                          <v-icon color="#6B54E6" size="50">
                            mdi-instagram
                          </v-icon>
                        </v-btn>
                      </template>

                      <span>Instagram</span>
                    </v-tooltip>
                  </div>
                </div>
              </section>
            </a>
          </v-card>
        </v-col>
        <v-col cols="2" align-self="center">
          <v-card color="#D0C2FD" flat class="rounded-xl">
            <a
              href="https://www.tiktok.com/@alma_responde"
              target="_blank"
              style="text-decoration: none"
            >
              <section
                class="d-flex flex-column py-10 justify-center align-center"
              >
                <div class="d-flex flex-column align-center">
                  <div class="d-flex flex-row align-center">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          text
                          class="btn-social"
                          target="_blank"
                          color="#6B54E6"
                          v-bind="attrs"
                          v-on="on"
                          href="https://www.tiktok.com/@alma_responde"
                          x-large
                        >
                          <template>
                            <svg width="50px" height="50px" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"
                              ></path>
                            </svg>
                          </template>
                        </v-btn>
                      </template>

                      <span>Tiktok</span>
                    </v-tooltip>
                  </div>
                </div>
              </section>
            </a>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row justify="center">
        <v-col justify="center">
          <p
            class="font-weight- text-center"
            style="color: #200765; font-size: medium"
          >
            Disponible en español de 7:00 a 20:00 hrs. de lunes a <br />
            viernes y sábados de 8:00 a 12:00 hrs.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
