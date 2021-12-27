<template>
  <div class="graphCard bg-white shadow-md rounded-lg overflow-hidden text-center">
    <div class="head bg-primary py-3">
      <p class="text-white text-base font-bold">{{props.title}}</p>
    </div>
    <div class="body flex p-8">
      <div class="draw-area flex flex-1">
        <slot />
      </div>
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
.graphCard .body .draw-area{
  max-height: 255px !important;
}
.graphCard .body .draw-area div{
  width: 100% !important;
}
</style>
