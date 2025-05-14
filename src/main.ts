import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import { definePreset } from '@primeuix/themes'

const app = createApp(App)

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f4f7f7',
      100: '#e2ebeb',
      200: '#c9d8d7',
      300: '#94b2b2',
      400: '#76999a',
      500: '#5b7e7f',
      600: '#4e696c',
      700: '#44595a',
      800: '#3d4b4d',
      900: '#364243',
      950: '#21292b',
    },
  },
})

app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      darkModeSelector: '.dark-mode',
    },
  },
})

app.mount('#app')
