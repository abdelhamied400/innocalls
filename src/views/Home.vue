<template>
  <div class="home flex flex-col gap-8">
    <div class="charts">
      <h1 class="text-primary font-bold text-3xl my-2">Charts</h1>
      <div class="grid grid-cols-4 gap-4">
        <Card>
          <BarChart :chartData="testData" />
        </Card>
        <Card>
          <DoughnutChart :chartData="testData" />
        </Card>
        <Card>
          <BarChart :chartData="testData" />
        </Card>
        <Card>
          <DoughnutChart :chartData="testData" />
        </Card>
      </div>
    </div>
    <div class="details">
      <h1 class="text-primary font-bold text-3xl my-2">Service Level Details</h1>
      <div class="grid grid-cols-4 gap-4">
        <DetailsCard
          :icon="callTimeIcon"
          title="Average call inbound"
          value="6 Hrs."
          sub="Based on 333 calls"
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
    </div>
  </div>
</template>

<script setup>
import { BarChart, DoughnutChart } from 'vue-chart-3';
import Card from '@/components/ui/Card.vue';
import DetailsCard from '@/components/ui/DetailsCard.vue';
import callTimeIcon from '@/assets/icons/talk-time-primary.svg';
import ongoingIcon from '@/assets/icons/ongoing-primary.svg';

const testData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'Score Variance',
      data: [300, 50, -100],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
      hoverOffset: 0,
    },
  ],
};
</script>
