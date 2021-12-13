import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import user from '../services/user';
import store from '@/store/index';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/Signup.vue'),
  },
  {
    path: '/forget-password',
    name: 'forgetPassword',
    component: () => import('../views/ForgetPassword.vue'),
  },
  {
    path: '/verify-password-reset',
    name: 'otpPasswordReset',
    component: () => import('../views/OtpPasswordReset.vue'),
  },
  {
    path: '/password/reset',
    name: 'passwordReset',
    component: () => import('../views/ResetPassword.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  store.commit('authLoading', true);
  const isAuth = to.meta?.requiresAuth && (await user.isAuth());
  if (to.meta?.requiresAuth && !isAuth) {
    next('/login');
  } else {
    next();
  }
});

router.afterEach(() => {
  store.commit('authLoading', false);
});

export default router;
