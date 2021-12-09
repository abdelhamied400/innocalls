<template>
  <div class="otp">
    <a-form ref="otpForm" :model="otp">
      <a-form-item name="otp" class="flex">
        <a-input
          class="w-12 mx-2 py-3 text-xl text-center"
          v-for="idx in num || 6"
          :key="idx"
          v-model:value="otp[idx - 1]"
          :maxlength="1"
        />
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: ['num'],
  setup() {
    const otp = ref([]);
    return {
      otp,
    };
  },
});
</script>

<style scoped>
.otp .ant-form-item input {
  min-width: auto;
}
</style>
