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
          Directorios existentes
        </v-toolbar-title>
      </v-app-bar>

      <v-divider></v-divider>

      <v-card
        href="https://docs.almabot.com/docs/direccion-area-de-salud-1"
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
      </v-card>

      <v-card
        href="https://docs.almabot.com/docs/donde-hacerse-hisopados-pcr-y-antigeno-en-el-departamento-de-guatemala-gratis-y-pagados-1"
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
            <v-col cols="11"> Hisopados </v-col>

            <v-col cols="1">
              <v-icon large color="#A698FF"> mdi-chevron-right </v-icon>
            </v-col>
          </v-row>
        </v-card-title>
      </v-card>

      <v-card
        href="https://docs.almabot.com/docs/paginas-oficiales-de-centros-de-vacunaciones-por-departamento-1"
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
            <v-col cols="11"> Centros de Vacunación </v-col>

            <v-col cols="1">
              <v-icon large color="#A698FF"> mdi-chevron-right </v-icon>
            </v-col>
          </v-row>
        </v-card-title>
      </v-card>

      <v-card
        href="https://docs.almabot.com/docs/donde-conseguir-oxigeno-1"
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
            <v-col cols="11"> ¿Dónde conseguir oxígeno? </v-col>

            <v-col cols="1">
              <v-icon large color="#A698FF"> mdi-chevron-right </v-icon>
            </v-col>
          </v-row>
        </v-card-title>
      </v-card>

      <v-card
        href="https://docs.almabot.com/docs/medicos-y-centros-que-atienden-covid-19-en-persona-y-digital-1"
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
            <v-col cols="11"> Médicos y centros </v-col>

            <v-col cols="1">
              <v-icon large color="#A698FF"> mdi-chevron-right </v-icon>
            </v-col>
          </v-row>
        </v-card-title>
      </v-card>

      <v-card
        href="https://docs.almabot.com/docs/servicios-de-salud-mental-1"
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
            <v-col cols="11"> Salud Mental </v-col>

            <v-col cols="1">
              <v-icon large color="#A698FF"> mdi-chevron-right </v-icon>
            </v-col>
          </v-row>
        </v-card-title>
      </v-card>

      <v-card
        href="https://docs.almabot.com/docs/listado-de-hospitales-publicos-nacionales-1"
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
            <v-col cols="11"> Hospitales públicos </v-col>

            <v-col cols="1">
              <v-icon large color="#A698FF"> mdi-chevron-right </v-icon>
            </v-col>
          </v-row>
        </v-card-title>
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
