import { createApp } from 'vue';
import antdv from 'ant-design-vue/lib';
import 'ant-design-vue/dist/antd.less';
import { MotionPlugin } from '@vueuse/motion';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

import './style.css';

createApp(App).use(i18n).use(store).use(router)
  .use(antdv)
  .use(MotionPlugin)
  .mount('#app');
