
import { createRouter, createWebHistory } from 'vue-router';

// Import your Vue components for each page
import Home from '../Pages/Home.vue';
import Contact from '../Pages/Contact.vue';
import About from '../Pages/About.vue';
 import Careers from '../Pages/Careers.vue';
 import Events from '../Pages/Events.vue';
import Faq from '../Pages/Faq.vue';
import Services from '../Pages/Services.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contactus', component: Contact },
   { path: '/careers', component: Careers },
   { path: '/events', component: Events },
   { path: '/faq', component: Faq },
   { path: '/services', component: Services },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router; 