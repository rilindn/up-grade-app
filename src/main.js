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
import Notifications from "@kyvg/vue3-notification";
import mitt from "mitt";
import moment from "moment";

const emitter = mitt();

const app = createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .use(Notifications)
  .use(VuesticPlugin, {
    colors: palette,
  });
app.config.globalProperties.emitter = emitter;
app.config.globalProperties.moment = moment;

app.mount("#app");
