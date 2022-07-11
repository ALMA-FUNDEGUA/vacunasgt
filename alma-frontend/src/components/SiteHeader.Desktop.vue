<template>
  <section>
    <v-container fluids>
      <v-row>
        <v-col cols="6">
          <h1 class="display-2 font-weight-bold">
            ¡Hola! Soy Alma, Estoy aquí para ayudarte a informarte sobre COVID y
            otras enfermedades
          </h1>

          <v-btn
            rounded
            block
            large
            elevation="0"
            color="#FFE6B7"
            class="mt-5 no-uppercase"
            to="/filters"
          >
            <span class="font-weight-bold"> ¡Buscar mi vacuna! </span>
          </v-btn>

          <v-btn
            rounded
            block
            large
            elevation="0"
            color="#FFE6B7"
            class="mt-5 no-uppercase"
            to="/testsfilters"
          >
            <span class="font-weight-bold"> ¡Buscar hisopados! </span>
          </v-btn>
        </v-col>

        <v-col cols="6">
          <v-img
            :src="require('@/assets/images/web alma izquierda-01.svg')"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
