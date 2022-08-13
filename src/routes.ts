import Index from '@/pages/index.vue';
import NotFound from '@/pages/not-found.vue';
import About from '@/pages/about.vue';

export const routes = [
  { path: '/', component: Index },
  { path: '/om-mig', component: About },
  { path: '/:path(.*)', component: NotFound },
];

export default routes;
