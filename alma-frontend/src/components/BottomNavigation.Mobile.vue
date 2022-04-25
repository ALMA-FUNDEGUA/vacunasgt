<template>
  <section>
    <v-bottom-navigation app background-color="#E4DFFF">
      <v-btn @click="$router.push('/')">
        <span class="item-text">
          Inicio
        </span>

        <v-icon large class="item-icon">
          mdi-home
        </v-icon>
      </v-btn>

      <v-btn @click="$router.push('/filters')">
        <span class="item-text">
          Vacunas
        </span>

        <v-icon large class="item-icon">
          mdi-needle
        </v-icon>
      </v-btn>

      <v-btn href="https://docs.almabot.com/docs" target="_blank">
        <span class="item-text">
          Directorio
        </span>

        <v-icon large class="item-icon">
          mdi-account-box
        </v-icon>
      </v-btn>

      <v-btn href="https://docs.almabot.com/" target="blank">
        <span class="item-text">
          Preguntas
        </span>

        <v-icon large class="item-icon">
          mdi-help-circle
        </v-icon>
      </v-btn>
    </v-bottom-navigation>
  </section>
</template>

<style scoped>
.item-icon {
  color: #A698FF !important;
}

.item-text {
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 22px; 
  color: #A698FF;
}
</style>
