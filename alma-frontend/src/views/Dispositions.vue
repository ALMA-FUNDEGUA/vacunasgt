<template>
  <section>
    <section v-if="$vuetify.breakpoint.mdAndUp">
      <home-view-desktop></home-view-desktop>
    </section>

    <section v-else>
      <v-app-bar app flat color="#E4DFFF">
        <v-btn icon @click="$router.push('/directories')">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <v-toolbar-title class="pl-0 font-weight-bold">
          Disposiciones
        </v-toolbar-title>
      </v-app-bar>

      <v-divider></v-divider>
      <v-card
        href="https://docs.almabot.com/docs/requerimientos-ingresosalida-del-pais"
        target="_blank"
      >
        <v-card-title
          style="
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
    <BottomNavigationMobile></BottomNavigationMobile>
  </section>
</template>

<script>
import HomeViewDesktop from '../components/views/HomeView.Desktop.vue'
import BottomNavigationMobile from '../components/BottomNavigation.Mobile.vue'

export default {
  components: {
    HomeViewDesktop,
    BottomNavigationMobile,
  },
}
</script>
