import { createApp, ref } from "vue";
import App from "./App.vue";
import router from "./router";
import "sass";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./assets/main.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./icons";
import PageViewHead from "@/components/global/PageViewHead.vue";
import CanvasJSChart from "@canvasjs/vue-charts";

const app = createApp(App);

app.use(router);

app.use(CanvasJSChart);

app
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .component("PageViewHead", PageViewHead);

app.mount("#app");
