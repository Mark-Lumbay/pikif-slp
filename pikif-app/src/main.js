import { createApp } from "vue";
import Vue from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import store from "./store/index";

// Font Awesome dependencies
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHatWizard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHatWizard);
Vue.component("font-awesome-icon", FontAwesomeIcon);
createApp(App).use(store).mount("#app");
