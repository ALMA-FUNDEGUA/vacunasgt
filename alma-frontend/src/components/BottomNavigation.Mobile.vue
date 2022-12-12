<template>
  <section>
    <v-bottom-navigation height="85" app background-color="#E4DFFF">
      <v-btn @click="$router.push('/')">
        <span class="item-text"> Inicio </span>

        <v-icon large class="item-icon"> mdi-home </v-icon>
      </v-btn>

      <v-btn @click="$router.push('/testsfilters')">
        <span class="item-text"> Pruebas </span>

        <v-icon large class="item-icon"> mdi-needle </v-icon>
      </v-btn>

      <v-btn @click="$router.push('/directories')">
        <span class="item-text"> Directorios </span>

        <v-icon large class="item-icon"> mdi-account-box </v-icon>
      </v-btn>

      <v-btn href="https://api.whatsapp.com/send?phone=50224144321&text=Preg%C3%BAntale%20a%20ALMA" target="blank">
        <span class="item-text">
          WhatsApp
        </span>

        <v-icon large class="item-icon">
          mdi-whatsapp
        </v-icon>
      </v-btn>
    </v-bottom-navigation>
  </section>
</template>

<style scoped>
.item-icon {
  color: #a698ff !important;
}

.item-text {
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 22px;
  color: #a698ff;
}
</style>
