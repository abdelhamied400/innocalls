<template>
  <nav>
    <div class="h-2 bg-primary-700"></div>
    <div class="bg-white px-8 h-18">
      <div class="flex justify-between h-full mx-auto max-w-8xl">
        <div class="flex gap-12">
          <router-link to="/" class="flex">
            <img class="w-36 m-auto" src="@/assets/logo.svg" alt="innocalls"/>
          </router-link>
          <div class="menu flex">
            <NavbarItem v-for="item in navItems" v-bind="item" :key="item.name" />
          </div>
        </div>
        <div class="mx-8 flex gap-4">
          <div class="actions flex gap-2 items-center">
            <LangBar />
            <Notifications />
            <img class="w-7 mx-2" src="@/assets/icons/info.svg" alt />
            <img class="w-7 mx-2" src="@/assets/icons/logout.svg" alt />
          </div>
          <TenantBar />
        </div>
      </div>
    </div>

    <div class="bg-gray-700 px-8 h-18">
      <div class="flex justify-between h-full mx-auto max-w-8xl">
        <p
          class="text-xl text-primary font-semibold uppercase flex space-x-2 items-center"
        >
          dashboard
        </p>
        <div class="tabs flex">
          <a-menu
            class="capitalize bg-transparent text-white border-0"
            v-model:selectedKeys="current"
            mode="horizontal"
          >
            <a-menu-item class="mx-4" v-for="item in subMenuItems" :key="item.key">
              <span class="block my-4 text-2xl font-medium">{{ item.value }}</span>
            </a-menu-item>
          </a-menu>
        </div>
        <div class="actions"></div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import NavbarItem from './NavbarItem.vue';
import LangBar from './LangBar.vue';
import TenantBar from './TenantBar.vue';
import Notifications from './Notifications.vue';

const { t } = useI18n();

const current = ref(['queues']);
const navItems = computed(() => [
  {
    name: 'services',
    active: true,
    children: [
      {
        name: t('navbar.callCampaign'),
        to: '/call-campaign',
      },
      {
        name: t('navbar.orderConfirmation'),
        to: '/order-confirmation',
      },
      {
        name: t('navbar.outboundCallSurvey'),
        to: '/call-survey',
      },
      {
        name: t('navbar.autoDialer'),
        to: '/auto-dialer',
      },
      {
        name: t('navbar.productSurvey'),
        to: '/product-survey',
      },
    ],
  },
  {
    name: t('navbar.reporting'),
    children: [
      {
        name: t('navbar.callReporting'),
        to: 'reporting/call-reporting',
      },
      {
        name: t('navbar.callSurvey'),
        to: 'reporting/call-survey',
      },
    ],
  },
  {
    name: t('navbar.usersAndTeams'),
    children: [],
    to: '/users',
  },
  {
    name: t('navbar.payment'),
    children: [],
    to: '/payment',
  },
]);

const subMenuItems = computed(() => [
  {
    key: 'queues',
    value: t('subnav.queues'),
  },
  {
    key: 'teams',
    value: t('subnav.teams'),
  },
  {
    key: 'groups',
    value: t('subnav.groups'),
  },
]);
</script>

<style>
.ant-menu-item-selected {
  color: white !important;
}
.ant-menu-item-selected::after {
  border-bottom: 5px solid #2f8fcf !important;
}
</style>
