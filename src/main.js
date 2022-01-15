import { createApp } from "vue";
import App from "./App.vue";
// import "@fortawesome/fontawesome-free/css/all.css";
// import "@fortawesome/fontawesome-free/js/all.js";
import "./assets/FontAwesome/css/all.css";
import router from "./router";
import i18n from "./i18n";
import store from './store'

createApp(App).use(store).use(router).use(i18n).mount("#app");
