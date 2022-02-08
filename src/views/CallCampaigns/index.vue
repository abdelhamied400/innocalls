<template>
  <div class="call-campaigns w-full max-w-8xl mx-auto">
    <div class="flex flex-col gap-4">
      <!-- table actions -->
      <div class="table-actions flex justify-between gap-4">
        <div class="filters flex gap-4">
          <a-select
            v-model:value="perPage"
            size="large"
            @change="onPerPageChange"
          >
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
          <router-link :to="{ name: 'create-call-campaigns' }">
            + Create
          </router-link>
        </a-button>
      </div>

      <!-- table -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SearchOutlined } from '@ant-design/icons-vue';

const perPage = ref('10 per page');
const onPerPageChange = () => {};
let searchTimer = null;

const onSearch = (ev) => {
  const { value } = ev.srcElement;

  // lazy search
  clearTimeout(searchTimer);
  searchTimer = setTimeout(async () => {
    console.log(value);
  }, 500);
};
</script>
