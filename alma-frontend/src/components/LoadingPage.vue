<template>
  <section>
    <v-dialog fullscreen v-model="loading">
      <v-card rounded="0" flat>
        <div style="text-align: center">
          <div class="loader"></div>
          <div class="loading-text">Cargando...</div>
        </div>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    dialog: true,
  }),

  computed: {
    ...mapGetters(['loading']),
  },
}
</script>

<style scoped>
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #200765;
  width: 250px;
  height: 250px;
  position: absolute;
  top: calc(50% - 100px);
  left: calc(50% - 100px);
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  transform: opacity 1s linear;
  transition: opacity 0.2s linear;
  opacity: 1;
  margin: -15px auto auto -15px;
}

.loading-text {
  /* width: 90px; */
  text-align: center;
  position: absolute;
  top: calc(50% - 5px);
  left: calc(50% - 40px);
  text-align: center;
  color: #200765;
  font-weight: bold;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
