<template>
  <main class="bg-gray-200 min-h-screen">
    <div class="navbar sticky top-0 z-10">
      <Navbar />
    </div>

    <div class="bg-white px-24 py-6">
      <h1 class="text-primary font-bold text-3xl text-justify mb-4">Statistics</h1>
      <div class="grid grid-cols-4 gap-4 bg-white">
        <DetailsCard stats="success" :icon="onlineIcon" title="Online Extentions" value="24" />
        <DetailsCard stats="info" :icon="breakIcon" title="On Break Extentions" value="3" />
        <DetailsCard stats="error" :icon="busyIcon" title="Busy Extentions" value="1" />
        <DetailsCard stats="warning" :icon="waitIcon" title="Waiting Calls" value="15" />
      </div>
    </div>

    <div class="flex mx-auto mt-8">
      <div class="page mx-24 flex-1 text-left">
        <Breadcrumbs />
        <router-view />
      </div>
    </div>
  </main>
  <footer class="bg-gray-200 py-4">
    <a href="#" class="text-primary">©{{ new Date().getFullYear() }} Innocalls. </a
    ><span>All Rights Reserved.</span>
  </footer>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Breadcrumbs from '@/components/ui/Breadcrumbs.vue';
import DetailsCard from '@/components/ui/DetailsCard.vue';
import onlineIcon from '@/assets/icons/online.svg';
import breakIcon from '@/assets/icons/break.svg';
import busyIcon from '@/assets/icons/busy.svg';
import waitIcon from '@/assets/icons/wait.svg';
</script>
