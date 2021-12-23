<template>
  <div class="home">
    <div class="flex flex-col">
      <h3>PBX Details</h3>
      <div class="flex flex-row space-x-8">
        <GraphCard class="w-1/2" title="Call Distribution">
          <LineChart :chartData="testData" />
        </GraphCard>
        <GraphCard class="w-1/2" title="Total Answered Calls / Day">
          <LineChart :chartData="testData" />
        </GraphCard>
        <GraphCard class="w-1/2" title="Total Extensions">
          <LineChart :chartData="testData" />
        </GraphCard>
        <GraphCard class="w-1/2" title="Total Voicemails / Month">
          <LineChart :chartData="testData" />
        </GraphCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { LineChart } from 'vue-chart-3';
import GraphCard from '@/components/ui/GraphCard.vue';

const testData = {
  labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
  datasets: [
    {
      label: 'ongo',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
    {
      label: 'out',
      data: [25, 49, 10, 11, 56, 95, 20],
      fill: true,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

</script>
