import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import user from '../services/user';
import store from '@/store/index';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.meta?.requiresAuth && !(await user.isAuth())) {
    next('/login');
  } else {
    next();
  }
});

router.afterEach(() => {
  store.commit('authLoading', false);
});

export default router;
