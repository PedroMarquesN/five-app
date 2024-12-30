import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import AnimateOnScroll from 'primevue/animateonscroll';
import router from './router/router.ts'
import { MotionPlugin } from '@vueuse/motion';
import ToastService from 'primevue/toastservice';

import './styles/themes.scss'; 
import 'primeicons/primeicons.css'; 

const app = createApp(App);
app.use(router)
app.use(MotionPlugin);
app.use(PrimeVue);
app.use(ToastService);  
app.directive('animateonscroll', AnimateOnScroll);
app.mount('#app');
