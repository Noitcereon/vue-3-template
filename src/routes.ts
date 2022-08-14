import Index from '@/pages/index.vue';
import NotFound from '@/pages/not-found.vue';
import About from '@/pages/about.vue';

export const routes = [
  { path: '/', component: Index },
  { path: '/about', component: About },
  { path: '/:path(.*)', component: NotFound },
];

export default routes;
