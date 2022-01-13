<template>
  <div
    class="details-card bg-white rounded-lg overflow-hidden text-center flex flex-col"
    :class="props.stats ? 'border border-gray-300' : 'shadow-md'"
  >
    <div class="content grid grid-cols-5 gap-4 flex-grow">
      <div class="border-r col-span-2 flex" :class="`bg-state-${stats}`">
        <div class="icon m-auto">
          <img class="w-20 h-20" :src="props.icon" alt="" />
        </div>
      </div>
      <div class="data col-span-3 my-auto py-8 flex flex-col gap-2">
        <h4
          class="title text-xl capitalize"
          :class="props.stats ? `text-state-${props.stats}` : 'text-primary'"
        >
          {{ props.title }}
        </h4>
        <h3
          class="value text-3xl font-bold capitalize"
          :class="props.stats ? `text-state-${props.stats}` : ''"
        >
          {{ props.value }}
        </h3>
        <p class="sub">{{ props.sub }}</p>
      </div>
    </div>
    <span class="col-span-3 bg-primary h-2" v-if="!props.stats" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  icon: String,
  title: String,
  value: String,
  sub: String,
  stats: String || null,
});
</script>
