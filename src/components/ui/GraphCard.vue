<template>
  <div class="GraphCard shadow-md rounded-lg overflow-hidden">
    <div class="head bg-primary py-3">
      <p class="text-white text-base font-bold">{{props.title}}</p>
    </div>
    <div class="body bg-white p-8">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
});

</script>

<style>
.GraphCard .body canvas{
  height: 200px !important;
}
</style>
