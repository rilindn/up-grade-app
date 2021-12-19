import { createApp } from "vue";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import router from "./router";
import i18n from "./i18n";

createApp(App).use(router).use(i18n).mount("#app");
