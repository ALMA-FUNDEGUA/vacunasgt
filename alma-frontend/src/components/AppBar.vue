<template>
  <section>
    <v-app-bar app color="#FFFFFF" elevation="2">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="13">
            <div class="d-flex justify-space-between align-center">
              <a href="/" class="text-h4 font-weight-bold site-title"> alma </a>

              <v-btn
                text
                small
                to="/filters"
                class="no-uppercase font-weight-bold"
              >
                Busca Tu Vacuna
              </v-btn>

              <DropdownMenu mode="hover">
                <v-btn
                  text
                  small
                  class="no-uppercase font-weight-bold"
                  slot="trigger"
                >
                  Directorios
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
              </DropdownMenu>

              <v-btn
                text
                small
                class="no-uppercase font-weight-bold"
                href="https://docs.almabot.com/"
                target="_blank"
              >
                Preguntas Frecuentes
              </v-btn>
              <DropdownMenu mode="hover">
                <v-btn
                  text
                  small
                  class="no-uppercase font-weight-bold"
                  slot="trigger"
                >
                  Dispocisiones
                </v-btn>

                <v-btn
                  slot="body"
                  text
                  small
                  class="no-uppercase"
                  href="https://docs.almabot.com/docs/requerimientos-ingresosalida-del-pais"
                  target="_blank"
                >
                  Requerimientos de migración
                </v-btn>

                <v-btn
                  slot="body"
                  text
                  small
                  class="no-uppercase"
                  href="https://docs.almabot.com/docs/disposiciones-presidenciales-2"
                  target="_blank"
                >
                  Disposiciones presidenciales
                </v-btn>

                <v-btn
                  slot="body"
                  text
                  small
                  class="no-uppercase"
                  href="https://docs.almabot.com/docs/noticias-gubernamentales-y-ministeriales-1"
                  target="_blank"
                >
                  Noticias gubernamentales
                </v-btn>
              </DropdownMenu>

              <v-btn
                rounded
                color="#FFE6B7"
                elevation="0"
                class="no-uppercase font-weight-bold"
                href="tel:1801-0054-321"
              >
                <v-icon>mdi-phone-outline</v-icon>
                1-801-00-54321
              </v-btn>

              <v-btn
                rounded
                color="#FFE6B7"
                elevation="0"
                class="no-uppercase font-weight-bold"
                href="https://api.whatsapp.com/send?phone=50224144321&text=Preg%C3%BAntale%20a%20ALMA"
              >
                <v-icon>mdi-whatsapp</v-icon>
                Whatsapp
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </section>
</template>
<script>
import DropdownMenu from 'v-dropdown-menu'
import 'v-dropdown-menu/dist/v-dropdown-menu.css' // Base style, required.

export default {
  components: {
    DropdownMenu,
  },
}
</script>
<style scoped>
.site-title {
  color: #7f6cf6;
  text-decoration: none;
}
</style>
