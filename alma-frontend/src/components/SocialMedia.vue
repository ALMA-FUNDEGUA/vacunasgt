<template>
  <section>
    <v-container>
      <v-row justify="center">
        <v-col justify="center">
          <p
            class="font-weight-bold text-center mt-2 mb-4 text-h6"
            style="color: #200765"
          >
            También puedes realizar consultas aquí
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-row justify="center">
      <div class="d-flex flex-column align-center">
        <div class="d-flex flex-row align-center">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                class="btn-social"
                color="#200765"
                target="_blank"
                v-bind="attrs"
                v-on="on"
                href="https://www.instagram.com/alma_responde/"
              >
                <!-- <i
                      class="fab fa-instagram"
                      style="color: #3e3e3e; font-size: 25px"
                    ></i> -->
                <v-icon color="#200765" size="45" dark="true">
                  mdi-instagram
                </v-icon>
              </v-btn>
            </template>

            <span>Instagram</span>
          </v-tooltip>
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
              >
                <v-icon color="#200765" size="45"> mdi-facebook </v-icon>
              </v-btn>
            </template>

            <span>Facebook</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                class="btn-social"
                target="_blank"
                v-bind="attrs"
                v-on="on"
                href="https://twitter.com/alma_responde"
              >
                <!-- <i
                      class='fab fa-twitter'
                      style="color: #3e3e3e; font-size: 25px"
                    ></i> -->
                <v-icon color="#200765" size="45"> mdi-twitter </v-icon>
              </v-btn>
            </template>

            <span>Twitter</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                class="btn-social"
                target="_blank"
                color="#200765"
                v-bind="attrs"
                v-on="on"
                href="https://www.tiktok.com/@alma_responde"
              >
                <template>
                  <svg width="45px" height="45px" viewBox="0 0 24 24">
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
    </v-row>
  </section>
</template>
