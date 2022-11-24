<template>
  <section>
    <v-app-bar app color="#EAE4F3" elevation="2">
      <v-container>
        <v-row justify="center">
          <v-col cols="11">
            <div class="d-flex app-bar">
              <router-link to="/" class="text-h4 font-weight-bold site-title">
                alma
              </router-link>

              <DropdownMenu mode="hover">
                <v-btn
                  text
                  small
                  color="#200765"
                  class="no-uppercase font-weight-black"
                  slot="trigger"
                >
                  Directorio
                </v-btn>

                <v-btn
                  slot="body"
                  text
                  small
                  class="no-uppercase"
                  href="https://docs.almabot.com/docs/direccion-area-de-salud-1"
                  target="_blank"
                >
                  Dirección Área de Salud
                </v-btn>

                <v-btn
                  slot="body"
                  text
                  small
                  class="no-uppercase"
                  href="https://docs.almabot.com/docs/comisarias-pnc-1"
                  target="_blank"
                >
                  Comisarías PNC
                </v-btn>

                <v-btn
                  slot="body"
                  text
                  small
                  class="no-uppercase"
                  href="https://docs.almabot.com/docs/instituciones-nacionales"
                  target="_blank"
                >
                  Instituciones nacionales
                </v-btn>

                <v-btn
                  slot="body"
                  text
                  small
                  class="no-uppercase"
                  href="https://docs.almabot.com/docs/donde-hacerse-hisopados-pcr-y-antigeno-en-el-departamento-de-guatemala-gratis-y-pagados-1"
                  target="_blank"
                >
                  Hisopados
                </v-btn>

                <v-btn
                  slot="body"
                  text
                  small
                  class="no-uppercase"
                  href="https://docs.almabot.com/docs/paginas-oficiales-de-centros-de-vacunaciones-por-departamento-1"
                  target="_blank"
                >
                  Centros de Vacunación
                </v-btn>

                <v-btn
                  slot="body"
                  text
                  small
                  class="no-uppercase"
                  href="https://docs.almabot.com/docs/donde-conseguir-oxigeno-1"
                  target="_blank"
                >
                  ¿Dónde conseguir oxígeno?
                </v-btn>

                <v-btn
                  slot="body"
                  text
                  small
                  class="no-uppercase"
                  href="https://docs.almabot.com/docs/medicos-y-centros-que-atienden-covid-19-en-persona-y-digital-1"
                  target="_blank"
                >
                  Médicos y centros
                </v-btn>

                <v-btn
                  slot="body"
                  text
                  small
                  class="no-uppercase"
                  href="https://docs.almabot.com/docs/servicios-de-salud-mental-1"
                  target="_blank"
                >
                  Salud Mental
                </v-btn>

                <v-btn
                  slot="body"
                  text
                  small
                  class="no-uppercase"
                  href="https://docs.almabot.com/docs/listado-de-hospitales-publicos-nacionales-1"
                  target="_blank"
                >
                  Hospitales públicos
                </v-btn>
              </DropdownMenu>

              <v-btn
                text
                small
                class="no-uppercase font-weight-black"
                href="https://docs.almabot.com/"
                target="_blank"
                color="#200765"
              >
                Preguntas Frecuentes
              </v-btn>

              <div>
                <v-btn
                  elevation="0"
                  icon
                  color="#200765"
                  class="no-uppercase font-weight-bold"
                  href="https://www.instagram.com/alma_responde/"
                  target="_blank"
                >
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
                <v-btn
                  elevation="0"
                  icon
                  color="#200765"
                  class="no-uppercase font-weight-bold"
                  href="https://www.facebook.com/chatbotALMA"
                  target="_blank"
                >
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn
                  elevation="0"
                  icon
                  color="#200765"
                  class="no-uppercase font-weight-bold"
                  href="https://twitter.com/alma_responde"
                  target="_blank"
                >
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
                <v-btn
                  elevation="0"
                  icon
                  color="#200765"
                  class="no-uppercase font-weight-bold"
                  href="https://www.tiktok.com/@alma_responde"
                  target="_blank"
                >
                  <template>
                    <svg width="25px" height="25px" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"
                      ></path>
                    </svg>
                  </template>
                </v-btn>
              </div>
              <v-text-field
                v-model="search"
                hide-details
                rounded
                prepend-inner-icon="mdi-magnify"
                append-icon="mdi-chevron-right"
                background-color="#FFFFFF"
                placeholder="Busca tu vacuna aquí"
                class="text-field"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </section>
</template>
<script>
import DropdownMenu from "v-dropdown-menu";
import "v-dropdown-menu/dist/v-dropdown-menu.css"; // Base style, required.

export default {
  components: {
    DropdownMenu,
  },
};
</script>
<style scoped>
.site-title {
  color: #7f6cf6;
  text-decoration: none;
}

.app-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  gap: 40px;
}

.text-field {
  font-size: 80%;
  width: 20%;
}
</style>
