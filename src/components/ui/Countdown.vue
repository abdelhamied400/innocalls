<template>
  <div class="circular-countdown flex">
    <div class="relative w-80 h-80 mx-auto">
      <svg class="absolute w-full h-full">
        <path
          class="stroke-current text-gray-300"
          fill="none"
          stroke-width="29"
          d="M 148.25475935627165 50.01523048436087 A 100 100 0 1 0 150 50"
        />
        <path
          ref="arc"
          class="stroke-current text-primary"
          fill="none"
          stroke-width="30"
          d="M 148.25475935627165 50.01523048436087 A 100 100 0 1 0 150 50"
        />
      </svg>
      <div class="counter w-full h-full flex">
        <p class="text-4xl font-bold">{{ minutes }} : {{ seconds }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { circle } from '@/utils/circle';

export default defineComponent({
  props: {
    time: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const arc = ref();
    const minutes = ref(Math.floor(props.time / 60));
    const seconds = ref(props.time % 60);
    const currTime = ref(props.time);
    const deg = ref(359);

    onMounted(() => {
      const interval = setInterval(() => {
        seconds.value -= 1;
        currTime.value -= 1;
        deg.value = (currTime.value / props.time) * 359;
        if (arc.value) arc.value.setAttribute('d', circle(150, 150, 100, 0, deg.value));
        if (currTime.value <= 0) {
          clearTimeout(interval);
          return;
        }
        if (seconds.value < 0) {
          seconds.value = 59;
          minutes.value -= 1;
        }
      }, 1000);
    });

    return {
      minutes,
      seconds,
      arc,
    };
  },
});
</script>

<style>
.stat-circle circle.bg {
  fill: none;
  stroke: #f1f1f1;
  stroke-width: 2;
}
.stat-circle circle.progress {
  fill: none;
  stroke: #2ecc71;
  stroke-width: 2;
  stroke-dasharray: 51 51;
  stroke-dashoffset: -51;
  stroke-linecap: round;
}
.stat-circle text {
  font-size: 3px;
  text-anchor: middle;
  fill: #555;
}
.stat-circle .counter {
  height: 300px;
}
</style>
