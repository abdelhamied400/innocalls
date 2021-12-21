<template>
  <svg
    class="ham hamRotate ham"
    :class="sidebarOpen ? 'active' : ''"
    viewBox="20 20 60 60"
    width="40"
    @click="toggle"
  >
    <path
      class="line top"
      d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
    />
    <path class="line middle" d="m 70,50 h -40" />
    <path
      class="line bottom"
      d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
    />
  </svg>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

//
// exports
const sidebarOpen = computed(() => store.getters.sidebarOpen);

const toggle = () => {
  store.dispatch('toggleSidebarOpen');
};
</script>

<style scoped>
.ham {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.hamRotate.active {
  transform: rotate(45deg);
}
.line {
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: white;
  stroke-width: 5.5;
  stroke-linecap: round;
}
.ham .top {
  stroke-dasharray: 40 121;
}
.ham .bottom {
  stroke-dasharray: 40 121;
}
.ham.active .top {
  stroke-dashoffset: -68px;
}
.ham.active .bottom {
  stroke-dashoffset: -68px;
}
</style>
