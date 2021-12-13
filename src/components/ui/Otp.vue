<template>
  <div class="otp">
    <a-form ref="otpForm">
      <a-form-item name="otp" class="flex">
        <a-input
          class="w-12 mx-2 py-3 text-xl text-center"
          v-for="idx in num || 6"
          :key="idx"
          v-model:value="otp[idx-1]"
          :focused="idx === 1"
          :maxlength="1"
          @keypress="onPress"
          @focus="e => e.target.select()"
        />
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import {
  defineComponent, ref, watch,
} from 'vue';

export default defineComponent({
  props: ['num'],
  setup(props, context) {
    const otp = ref([]);

    const onPress = (e) => {
      setTimeout(() => {
        if (e.target.nextElementSibling) {
          e.target.nextElementSibling.focus();
        }
      }, 5);
    };

    watch(otp.value, (val) => {
      context.emit('otpInput', Object.values({ ...val }).join(''));
    });

    return {
      onPress,
      otp,
    };
  },
});
</script>

<style scoped>
.otp .ant-form-item input {
  min-width: auto;
}

.otp .ant-form-rtl,
.otp .ant-row-rtl,
.otp .ant-col-rtl {
  direction: ltr;
}

.otp input::-webkit-outer-spin-button,
.otp input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.otp input[type='number'] {
  -moz-appearance: textfield;
}
</style>
