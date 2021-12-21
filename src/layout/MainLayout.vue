<template>
  <main>
    <div class="navbar">
      <Navbar />
    </div>
    <div class="flex max-w-7xl mx-auto mt-8">
      <div class="sidebar max-w-full">
        <Sidebar />
      </div>
      <div class="page flex-1">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
</script>
