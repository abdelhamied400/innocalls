<template>
  <div class="order-confirmation w-full max-w-8xl mx-auto flex flex-col gap-4">
    <div class="table-actions flex justify-between gap-4">
      <div class="filters flex gap-4">
        <a-select v-model:value="perPage" size="large" @change="onPerPageChange">
          <a-select-option :value="10">10 per page</a-select-option>
          <a-select-option :value="25">25 per page</a-select-option>
          <a-select-option :value="100">100 per page</a-select-option>
        </a-select>
        <a-input placeholder="Search..." @change="onSearch">
          <template #prefix>
            <SearchOutlined />
          </template>
        </a-input>
      </div>
      <a-button type="primary" size="large">
        <router-link :to="{name: 'create-order-confirmation'}">+ Create</router-link>
      </a-button>
    </div>

    <a-table
      bordered
      :columns="columns"
      :data-source="data"
      :loading="!data"
      :pagination="pagination"
      @change="onChange"
    >
      <template #status="{ text, record }">
        <Status :value="text" :record="record" />
      </template>
      <template #percentage="{ text, record }">
        <Percentage :value="text" :record="record" />
      </template>
      <template #tries="{ text }">
        <Tries :value="text" />
      </template>
      <template #batch_stats="{ record }">
        <BatchStats :record="record" />
      </template>
      <template #actions="record">
        <Actions v-bind="record" />
      </template>
    </a-table>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { SearchOutlined } from '@ant-design/icons-vue';
import Status from './slots/status.vue';
import Percentage from './slots/percentage.vue';
import Tries from './slots/tries.vue';
import BatchStats from './slots/batchStats.vue';
import Actions from './slots/actions.vue';

const store = useStore();

store.dispatch('setFilter', '');
store.dispatch('fetchOrderConfirmationList');
const orderConfirmationList = computed(() => store.getters.orderConfirmationList);
const currentPage = computed(() => store.getters.currentPage);
const perPage = ref('10 per page');
let searchTimer = null;

const defaultCol = (key, title) => ({
  key,
  dataIndex: key,
  slots: { customRender: key },
  ellipsis: true,
  title: title || key
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '),
});
const columns = computed(() => [
  defaultCol('id', '#'),
  defaultCol('caller_id'),
  defaultCol('filename'),
  { ...defaultCol('concurrent_count'), ellipsis: false },
  defaultCol('start_time'),
  defaultCol('tries'),
  defaultCol('batch_types'),
  { ...defaultCol('recipients_count'), ellipsis: false },
  defaultCol('status'),
  defaultCol('percentage'),
  defaultCol('batch_stats'),
  defaultCol('actions'),
]);

const data = computed(() => orderConfirmationList.value?.data.map((record, idx) => ({
  ...record,
  key: record.id,
  id: idx + 1,
})));

const pagination = computed(() => ({
  total: +orderConfirmationList.value?.total,
  pageSize: +orderConfirmationList.value?.per_page,
  current: currentPage.value,
}));

const onChange = ({ current }) => {
  store.dispatch('setCurrentPage', current);
  store.dispatch('fetchOrderConfirmationList');
};

const onSearch = (ev) => {
  const { value } = ev.srcElement;
  store.dispatch('setFilter', value);

  // lazy load order confirmation list
  clearTimeout(searchTimer);
  searchTimer = setTimeout(async () => {
    await store.dispatch('fetchOrderConfirmationList');
  }, 500);
};

const onPerPageChange = (per) => {
  store.dispatch('setPerPage', per);
  store.dispatch('fetchOrderConfirmationList');
};
</script>
