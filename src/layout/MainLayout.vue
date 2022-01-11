<template>
  <main class="bg-gray-200 min-h-screen">
    <div class="navbar sticky top-0 z-10">
      <Navbar />
    </div>
    <div class="flex mx-auto mt-8">
      <div class="page mx-24 flex-1 text-left">
        <Breadcrumbs />
        <router-view />
      </div>
    </div>
  </main>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Breadcrumbs from '@/components/ui/Breadcrumbs.vue';
</script>
