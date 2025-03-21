import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Next from '../views/Next.vue';

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/next', component: Next }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;