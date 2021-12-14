<template>
  <h3 class="md:text-5xl text-3xl font-bold text-primary mb-6">
    {{ $t('otpPasswordReset.title') }}
  </h3>
  <div style="direction: ltr">
    <Countdown :time="180" @end="back" />
    <Otp :num="digits" @otpInput="value => otp = value" />
    <a-button type="primary" class="capitalize" @click="onSubmit">{{
      $t('otpPasswordReset.verify')
    }}</a-button>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { notification } from 'ant-design-vue';
import { useI18n } from 'vue-i18n';
import Countdown from '../ui/Countdown.vue';
import Otp from '../ui/Otp.vue';
import errorHandler from '@/utils/errorHandler';

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    const i18n = useI18n();
    const digits = 6;

    const otp = ref();
    const resetEmail = computed(() => store.state.user.resetEmail);

    const back = () => {
      router.push({ name: 'forgetPassword' });
    };

    if (!resetEmail.value) back();

    const onSubmit = async () => {
      if (!otp.value || otp.value.length < digits) {
        notification.error({
          message: i18n.t('@shared.error.requiredF', { key: i18n.t('otpPasswordReset.form.otp') }),
        });
        return;
      }
      try {
        await store.dispatch('otpCheck', otp.value);
        router.push({ name: 'passwordReset' });
      } catch (error) {
        errorHandler.handle({
          i18n,
          notification,
          error,
          key: 'otpCheck',
        });
      }
    };

    return {
      otp,
      digits,
      back,
      onSubmit,
    };
  },
  components: { Countdown, Otp },
});
</script>
