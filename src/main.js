import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import { createPinia } from "pinia";

import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/base.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
createApp(App).use(createPinia()).mount("#app");
createApp(App).use(router).mount("#app");

AOS.init({
  duration: 1200,
  easing: "ease-in-out-sine",
  once: false,
  mirror: false,
});
