<template>
  <div class="content">
    <div class="content flex gap-4">
      <div class="bg-primary rounded-lg -mt-12 mb-4">
        <img class="w-28 h-28 object-contain p-8" src="@/assets/icons/call-duration.svg" alt />
      </div>
      <div class="head flex-1">
        <p class="text-gray-400 text-lg font-light">Average call duration / month</p>
        <p class="font-bold text-2xl">
          {{ props.duration.average.hours }}H {{ props.duration.average.minutes }}M
          {{ props.duration.average.seconds }}S
        </p>
      </div>
    </div>
    <hr />
    <div class="total my-4">
      <p class="font-bold text-2xl text-primary">Average call duration</p>
      <p class="text-gray-400 text-lg font-light">
        Based on {{ props.duration.calls }} calls
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  duration: Object,
});
</script>
