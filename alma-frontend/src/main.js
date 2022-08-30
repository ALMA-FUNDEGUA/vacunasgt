import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";
import wb from "./registerServiceWorker";

import { install } from 'ga-gtag';

Vue.prototype.$workbox = wb;
Vue.config.productionTip = false;

install(process.env.VUE_APP_GA_MEASUREMENT_ID, {
  debug_mode: process.env.NODE_ENV === 'development',
})

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
