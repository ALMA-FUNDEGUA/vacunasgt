<template>
  <!-- Twitter -->
  <center>
    <p class="twitter-title">Últimas noticias en Twitter</p>
    <div class="d-flex flex-column align-center">
      <a
        class="twitter-timeline"
        data-lang="es"
        data-width="750"
        data-height="500"
        href="https://twitter.com/alma_responde?s=20&t=E0_MtBK3l4HNIQgy7CaVQA"
        data-chrome="nofooter noheader transparent"
      ></a>
      <a
        href="https://twitter.com/alma_responde"
        target="_blank"
        style="
          color: #3e3e3e;
          font-weight: bold;
          height: 40px;
          margin-top: 15px;
          margin-bottom: 10px;
        "
        >Ver más noticias en Twitter</a
      >
    </div>
  </center>

  <!-- End Twiter -->
</template>

<style scoped>
.twitter-title {
  color: #3e3e3e;
  font-size: 1.2rem;
  font-weight: bolder;
}
</style>

<script>
// Enable twitter
var TwitterWidgetsLoader = require("twitter-widgets");

export default {
  mounted() {
    TwitterWidgetsLoader.load();
  },
};
// end
</script>

<!--
<blockquote class="twitter-tweet"><p lang="es" dir="ltr">¡Sorpresa, sorpresa! 🚨🤩<br><br>¡Nueva página donde centralizamos toda la información sobre los centros de vacunación en Guatemala! Ahora es más fácil buscar por departamento, municipio, tipo de vacuna y grupo de población. <br><br>Ingresen aquí ➡️ <a href="https://t.co/kvFeoWPNAR">https://t.co/kvFeoWPNAR</a> <a href="https://t.co/hWffZVyHxO">pic.twitter.com/hWffZVyHxO</a></p>&mdash; ALMA Guatemala (@alma_guatemala) <a href="https://twitter.com/alma_guatemala/status/1423042285365760004?ref_src=twsrc%5Etfw">August 4, 2021</a></blockquote> 
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
-->

<!--
<a class="twitter-timeline" data-height="1500" href="https://twitter.com/alma_guatemala?ref_src=twsrc%5Etfw">Tweets by alma_guatemala</a>
-->
