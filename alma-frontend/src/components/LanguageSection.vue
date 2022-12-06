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
              ><textra :data="idiomas" :timer="1.5" infinite="true" />
            </span>
          </h3>
          <v-container>
            <v-row justify="center">
              <v-col justify="center">
                <p
                  class="font-weight- text-center"
                  style="color: #200765; font-size: medium"
                >
                  de 8:00 a 17:00 hrs. de lunes a viernes y<br />
                  sábados de 8:00 a 12:00 hrs.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      idiomas: [
        "mam",
        "kaqchikel",
        "k'iche",
        "q'eqchi'",
        "tz'utujil",
        "español",
      ],
    };
  },
};
</script>
