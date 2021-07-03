import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import InputMask from 'primevue/inputmask'
import App from './App.vue'
import 'animate.css'


createApp(App)
    .use(PrimeVue)
    .component('InputMask', InputMask)
    .mount('#app')

