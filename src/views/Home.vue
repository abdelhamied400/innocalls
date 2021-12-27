<template>
  <div class="home">
    <div class="flex flex-col">
      <h3 class="text-3xl font-black text-gray-900 mb-3">PBX Details</h3>
      <div class="grid grid-cols-3 gap-4">
        <GraphCard class="col-span-2" title="Call Distribution">
          <LineChart :chartData="callDistribution" />
        </GraphCard>
        <GraphCard class="" title="Total Answered Calls / Day">
          <PieChart :chartData="totalCalls" />
        </GraphCard>
        <GraphCard class="col-span-2" title="Total Voicemails / Month">
          <LineChart :chartData="voiceMails" />
        </GraphCard>
        <GraphCard class="" title="Total Extensions">
          <PieChart :chartData="totalExtensions" />
        </GraphCard>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4 my-8">
      <div class="service-level-details">
        <h3 class="text-3xl font-black text-gray-900 mb-3">Service Level Details</h3>
        <div class="card">
          <StatsDetailsCard class="mt-12">
            <template #icon>
              <div class="bg-primary rounded-lg -mt-12 mb-4">
                <img
                  class="w-28 h-28 object-contain p-4"
                  src="@/assets/icons/call-duration.svg"
                  alt=""
                />
              </div>
            </template>
            <template #head>
              <p class="text-gray-400 text-lg font-light">Average call duration / month</p>
              <p class="font-bold text-2xl">0H 1M 17S</p>
            </template>
            <template #total>
              <p class="font-bold text-2xl text-primary">Average call duration</p>
              <p class="text-gray-400 text-lg font-light">Based on 4152 calls</p>
            </template>
          </StatsDetailsCard>
        </div>
      </div>
      <div class="billing-details">
        <h3 class="text-3xl font-black text-gray-900 mb-3">Billing Details</h3>
        <div class="card">
          <StatsDetailsCard class="mt-12">
            <template #icon>
              <div class="bg-primary rounded-lg -mt-12 mb-4">
                <img class="w-28 h-28 object-contain p-4" src="@/assets/icons/invoice.svg" alt="" />
              </div>
            </template>
            <template #head>
              <p class="text-gray-400 text-lg font-light">Average call duration / month</p>
              <p class="font-bold text-2xl">0H 1M 17S</p>
            </template>
            <template #total>
              <p class="font-bold text-2xl text-primary">Average call duration</p>
              <p class="text-gray-400 text-lg font-light">Based on 4152 calls</p>
            </template>
          </StatsDetailsCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { LineChart, PieChart } from 'vue-chart-3';
import { computed } from 'vue';
import { useStore } from 'vuex';
import GraphCard from '@/components/ui/GraphCard.vue';
import StatsDetailsCard from '@/components/ui/StatsDetailsCard.vue';

const store = useStore();
store.dispatch('fetchCallDistribution');
store.dispatch('fetchTotalCalls');
store.dispatch('fetchVoiceMails');
store.dispatch('fetchExtensions');
const callDistribution = computed(() => store.getters.callDistribution);
const totalCalls = computed(() => store.getters.totalCalls);
const voiceMails = computed(() => store.getters.voiceMails);
const totalExtensions = computed(() => store.getters.totalExtensions);
</script>
