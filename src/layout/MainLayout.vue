<template>
  <main class="bg-gray-200 min-h-screen">
    <div class="navbar sticky top-0 z-10">
      <Navbar />
    </div>
      <div class="bg-white px-8 py-6">
        <div class="max-w-8xl mx-auto">
          <h1 class="text-primary-900 font-medium text-xl text-justify mb-4">
            {{ $t('stats.statistics') }}
          </h1>
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-4 bg-white">
            <DetailsCard
              stats="state-success"
              :icon="onlineIcon"
              :title="$t('stats.onlineExtensions')"
              value="24"
            />
            <DetailsCard
              stats="state-info"
              :icon="breakIcon"
              :title="$t('stats.onBreakExtensions')"
              value="3"
            />
            <DetailsCard
              stats="state-error"
              :icon="busyIcon"
              :title="$t('stats.busyExtensions')"
              value="1"
            />
            <DetailsCard
              stats="state-warning"
              :icon="waitIcon"
              :title="$t('stats.waitingCalls')"
              value="15"
            />
          </div>
        </div>
      </div>

    <div class="flex mx-auto mt-8">
      <div class="page px-24 max-w-full flex-1 text-justify">
        <!-- <Breadcrumbs /> -->
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
// import Breadcrumbs from '@/components/ui/Breadcrumbs.vue';
import DetailsCard from '@/components/ui/DetailsCard.vue';
import onlineIcon from '@/assets/icons/online.svg';
import breakIcon from '@/assets/icons/break.svg';
import busyIcon from '@/assets/icons/busy.svg';
import waitIcon from '@/assets/icons/wait.svg';
</script>
