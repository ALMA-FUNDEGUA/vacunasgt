<template>
  <section>
    <header class="banner mb-4">
      <v-toolbar flat>
        <v-toolbar-title>
          <span class="site-title">Alma</span>
        </v-toolbar-title>
        <v-spacer />
        <v-btn
          fab
          small
          color=#F8F7FF
          elevation=0
          class="mr-3"
          href="https://api.whatsapp.com/send?phone=50224144321&text=Preg%C3%BAntale%20a%20ALMA"
        >
          <v-icon color=#3E3E3E @click="resetCase">
            mdi-whatsapp
          </v-icon>
        </v-btn>

        <v-btn
          fab
          small
          color=#F8F7FF
          elevation=0
          href="tel:1801-0054-321"
        >
          <v-icon color=#3E3E3E @click="resetCase">
            mdi-phone-outline
          </v-icon>
        </v-btn>
    </v-toolbar>
    <v-img src="@/assets/images/web alma-05.svg">
    </v-img>
    <h2 style="font-weight:bold; text-align:center; justify-content:center">
      ¡Hola! Soy Alma y estoy aqui para ayudarte.
    </h2>
    <v-btn
      rounded
      block
      color = "#FFE6B7"
      large
      class="my-4"
      link to="/filters"
      style="text-transform: unset !important;"
      >      
        Buscar mi vacuna
    </v-btn>
    </v-card>
  </header>
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
