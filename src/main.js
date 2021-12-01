import { createApp } from 'vue';
import {
  Layout,
  Button,
  Spin,
  Result,
  Card,
  Divider,
  Col,
  Row,
  Drawer,
  Table,
  Form,
  InputNumber,
  Tag,
} from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

import './style.css';

createApp(App).use(i18n).use(store).use(router)
  .use(Layout)
  .use(Button)
  .use(Spin)
  .use(Result)
  .use(Card)
  .use(Divider)
  .use(Col)
  .use(Row)
  .use(Drawer)
  .use(Table)
  .use(Form)
  .use(InputNumber)
  .use(Tag)
  .mount('#app');
