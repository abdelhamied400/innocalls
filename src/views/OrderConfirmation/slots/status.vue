<template>
  <a-popover v-if="props.record.reasons?.length > 0">
    <template #content>
      <p v-for="reason in props.record.reasons" :key="reason">{{ reason }}</p>
    </template>
    <a-tag class="cursor-pointer" :color="statusColors[props.value]">
      <template #icon v-if="props.value === 'in-process'">
        <SyncOutlined spin />
      </template>
      {{ props.value }}
    </a-tag>
  </a-popover>
  <a-tag v-else class="cursor-pointer" :color="statusColors[props.value]">
    <template #icon v-if="props.value === 'in-process'">
      <SyncOutlined spin />
    </template>
    {{ props.value }}
  </a-tag>
</template>

<script setup>
import { SyncOutlined } from '@ant-design/icons-vue';
import { defineProps } from 'vue';

const props = defineProps({
  value: String,
  record: Object,
});

const statusColors = {
  pending_import: 'orange',
  'in-process': 'cyan',
  time_failure: 'red',
  failure: 'red',
  finished: 'blue',
};
</script>
