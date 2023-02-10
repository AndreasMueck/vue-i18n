import { createApp } from 'vue'
import { createI18n } from "vue-i18n";
import App from './App.vue'

import './assets/main.css'

// import translations
import de from "./locales/de.json";
import en from "./locales/en.json";

// configure i18n
const i18n = createI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: { de, en },
  });

// create and start the app
const app = createApp(App);
app.use(i18n);
app.mount("#app");