<template>
  <section>
    <header class="banner mb-4">
      <v-toolbar flat>
        <v-toolbar-title>
          <span class="site-title">Alma</span>
        </v-toolbar-title>
        <v-spacer />
      </v-toolbar>
      <v-img class="mt-n13 mb-5" src="@/assets/images/web alma-05.svg">
        <div class="mt-1 mr-3 d-flex" style="justify-content: flex-end">
          <v-btn
            href="https://api.whatsapp.com/send?phone=50224144321&text=Preg%C3%BAntale%20a%20ALMA"
            target="_blank"
            fab
            small
            color="#F8F7FF"
            elevation="0"
            class="ml-0"
          >
            <v-icon color="#3E3E3E"> mdi-whatsapp </v-icon>
          </v-btn>

          <v-btn
            href="tel:1801-0054-321"
            target="_blank"
            fab
            small
            color="#F8F7FF"
            elevation="0"
            class="ml-3"
          >
            <v-icon color="#3E3E3E"> mdi-phone-outline </v-icon>
          </v-btn>
        </div>
      </v-img>

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
        block
        class="mt-9 my-5 mb-15 d-flex justify-center"
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
