<template>
  <a-breadcrumb :routes="crumbs">
      <template #itemRender="{ route, routes, paths }">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          {{ route.breadcrumbName }}
        </span>
        <router-link v-else :to="`/${paths.join('/')}`">
          {{ route.breadcrumbName }}
        </router-link>
      </template>
    </a-breadcrumb>
    <br />
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

  const breadcrumbs = [
    {
      path: '/',
      breadcrumbName: 'Home',
    },
    ...parsedCrumbs,
  ];

  return breadcrumbs;
});

</script>
