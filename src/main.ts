import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import "./styles/_styles.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
