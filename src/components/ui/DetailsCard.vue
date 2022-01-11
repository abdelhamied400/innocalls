<template>
  <div class="details-card bg-white shadow-md rounded-lg text-center flex flex-col">
    <div class="content grid grid-cols-3 gap-4 flex-grow">
      <div class="border-r col-span-0 flex">
        <div class="icon m-auto"><img class="w-20 h-20" :src="props.icon" alt=""></div>
      </div>
      <div class="data col-span-2 my-auto py-8 flex flex-col gap-2">
        <h4 class="title text-xl text-primary capitalize">{{props.title}}</h4>
        <h3 class="value text-3xl font-bold capitalize">{{props.value}}</h3>
        <p class="sub">{{props.sub}}</p>
      </div>
    </div>
    <div class="col-span-3 bg-primary h-2"></div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  icon: String,
  title: String,
  value: String,
  sub: String,
});
</script>
