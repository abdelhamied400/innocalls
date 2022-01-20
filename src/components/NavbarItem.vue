<template>
  <div class="navItem flex" :class="props.active ? 'bg-primary text-white' : 'border-r'">
    <router-link
      v-if="!props.children || props.children.length === 0"
      class="px-4 text-xl font-medium capitalize flex space-x-2 items-center text-black"
      :to="props.to"
    >
      {{ props.name }}
    </router-link>

    <a-dropdown v-else>
      <a
        class="px-4 text-xl font-medium capitalize flex space-x-2 items-center"
        :class="props.active ? 'text-white hover:text-white': 'text-primary'"
        @click.prevent
      >
        <span :class="props.active ? 'text-white': 'text-black'">
          {{ props.name }}
        </span>
        <CaretDownOutlined />
      </a>
      <template #overlay>
        <a-menu>
          <router-link v-for="(child, idx) in children" :key="idx" :to="child.to">
            <a-menu-item>
              <span class="text-base">
                {{ child.name }}
              </span>
            </a-menu-item>
          </router-link>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { CaretDownOutlined } from '@ant-design/icons-vue';

const props = defineProps({
  name: String,
  to: String,
  children: Array || null,
  active: Boolean,
});
</script>
