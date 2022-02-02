import { createApp } from "vue";
import App from "./App.vue";
// import "@fortawesome/fontawesome-free/css/all.css";
// import "@fortawesome/fontawesome-free/js/all.js";
import "./assets/FontAwesome/css/all.css";
import router from "./router";
import i18n from "./i18n";
import store from "./store";
// import { Vuestic } from "./plugins/vuestics";
// import "vuestic-ui/dist/vuestic-ui.css";
import { VuesticPlugin } from "vuestic-ui";
import palette from "@/theme/palette";

createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .use(VuesticPlugin, {
    colors: palette,
  })
  .mount("#app");
