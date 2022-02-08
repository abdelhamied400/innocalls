<template>
  <div class="field">
    <p>{{props.label}}</p>
    <slot />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  label: String,
});
</script>
