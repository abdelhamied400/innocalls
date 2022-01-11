<template>
  <div class="lang-bar h-full">
    <a-dropdown class=" h-full flex">
      <a
        class="px-4 text-base capitalize flex space-x-2 items-center"
        @click.prevent
      >
        <span>{{ lang }}</span>
        <CaretDownOutlined />
      </a>
      <template #overlay>
        <a-menu>
          <a-menu-item
            v-for="(locale, idx) in locales"
            :key="idx"
            @click="() => onLangChange(locale.value)"
          >
            {{ locale.label }}
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { CaretDownOutlined } from '@ant-design/icons-vue';
import { useI18n } from 'vue-i18n';
import locales from '@/locales';
import { changeLanguage } from '@/i18n';

const { locale } = useI18n();
const onLangChange = (value) => {
  locale.value = value;
  changeLanguage(value);
};

const lang = ref(localStorage.getItem('lang'));
</script>
