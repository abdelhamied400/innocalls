<template>
  <div class="circular-countdown flex">
    <div class="relative w-64 h-64 mx-auto">
      <svg class="absolute h-full -m-6">
        <path
          class="stroke-current text-gray-200"
          fill="none"
          stroke-width="10"
          d="M 148.42928342064448 60.013707435924786 A 90 90 0 1 0 150 60"
        />
        <path
          ref="arc"
          class="stroke-current"
          :class="stateTextColor"
          fill="none"
          stroke-width="10"
          stroke-linecap="round"
          d="M 148.42928342064448 60.013707435924786 A 90 90 0 1 0 150 60"
        />
      </svg>
      <div class="counter w-full h-full flex justify-center items-center">
        <p class="text-4xl font-bold">
          {{ ('0' + minutes).slice(-2) }} : {{ ('0' + seconds).slice(-2) }}
        </p>
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
  setup(props, { emit }) {
    const arc = ref();
    const minutes = ref(Math.floor(props.time / 60));
    const seconds = ref(props.time % 60);
    const currTime = ref(props.time);
    const deg = ref(359);
    const stateTextColor = ref('text-state-success');

    onMounted(() => {
      const interval = setInterval(() => {
        seconds.value -= 1;
        currTime.value -= 1;
        deg.value = (currTime.value / props.time) * 359;
        if (arc.value) arc.value.setAttribute('d', circle(150, 150, 90, 0, deg.value));
        if (currTime.value <= 0) {
          clearTimeout(interval);
          emit('end');
          return;
        }

        if (stateTextColor.value !== 'text-state-warning' && currTime.value < 60) {
          stateTextColor.value = 'text-state-warning';
        }
        if (stateTextColor.value !== 'text-state-error' && currTime.value < 10) {
          stateTextColor.value = 'text-state-error';
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
      stateTextColor,
    };
  },
});
</script>

<style scoped>
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
p{
  margin: 0
}
</style>
