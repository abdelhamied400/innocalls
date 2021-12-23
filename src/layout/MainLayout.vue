<template>
  <main>
    <div class="navbar">
      <Navbar />
    </div>
    <div class="flex max-w-7xl mx-auto mt-8">
      <div class="sidebar max-w-full">
        <Sidebar />
      </div>
      <div class="page mx-8 flex-1">
        <Breadcrumbs />
        <router-view />
      </div>
    </div>
  </main>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import Breadcrumbs from '@/components/ui/Breadcrumbs.vue';
</script>
