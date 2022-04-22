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

              <v-btn text small class="no-uppercase font-weight-bold">
                Directorio de Salud
              </v-btn>

              <v-btn
                text
                small
                class="no-uppercase font-weight-bold"
                href="https://docs.almabot.com/"
                target="_blank"
              >
                Preguntas Frecuentes
              </v-btn>

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

<style scoped>
.site-title {
  color: #7f6cf6;
  text-decoration: none;
}
</style>
