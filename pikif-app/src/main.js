import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import store from "./store/index";
import "@fortawesome/fontawesome-free/css/all.css";

createApp(App).use(store).mount("#app");
