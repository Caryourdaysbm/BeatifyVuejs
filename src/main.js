import { createApp } from 'vue';
import App from './App.vue';
import '../main.css';
import router from './router'; // Import your Vue Router instance here
import 'aos/dist/aos.css';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'; // Choose a theme from PrimeVue theme collection
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

createApp(App).use(router).use(PrimeVue).mount('#app');

