<template>
  <div class="lang-bar">
    <a-select
      :bordered="false"
      class="bg-white rounded-md"
      ref="select"
      v-model:value="lang"
      :options="locales"
      @change="onLangChange"
    >
      <template v-slot:suffixIcon>
        <CaretDownOutlined />
      </template>
    </a-select>
  </div>
</template>

<script >
import { defineComponent, ref } from 'vue';
import { CaretDownOutlined } from '@ant-design/icons-vue';
import { useI18n } from 'vue-i18n';
import locales from '@/locales';
import { changeLanguage } from '@/i18n';

export default defineComponent({
  components: { CaretDownOutlined },
  setup() {
    const { locale } = useI18n();
    const onLangChange = (value) => {
      locale.value = value;
      changeLanguage(value);
    };
    return {
      lang: ref(localStorage.getItem('lang')),
      locales,
      onLangChange,
    };
  },
});
</script>
