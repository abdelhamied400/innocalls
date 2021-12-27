<template>
  <a-breadcrumb :routes="crumbs" class="bg-white px-4 py-2 rounded-lg mb-6">
    <template #itemRender="{ route, routes, paths }">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        {{ route.breadcrumbName }}
      </span>
      <router-link v-else :to="`/${paths.join('/')}`">
        {{ route.breadcrumbName }}
      </router-link>
    </template>
  </a-breadcrumb>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const crumbs = computed(() => {
  const { path } = router.currentRoute.value;

  // split each route
  const routes = path.split('/');
  routes.shift();

  // parsed crumbs
  const parsedCrumbs = routes.map((route) => ({
    path: `/${route}`,
    breadcrumbName: route,
  }));

  return [
    {
      path: '/',
      breadcrumbName: 'Home',
    },
    ...parsedCrumbs,
  ];
});

</script>
