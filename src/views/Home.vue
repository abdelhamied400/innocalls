<template>
  <div class="home flex flex-col gap-8 max-w-8xl mx-auto">
    <section class="charts">
      <h1 class="text-primary-900 font-medium text-xl text-justify mb-4">
        {{ $t('home.charts') }}
      </h1>
      <div class="grid grid-cols-4 gap-4">
        <div class="flex flex-col">
          <h1 class="text-gray-900 text-xl text-justify">Score Variance</h1>
          <Card :loading="!callDistribution" class="flex-1">
            <BarChart :chartData="callDistribution" />
          </Card>
        </div>
        <div class="flex flex-col">
          <h1 class="text-gray-900 text-xl text-justify">Total Score</h1>
          <Card :loading="!totalCalls" class="flex-1">
            <DoughnutChart :chartData="totalCalls" />
          </Card>
        </div>
        <div class="flex flex-col">
          <h1 class="text-gray-900 text-xl text-justify">Score Variance</h1>
          <Card :loading="!voiceMails" class="flex-1">
            <BarChart :chartData="voiceMails" />
          </Card>
        </div>
        <div class="flex flex-col">
          <h1 class="text-gray-900 text-xl text-justify">Total Number of Surveys</h1>
          <Card :loading="!totalExtensions" class="flex-1">
            <DoughnutChart :chartData="totalExtensions" />
          </Card>
        </div>
        <div></div>
      </div>
    </section>
    <section class="details">
      <h1 class="text-primary-900 font-medium text-xl text-justify mb-4">
        {{ $t('home.serviceLevelDetails') }}
      </h1>
      <div class="grid grid-cols-4 gap-4">
        <DetailsCard
          :icon="callTimeIcon"
          title="Average call inbound"
          :value="averageCallDuration?.average"
          :sub="`Based on ${averageCallDuration?.calls} calls`"
        />
        <DetailsCard
          :icon="callTimeIcon"
          title="Average call inbound"
          value="6 Hrs."
          sub="Based on 333 calls"
        />
        <DetailsCard
          :icon="ongoingIcon"
          title="Average call inbound"
          value="300 Min."
          sub="Based on 400 calls"
        />
        <DetailsCard
          :icon="ongoingIcon"
          title="Average call inbound"
          value="120 Min."
          sub="Based on 400 calls"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { BarChart, DoughnutChart } from 'vue-chart-3';
import { useStore } from 'vuex';
import { computed, watchEffect } from 'vue';
import Card from '@/components/ui/Card.vue';
import DetailsCard from '@/components/ui/DetailsCard.vue';
import callTimeIcon from '@/assets/icons/talk-time-primary.svg';
import ongoingIcon from '@/assets/icons/ongoing-primary.svg';

const store = useStore();
const currentTenant = computed(() => store.getters.tenant);

watchEffect(() => {
  if (currentTenant.value) {
    store.dispatch('fetchCallDistribution');
    store.dispatch('fetchTotalCalls');
    store.dispatch('fetchVoiceMails');
    store.dispatch('fetchExtensions');
    store.dispatch('fetchAverageCallDuration');
  }
});

const callDistribution = computed(() => store.getters.callDistribution);
const totalCalls = computed(() => store.getters.totalCalls);
const voiceMails = computed(() => store.getters.voiceMails);
const totalExtensions = computed(() => store.getters.totalExtensions);
const averageCallDuration = computed(() => store.getters.averageCallDuration);
</script>
