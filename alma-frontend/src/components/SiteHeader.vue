<template>
  <section>
    <header class="banner mb-4">
      <v-toolbar flat>
        <v-toolbar-title>
          <span class="site-title">Alma</span>
        </v-toolbar-title>
        <v-spacer />
        <v-btn
          icon
          href="https://api.whatsapp.com/send?phone=50224144321&text=Preg%C3%BAntale%20a%20ALMA"
        >
          <v-icon @click="resetCase"> mdi-whatsapp </v-icon>
        </v-btn>

        <v-btn icon href="tel:1801-0054-321">
          <v-icon @click="resetCase"> mdi-phone-outline </v-icon>
        </v-btn>
      </v-toolbar>

      <v-card flat>
        <v-img src="@/assets/images/home-image.png"> </v-img>

        <v-container>
          <v-row>
            <v-col>
              <h2 style="font-weight: bold">
                ¡Hola! Soy Alma y estoy aqui para ayudarte
              </h2>
              <v-btn
                rounded
                block
                color="#FFE6B7"
                style="font-weight: bold"
                large
                class="mt-2"
                link
                to="/filters"
              >
                <!-- <p style="font-weight: bold;"> -->
                Buscar mi vacuna
                <!-- </p> -->
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </header>
  </section>
</template>

<style>
.banner {
  color: #7f6cf6;
}

.site-title {
  color: #7f6cf6;
  /* font-family: "AlmaExtraBolder"; */
  font-size: 2rem;
  font-weight: bolder;
  line-height: 1;
}
</style>
