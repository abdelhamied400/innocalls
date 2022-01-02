<template>
  <div class="home">
    <div class="flex flex-col">
      <h3 class="text-3xl font-black text-gray-900 mb-3">PBX Details</h3>
      <div class="grid grid-cols-3 gap-4">
        <GraphCard class="col-span-2" title="Call Distribution">
          <LineChart :chartData="callDistribution" v-if="callDistribution" />
          <a-spin class="m-auto" v-else />
        </GraphCard>
        <GraphCard class="" title="Total Answered Calls / Day">
          <PieChart :chartData="totalCalls" v-if="totalCalls" />
          <a-spin class="m-auto" v-else />
        </GraphCard>
        <GraphCard class="col-span-2" title="Total Voicemails / Month">
          <LineChart :chartData="voiceMails" v-if="voiceMails" />
          <a-spin class="m-auto" v-else />
        </GraphCard>
        <GraphCard class="" title="Total Extensions">
          <PieChart :chartData="totalExtensions" v-if="totalExtensions" />
          <a-spin class="m-auto" v-else />
        </GraphCard>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4 my-8">
      <div class="service-level-details">
        <h3 class="text-3xl font-black text-gray-900 mb-3">Service Level Details</h3>
        <Card class="mt-12">
          <ServiceLevelDetailsCard :duration="averageCallDuration" v-if="averageCallDuration" />
          <a-spin class="m-auto" v-else  />
        </Card>
      </div>
      <div class="billing-details">
        <h3 class="text-3xl font-black text-gray-900 mb-3">Billing Details</h3>
        <Card class="mt-12 bg-primary-dark text-white">
          <BillingDetailsCard v-if="true" />
          <a-spin class="m-auto" v-else  />
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { LineChart, PieChart } from 'vue-chart-3';
import { computed } from 'vue';
import { useStore } from 'vuex';
import GraphCard from '@/components/ui/GraphCard.vue';
import ServiceLevelDetailsCard from '@/components/ServiceLevelDetailsCard.vue';
import BillingDetailsCard from '@/components/BillingDetailsCard.vue';
import Card from '@/components/ui/Card.vue';

const store = useStore();
store.dispatch('fetchCallDistribution');
store.dispatch('fetchTotalCalls');
store.dispatch('fetchVoiceMails');
store.dispatch('fetchExtensions');
store.dispatch('fetchAverageCallDuration');
const averageCallDuration = computed(() => store.getters.averageCallDuration);
const callDistribution = computed(() => store.getters.callDistribution);
const totalCalls = computed(() => store.getters.totalCalls);
const voiceMails = computed(() => store.getters.voiceMails);
const totalExtensions = computed(() => store.getters.totalExtensions);
</script>
