<template>
  <section>
    <v-app-bar app color="#FFFFFF" elevation="2">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="9">
            <div class="d-flex justify-space-around align-center">
              <span class="text-h4 font-weight-medium"
                  style="color: #7F6CF6; font-family: 'Poppins', sans-serif !important;">
                alma
              </span>

              <v-btn text small>
                Busca Tu Vacuna
              </v-btn>

              <v-btn text small>
                Directorio de Salud
              </v-btn>

              <v-btn text small>
                Preguntas Frecuentes
              </v-btn>

              <v-btn rounded color="#FFE6B7" elevation="0"
                  href="tel:1801-0054-321">
                <v-icon>mdi-phone-outline</v-icon>
                1801-0054-321
              </v-btn>

              <v-btn rounded color="#FFE6B7" elevation="0"
                  href="https://api.whatsapp.com/send?phone=50224144321&text=Preg%C3%BAntale%20a%20ALMA">
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
