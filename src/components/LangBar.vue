<template>
  <a-dropdown class="top-8" placement="bottomCenter" :trigger="['click']">
    <div class="cursor-pointer flex items-center gap-2">
      <img class="w-8 h-8 rounded-lg" :src="`/media/flags/${currentLocale.slug}.svg`" alt="" />
      <span>{{ currentLocale.label }}</span>
    </div>
    <template #overlay>
      <a-menu class="langsMenu text-center capitalize">
        <a-menu-item
          v-for="locale in locales"
          :key="locale.value"
          @click="onLangChange(locale.value)"
        >
          <div class="flex items-center gap-2">
            <img class="w-8 h-8 rounded-lg" :src="`/media/flags/${locale.value}.svg`" alt="" />
            <p>{{ locale.label }}</p>
          </div>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import locales from '@/locales';
import { changeLanguage } from '@/i18n';

const { locale } = useI18n();
const onLangChange = (value) => {
  locale.value = value;
  changeLanguage(value);
};

const currentLocale = computed(() => locales.filter((loc) => loc.value === locale.value)[0]);
</script>
