import { createApp } from "vue";
import router from "./router";
import PrimeVue from "primevue/config";
import PrimeIcons from "primevue/config";
import ToastService from "primevue/toastservice";

import App from "./App";
const app = createApp(App);

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "vue3-carousel/dist/carousel.css";

app.use(router).use(PrimeVue).use(PrimeIcons).use(ToastService);

app.mount("#app");
