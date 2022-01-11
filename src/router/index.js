import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layout/MainLayout.vue';
import EmptyLayout from '../layout/EmptyLayout.vue';
import user from '../services/user';
import store from '@/store/index';

const routes = [
  {
    path: '',
    component: MainLayout,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'order-confirmation',
        name: 'orderConfirmation',
        component: () => import('../views/OrderConfirmation/index.vue'),
      },
      {
        path: 'campaigns',
        name: 'campaigns',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'voice-messages',
        name: 'voiceMessages',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'conference-bridge',
        name: 'conferenceBridge',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'phonebook',
        name: 'phonebook',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'extensions',
        name: 'extensions',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'pbxware',
        name: 'pbxware',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'reporting',
        name: 'reporting',
        component: EmptyLayout,
        redirect: { name: 'callReporting' },
        children: [
          {
            path: 'call-reporting',
            name: 'callReporting',
            component: () => import('../views/Home.vue'),
          },
          {
            path: 'call-survey',
            name: 'callSurvey',
            component: () => import('../views/Home.vue'),
          },
        ],
      },
      {
        path: 'invoices',
        name: 'invoices',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'auto-dialer',
        name: 'autoDialer',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'developer-tab',
        name: 'developerTab',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'support',
        name: 'support',
        component: () => import('../views/Home.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Auth/Login.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/Auth/Signup.vue'),
  },
  {
    path: '/forget-password',
    name: 'forgetPassword',
    component: () => import('../views/Auth/ForgetPassword.vue'),
  },
  {
    path: '/verify-password-reset',
    name: 'otpPasswordReset',
    component: () => import('../views/Auth/OtpPasswordReset.vue'),
  },
  {
    path: '/password/reset',
    name: 'passwordReset',
    component: () => import('../views/Auth/ResetPassword.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  store.commit('authLoading', true);
  const auth = await user.auth();
  store.commit('user', auth.data);
  store.commit('tenant', auth.data?.tenantList?.[0]);

  const isAuth = to.meta?.requiresAuth && auth.success;
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
