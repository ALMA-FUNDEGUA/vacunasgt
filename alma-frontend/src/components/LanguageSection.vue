<template>
  <section>
    <v-container fluids>
      <v-row>
        <v-col cols="6">
          <v-img :src="require('@/assets/images/alma-telefono-04.svg')"></v-img>
        </v-col>

        <v-col cols="5" class="mt-16">
          <h3
            class="display-1 font-weight-bold text-center"
            style="color: #200765"
          >
            Llámame GRATIS desde <br />
            toda Guatemala y con <br />
            gusto resolveré y te <br />
            atenderé en<span style="color: #704eee"
              ><textra :data="lang" :timer="1.5" infinite="true" />
            </span>
          </h3>
        </v-col>
      </v-row>
    </v-container>

    <v-row justify="center">
      <v-col justify="center">
        <p class="text-center mt-5" style="color: #200765; font-size: large">
          Servicio GRATUITO en español los siete días de la semana, las 24
          horas. <br />
          En k'iche', kaqchikel, mam y tz'utujil de 8:00 a 17:00 hrs. de lunes a
          viernes y sábados a 8:00 a 12:00 hrs.
        </p>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      lang: ["mam", "kaqchikel", "k'iche", "q'eqchi'", "tz'utujil", "español"],
    };
  },
};
</script>
