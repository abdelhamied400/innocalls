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
        <div class="actions md:flex hidden items-center">
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
        Dashboard
        <CaretDownOutlined />
      </a>
      <template #overlay>
        <a-menu>
          test
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
            <a-menu-item class="mx-4" v-for="item in subMenuItems" :key="item">
              <span class="block my-4 text-lg">{{ item }}</span>
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
import NavbarItem from './NavbarItem.vue';
import LangBar from './LangBar.vue';
import TenantBar from './TenantBar.vue';

const current = ref(['queues']);
const navItems = computed(() => [
  {
    name: 'create',
    children: [
      {
        name: 'Call Campaign',
        to: '/call-campaign/create',
      },
      {
        name: 'Order Confirmation',
        to: '/order-confirmation/create',
      },
      {
        name: 'Outbound Call Survey',
        to: '/call-survey/create',
      },
      {
        name: 'Auto Dialer',
        to: '/auto-dialer/create',
      },
      {
        name: 'Product Survey',
        to: '/product-survey/create',
      },
    ],
  },
  {
    name: 'Reporting',
    children: [
      {
        name: 'Call Reporting',
        to: 'reporting/call-reporting',
      },
      {
        name: 'Call Survey',
        to: 'reporting/call-survey',
      },
    ],
  },
  {
    name: 'Users & Teams',
    children: [],
    to: '/users',
  },
  {
    name: 'Payment',
    children: [],
    to: '/payment',
  },
]);
const subMenuItems = computed(() => ['queues', 'teams', 'groups']);
</script>

<style>
.ant-menu-item-selected::after{
  border-bottom: 5px solid #2F8FCF !important;
}
</style>
