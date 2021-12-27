<template>
  <transition :css="false" @leave="(el, done) => motions.cube.leave(done)">
    <aside
      class="bg-white shadow-lg border sticky top-24"
      v-if="sidebarOpen"
      v-motion="'cube'"
      :initial="{
        x: 150,
        opacity: 0,
      }"
      :enter="{
        x: 0,
        opacity: 1,
        transition: {
          repeatDelay: 100,
        },
      }"
      :leave="{
        x: -150,
        opacity: 0,
      }"
    >
      <a-menu class="w-56" mode="inline">
        <div v-for="item in list" :key="item.name">
          <a-sub-menu v-if="item.children" :title="item.name">
            <template #icon><component :is="item.icon" /></template>
            <div class="sub-item" v-for="child in item.children" :key="child.name" :to="child.to">
              <SidebarItem v-bind="child" />
            </div>
          </a-sub-menu>
          <SidebarItem v-else v-bind="item" />
        </div>
      </a-menu>
    </aside>
  </transition>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import {
  AppstoreFilled,
  FundFilled,
  CopyFilled,
  ApiFilled,
  ExperimentFilled,
  SoundFilled,
  GoldenFilled,
  AudioFilled,
  MessageFilled,
  PhoneFilled,
  NotificationFilled,
  ProfileFilled,
  DatabaseFilled,
  ApartmentOutlined,
  ContainerFilled,
} from '@ant-design/icons-vue';
import { useMotions } from '@vueuse/motion';
import { useI18n } from 'vue-i18n';
import SidebarItem from './SidebarItem.vue';

const store = useStore();
const { t } = useI18n();

//
// exports
const sidebarOpen = computed(() => store.getters.sidebarOpen);
const motions = useMotions();

const list = computed(() => [
  {
    name: t('sidebar.dashboard'),
    to: '/',
    icon: <AppstoreFilled />,
  },
  {
    name: t('sidebar.orderConfirmation'),
    to: '/order-confirmation',
    icon: <CopyFilled />,
  },
  {
    name: t('sidebar.campaigns'),
    to: '/campaigns',
    icon: <GoldenFilled />,
  },
  {
    name: t('sidebar.voiceMessages'),
    to: '/voice-messages',
    icon: <AudioFilled />,
  },
  {
    name: t('sidebar.conferenceBridge'),
    to: '/conference-bridge',
    icon: <ApiFilled />,
  },
  {
    name: t('sidebar.phoneBook'),
    to: '/phonebook',
    icon: <ProfileFilled />,
  },
  {
    name: t('sidebar.extensions'),
    to: '/extensions',
    icon: <DatabaseFilled />,
  },
  {
    name: t('sidebar.pbxWare'),
    to: '/pbxware',
    icon: <ApartmentOutlined />,
  },
  {
    name: t('sidebar.reporting'),
    icon: <FundFilled />,
    children: [
      {
        name: t('sidebar.callReporting'),
        to: '/reporting/call-reporting',
        icon: <SoundFilled />,
      },
      {
        name: t('sidebar.callSurvey'),
        to: '/reporting/call-survey',
        icon: <NotificationFilled />,
      },
    ],
  },
  {
    name: t('sidebar.invoices'),
    to: '/invoices',
    icon: <ContainerFilled />,
  },
  {
    name: t('sidebar.autoDialer'),
    to: '/auto-dialer',
    icon: <PhoneFilled />,
  },
  {
    name: t('sidebar.developerTab'),
    to: '/developer-tab',
    icon: <ExperimentFilled />,
  },
  {
    name: t('sidebar.contactSupport'),
    to: '/support',
    icon: <MessageFilled />,
  },
]);
</script>
