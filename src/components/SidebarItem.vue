<template>
  <router-link :to="props.to">
    <!-- no children item -->
    <a-menu-item :class="active && 'ant-menu-item-selected'" :key="props.name">
      <template #icon>
        <component :is="props.icon" />
      </template>
      {{ props.name }}
    </a-menu-item>
  </router-link>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const active = ref(false);
const props = defineProps({
  to: String,
  icon: Object,
  name: String,
});

if (`${router.currentRoute.value.path}` === props.to) {
  active.value = true;
}

</script>

<style></style>
