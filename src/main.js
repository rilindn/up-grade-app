import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import router from "./router";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";

new Vue({
  router,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");

// createApp(App).use(router).mount("#app");
