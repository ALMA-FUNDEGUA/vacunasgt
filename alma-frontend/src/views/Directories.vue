<template>
  <section>
    <section v-if="$vuetify.breakpoint.mdAndUp">
      <home-view-desktop></home-view-desktop>
    </section>

    <section v-else>
      <v-app-bar app flat color="#E4DFFF">
        <v-btn icon @click="$router.push('/')">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <v-toolbar-title class="pl-0 font-weight-bold">
          Directorios
        </v-toolbar-title>
      </v-app-bar>

      <v-card-title
        class="justify-center"
        style="
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 27px;
        "
      >
        Directorios existentes
      </v-card-title>

      <v-divider></v-divider>

      <v-card
        href="https://docs.almabot.com/docs/direccion-area-de-salud-1"
        target="_blank"
      >
        <v-card-title
          style="
            font-family: 'Poppins';
            font-style: light;
            font-weight: 700;
            font-size: 15px;
            line-height: 27px;
            color: #000000;
            text-align: left;
            word-break: break-word;
          "
        >
          <v-row dense>
            <v-col cols="11"> Dirección Área de Salud </v-col>

            <v-col cols="1">
              <v-icon large color="#A698FF"> mdi-chevron-right </v-icon>
            </v-col>
          </v-row>
        </v-card-title>

        <!--     <v-card-text
          style="
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
          "
        >
          Enlace: https://docs.almabot.com/docs/direccion-area-de-salud-1
        </v-card-text> -->
      </v-card>

      <v-card
        href="https://docs.almabot.com/docs/comisarias-pnc-1"
        target="_blank"
      >
        <v-card-title
          style="
            font-family: 'Poppins';
            font-style: light;
            font-weight: 700;
            font-size: 15px;
            line-height: 27px;
            color: #000000;
            text-align: left;
            word-break: break-word;
          "
        >
          <v-row dense>
            <v-col cols="11"> Comisarías PNC </v-col>

            <v-col cols="1">
              <v-icon large color="#A698FF"> mdi-chevron-right </v-icon>
            </v-col>
          </v-row>
        </v-card-title>

        <!--     <v-card-text
          style="
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
          "
        >
          Enlace: https://docs.almabot.com/docs/comisarias-pnc-1
        </v-card-text> -->
      </v-card>
      <v-card
        href="https://docs.almabot.com/docs/instituciones-nacionales"
        target="_blank"
      >
        <v-card-title
          style="
            font-family: 'Poppins';
            font-style: light;
            font-weight: 700;
            font-size: 15px;
            line-height: 27px;
            color: #000000;
            text-align: left;
            word-break: break-word;
          "
        >
          <v-row dense>
            <v-col cols="11"> Instituciones Nacionales </v-col>

            <v-col cols="1">
              <v-icon large color="#A698FF"> mdi-chevron-right </v-icon>
            </v-col>
          </v-row>
        </v-card-title>

        <!--   <v-card-text
          style="
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
          "
        >
          Enlace: https://docs.almabot.com/docs/instituciones-nacionales
        </v-card-text>
        -->
      </v-card>

      <v-card-title
        class="justify-center"
        style="
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 27px;
        "
      >
        Disposiciones nacionales
      </v-card-title>

      <v-divider></v-divider>
      <v-card
        href="https://docs.almabot.com/docs/requerimientos-ingresosalida-del-pais"
        target="_blank"
      >
        <v-card-title
          style="
            font-family: 'Poppins';
            font-style: light;
            font-weight: 700;
            font-size: 15px;
            line-height: 27px;
            color: #000000;
            text-align: left;
            word-break: break-word;
          "
        >
          <v-row dense>
            <v-col cols="11"> Requerimientos de ingreso/salida del país </v-col>

            <v-col cols="1">
              <v-icon large color="#A698FF"> mdi-chevron-right </v-icon>
            </v-col>
          </v-row>
        </v-card-title>

        <!--     <v-card-text
          style="
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
          "
        >
          Enlace:
          https://docs.almabot.com/docs/requerimientos-ingresosalida-del-pais
        </v-card-text>
        -->
      </v-card>

      <v-card
        href="https://docs.almabot.com/docs/disposiciones-presidenciales-2"
        target="_blank"
      >
        <v-card-title
          style="
            font-family: 'Poppins';
            font-style: light;
            font-weight: 700;
            font-size: 15px;
            line-height: 27px;
            color: #000000;
            text-align: left;
            word-break: break-word;
          "
        >
          <v-row dense>
            <v-col cols="11"> Disposiciones Presidenciales </v-col>

            <v-col cols="1">
              <v-icon large color="#A698FF"> mdi-chevron-right </v-icon>
            </v-col>
          </v-row>
        </v-card-title>

        <!--     <v-card-text
          style="
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
          "
        >
          Enlace:
         https://docs.almabot.com/docs/disposiciones-presidenciales-2
        </v-card-text>
        -->
      </v-card>

      <v-card
        href="https://docs.almabot.com/docs/noticias-gubernamentales-y-ministeriales-1"
        target="_blank"
      >
        <v-card-title
          style="
            font-family: 'Poppins';
            font-style: light;
            font-weight: 700;
            font-size: 15px;
            line-height: 27px;
            color: #000000;
            text-align: left;
            word-break: break-word;
          "
        >
          <v-row dense>
            <v-col cols="11"> Noticias Gubernamentales y Ministeriales </v-col>

            <v-col cols="1">
              <v-icon large color="#A698FF"> mdi-chevron-right </v-icon>
            </v-col>
          </v-row>
        </v-card-title>

        <!--     <v-card-text
          style="
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
          "
        >
          Enlace:
         https://docs.almabot.com/docs/noticias-gubernamentales-y-ministeriales-1
        </v-card-text>
        -->
      </v-card>
    </section>
  </section>
</template>

<script>
import HomeViewDesktop from '../components/views/HomeView.Desktop.vue'

export default {
  components: {
    HomeViewDesktop,
  },
}
</script>
