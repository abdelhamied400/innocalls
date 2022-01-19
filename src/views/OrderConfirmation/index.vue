<template>
  <div class="order-confirmation w-full">
    <div class="actions my-4">
      <a-button type="primary" size="large">
        <router-link :to="{name: 'create-order-confirmation'}">+ Create</router-link>
      </a-button>
    </div>
    <a-table
      :columns="columns"
      :data-source="data"
      :loading="!data"
      :pagination="pagination"
      @change="onChange"
    >
      <template #filename="{ text }">
        <Filename :value="text" />
      </template>
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
import { computed } from 'vue';
import Filename from './slots/filename.vue';
import Status from './slots/status.vue';
import Percentage from './slots/percentage.vue';
import Tries from './slots/tries.vue';
import BatchStats from './slots/batchStats.vue';
import Actions from './slots/actions.vue';

const store = useStore();

store.dispatch('fetchOrderConfirmationList');
const orderConfirmationList = computed(() => store.getters.orderConfirmationList);
const currentPage = computed(() => store.getters.currentPage);

const defaultCol = (key) => ({
  key,
  dataIndex: key,
  slots: { customRender: key },
  title: key
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '),
});
const columns = computed(() => [
  defaultCol('caller_id'),
  defaultCol('filename'),
  defaultCol('concurrent_count'),
  defaultCol('start_time'),
  defaultCol('tries'),
  defaultCol('batch_types'),
  defaultCol('recipients_count'),
  defaultCol('status'),
  defaultCol('percentage'),
  defaultCol('batch_stats'),
  defaultCol('actions'),
]);

const data = computed(() => orderConfirmationList.value?.data.map((record) => ({
  ...record,
  key: record.id,
})));

const pagination = computed(() => ({
  total: +orderConfirmationList.value?.total,
  pageSize: +orderConfirmationList.value?.per_page,
  current: currentPage,
}));

const onChange = ({ current }) => {
  console.log(current);
  store.dispatch('setCurrentPage', current);
  store.dispatch('fetchOrderConfirmationList');
};
</script>
