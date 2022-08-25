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
        style="font-weight: 700; font-size: 18px; line-height: 27px"
      >
      </v-card-title>

      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card
              color="#F8F6F6"
              elevation="0"
              round
              @click="$router.push('/existingDirectories')"
            >
              <v-card-title style="font-size: 18px">
                Directorios existentes
                <v-row dense style="justify-content: right">
                  <v-icon large> mdi-chevron-right </v-icon>
                </v-row></v-card-title
              >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card
              color="#F8F6F6"
              elevation="0"
              round
              @click="$router.push('/dispositions')"
            >
              <v-card-title style="font-size: 18px">
                Disposiciones
                <v-row dense style="justify-content: right">
                  <v-icon large> mdi-chevron-right </v-icon>
                </v-row></v-card-title
              >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
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
