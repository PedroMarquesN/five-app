import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import router from './router/router.ts'

import './styles/themes.scss'; 
import 'primeicons/primeicons.css'; 

const app = createApp(App);
app.use(router)
app.use(PrimeVue);
app.mount('#app');
