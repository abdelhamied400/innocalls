<template>
  <span>{{ props.value.length }}</span>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  value: Array,
});
</script>
