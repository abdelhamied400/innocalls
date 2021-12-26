<template>
  <nav class="bg-primary-dark py-4">
    <div class="flex justify-between items-center max-w-7xl mx-auto">
      <div class="toggle"><SidebarToggle /></div>
      <div class="logo"><img class="w-2/3 mx-auto" src="@/assets/logo.svg" alt="innocalls"></div>
      <div class="actions flex space-x-4 items-center">
        <TenantBar />
        <LangBar />
      </div>
    </div>
  </nav>
</template>

<script setup>
import LangBar from './LangBar.vue';
import SidebarToggle from './SidebarToggle.vue';
import TenantBar from './TenantBar.vue';
</script>
