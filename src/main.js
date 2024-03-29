import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faPlus,
  faEye,
  faBagShopping,
  faArrowRight,
  faXmark,
  faMinus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faPlus,
  faEye,
  faBagShopping,
  faArrowRight,
  faXmark,
  faMinus,
  faTrash
);

const app = createApp(App);

app.use(createPinia());
app.use(router);
// Globally register font awesome icon component
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
