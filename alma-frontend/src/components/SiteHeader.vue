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
          color="#F8F7FF"
          elevation="0"
          class="mr-3"
          href="https://api.whatsapp.com/send?phone=50224144321&text=Preg%C3%BAntale%20a%20ALMA"
        >
          <v-icon color="#3E3E3E" @click="resetCase"> mdi-whatsapp </v-icon>
        </v-btn>

        <v-btn fab small color="#F8F7FF" elevation="0" href="tel:1801-0054-321">
          <v-icon color="#3E3E3E" @click="resetCase">
            mdi-phone-outline
          </v-icon>
        </v-btn>
      </v-toolbar>

      <v-img class="mt-n14 mb-5" src="@/assets/images/web alma-05.svg"> </v-img>
      <h2
        style="
          font-weight: bold;
          text-align: center;
          justify-content: center;
          color: #3e3e3e;
          margin-right: 20px;
          margin-left: 20px;
        "
      >
        ¡Hola! Soy Alma y estoy aqui para ayudarte.
      </h2>
      <v-btn
        rounded
        color="#FFE6B7"
        large
        class="my-5 mb-15 ma-12"
        link
        to="/filters"
        style="
          text-align: center;
          justify-content: center;
          text-transform: unset !important;
          width: 72%;
        "
      >
        Buscar mi vacuna
      </v-btn>
      <!-- </v-card> -->
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
