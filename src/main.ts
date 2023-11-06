import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import fr from '@/lang/fr-FR.json'
import en from '@/lang/en-US.json'
import ro from '@/lang/ro-RO.json'

import App from './App.vue'
import router from './router'

const i18n = createI18n({
  legacy:false,
  locale: localStorage.getItem("locale") ?? "fr-FR",
    // fallbackLocale: fr,
    messages: {
      "fr-FR": fr,
      "en-US": en,
      "ro-RO": ro
    }
  })

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
