<template>
  <div
    class="
      card
      bg-white
      shadow-md
      rounded-lg
      px-8
      py-6
      flex
      text-center
    "
  >
    <slot v-if="!props.loading" />
    <div class="m-auto"  v-else>
      <a-spin />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  loading: Boolean,
});
</script>

<style scoped>
.card{
  min-height: 200px;
}
</style>
