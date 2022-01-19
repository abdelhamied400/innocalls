<template>
  <a-popover v-if="props.value.length > 20">
    <template #content>
      <span>{{ props.value }}</span>
    </template>
    <span>{{ props.value.substring(0, 20) }}</span>
    <span v-if="props.value.length > 20">...</span>
  </a-popover>
  <span v-else>{{ props.value }}</span>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  value: String,
});
</script>
