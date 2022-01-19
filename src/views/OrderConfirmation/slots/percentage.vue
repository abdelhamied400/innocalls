<template>
  <a-progress
    :percent="props.value"
    :status="['time_failure','failure'].includes(props.record.status) ? 'exception' : null"
  />
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  value: Number,
  record: Object,
});
</script>
