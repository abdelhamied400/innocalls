import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layout/MainLayout.vue';
import user from '../services/user';
import store from '@/store/index';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: import('../views/Home.vue'),
      },
      {
        path: 'order-confirmation',
        name: 'orderConfirmation',
        component: import('../views/Home.vue'),
      },
      {
        path: 'campaigns',
        name: 'campaigns',
        component: import('../views/Home.vue'),
      },
      {
        path: 'voice-messages',
        name: 'voiceMessages',
        component: import('../views/Home.vue'),
      },
      {
        path: 'conference-bridge',
        name: 'conferenceBridge',
        component: import('../views/Home.vue'),
      },
      {
        path: 'phonebook',
        name: 'phonebook',
        component: import('../views/Home.vue'),
      },
      {
        path: 'extensions',
        name: 'extensions',
        component: import('../views/Home.vue'),
      },
      {
        path: 'pbxware',
        name: 'pbxware',
        component: import('../views/Home.vue'),
      },
      {
        path: 'call-reporting',
        name: 'callReporting',
        component: import('../views/Home.vue'),
      },
      {
        path: 'call-survey',
        name: 'callSurvey',
        component: import('../views/Home.vue'),
      },
      {
        path: 'invoices',
        name: 'invoices',
        component: import('../views/Home.vue'),
      },
      {
        path: 'auto-dialer',
        name: 'autoDialer',
        component: import('../views/Home.vue'),
      },
      {
        path: 'developer-tab',
        name: 'developerTab',
        component: import('../views/Home.vue'),
      },
      {
        path: 'support',
        name: 'support',
        component: import('../views/Home.vue'),
      },
    ],
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
