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
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const router = useRouter();
const { t } = useI18n();
const crumbs = computed(() => {
  const { path } = router.currentRoute.value;

  // split each route
  const routes = path.split('/').filter((route) => route !== '');

  // parsed crumbs
  const parsedCrumbs = routes.map((route) => ({
    path: `/${route}`,
    breadcrumbName: t(`navbar.${route.replace(/-./g, (x) => x[1].toUpperCase())}`),
  }));

  return [
    {
      path: '/',
      breadcrumbName: t('navbar.home'),
    },
    ...parsedCrumbs,
  ];
});

</script>
