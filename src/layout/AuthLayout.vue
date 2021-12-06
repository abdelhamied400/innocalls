<template>
  <div class>
    <div class="flex flex-1 justify-center h-screen">
      <slot />
    </div>
    <div class="banner flex-1 hidden 2xl:flex h-screen">
      <img class="w-2/5 m-auto" src="../assets/logo-vert.svg" alt />
    </div>
    <div class="absolute top-8 right-8">
      <LangBar />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import LangBar from '@/components/LangBar.vue';

export default defineComponent({
  components: { LangBar },
});
</script>

<style>
.banner {
  background: linear-gradient(to bottom right, #008ecf, #0d4d80);
}
</style>
