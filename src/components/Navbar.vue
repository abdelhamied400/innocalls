<template>
  <nav class="bg-white">
    <div class="h-2 bg-primary-dark"></div>
    <div class="flex mx-24">
      <div class="py-3 logo">
        <img class="w-36" src="@/assets/logo.svg" alt="innocalls" />
      </div>
      <div class="mx-8 flex-grow flex justify-between">
        <div class="menu xl:flex hidden">
          <NavbarItem v-for="item in navItems" v-bind="item" :key="item.name" />
        </div>
        <div class="actions md:flex gap-2 hidden items-center">
          <LangBar />
          <img class="w-7 mx-2" src="@/assets/icons/shop.svg" alt />
          <img class="w-7 mx-2" src="@/assets/icons/notification.svg" alt />
          <img class="w-7 mx-2" src="@/assets/icons/info.svg" alt />
          <img class="w-7 mx-2" src="@/assets/icons/logout.svg" alt />
        </div>
      </div>
      <TenantBar />
    </div>

    <div class="subNav bg-gray-700 text-white text-lg">
      <div class="flex items-center justify-between mx-24 h-full">

        <div class="sideMenu">
          <a-dropdown>
      <a
        class="px-4 text-base capitalize flex space-x-2 items-center"
        @click.prevent
      >
        {{$t("sidebar.dashboard")}}
        <CaretDownOutlined />
      </a>
      <template #overlay>
        <a-menu>
          <router-link v-for="(item, idx) in sidebarItems" :key="idx" :to="item.to">
            <a-menu-item>
              {{ item.name }}
            </a-menu-item>
          </router-link>
        </a-menu>
      </template>
    </a-dropdown>
        </div>

        <div class="tabs flex">
          <a-menu
            class="capitalize bg-transparent text-white border-0 my-auto"
            v-model:selectedKeys="current"
            mode="horizontal"
          >
            <a-menu-item class="mx-4" v-for="item in subMenuItems" :key="item.key">
              <span class="block my-4 text-lg">{{ item.value }}</span>
            </a-menu-item>
          </a-menu>
        </div>
        <div class="actions">
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed, ref } from 'vue';
import { CaretDownOutlined } from '@ant-design/icons-vue';
import { useI18n } from 'vue-i18n';
import NavbarItem from './NavbarItem.vue';
import LangBar from './LangBar.vue';
import TenantBar from './TenantBar.vue';

const { t } = useI18n();

const current = ref(['queues']);
const navItems = computed(() => [
  {
    name: t('navbar.create'),
    children: [
      {
        name: t('navbar.callCampaign'),
        to: '/call-campaign/create',
      },
      {
        name: t('navbar.orderConfirmation'),
        to: '/order-confirmation/create',
      },
      {
        name: t('navbar.outboundCallSurvey'),
        to: '/call-survey/create',
      },
      {
        name: t('navbar.autoDialer'),
        to: '/auto-dialer/create',
      },
      {
        name: t('navbar.productSurvey'),
        to: '/product-survey/create',
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
const sidebarItems = computed(() => [
  {
    name: t('sidebar.dashboard'),
    to: '/',
  },
  {
    name: t('sidebar.orderConfirmation'),
    to: '/order-confirmation',
  },
  {
    name: t('sidebar.campaigns'),
    to: '/users',
  },
  {
    name: t('sidebar.voiceMessages'),
    to: '/payment',
  },
  {
    name: t('sidebar.conferenceBridge'),
    to: '/users',
  },
  {
    name: t('sidebar.phoneBook'),
    to: '/payment',
  },
  {
    name: t('sidebar.extensions'),
    to: '/users',
  },
  {
    name: t('sidebar.pbxWare'),
    to: '/payment',
  },
  {
    name: t('sidebar.reporting'),
    to: '/users',
  },
  {
    name: t('sidebar.callReporting'),
    to: '/payment',
  },
  {
    name: t('sidebar.callSurvey'),
    to: '/users',
  },
  {
    name: t('sidebar.invoices'),
    to: '/payment',
  },
  {
    name: t('sidebar.autoDialer'),
    to: '/users',
  },
  {
    name: t('sidebar.developerTab'),
    to: '/payment',
  },
  {
    name: t('sidebar.contactSupport'),
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
.ant-menu-item-selected::after{
  border-bottom: 5px solid #2F8FCF !important;
}
</style>
