<template>
  <div class="tenantBar capitalize flex">
    <a-dropdown class="top-8" placement="bottomCenter" :trigger="['click']">
      <div class="cursor-pointer flex items-center space-x-2">
        <span>{{ user?.tenantList?.[0]?.name || user.name }}</span>
        <img class="rounded-full" src="https://i.pravatar.cc/50" alt="">
      </div>
      <template #overlay>
        <a-menu class="tenantMenu text-center capitalize" @click="onTenantChange">
          <div class="tenants" v-if="user?.tenantList && user?.tenantList?.length !== 0">
            <p class="px-2 text-gray-300 cursor-default">tenants</p>
            <div
              :class="currentTenant.id===tenant.id && 'bg-blue-200'"
              v-for="(tenant, idx) in user.tenantList"
              :key="tenant.id"
            >
              <a-menu-item class="px-4" :key="idx">{{ tenant.name }}</a-menu-item>
            </div>
          </div>
          <a-menu-item v-else class="px-4" disabled>
            <p>no tenants found</p>
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item class="px-4">
            <router-link to="/profile">profile</router-link>
          </a-menu-item>
          <a-menu-item class="px-4 text-state-error">
            <p>logout</p>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const user = computed(() => store.getters.user);
const currentTenant = computed(() => store.getters.tenant);

const onTenantChange = ({ key }) => {
  store.dispatch('changeTenant', user.value.tenantList[key]);
};
</script>

<style scoped>
.tenantMenu {
  min-width: 150px;
}
</style>
