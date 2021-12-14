<template>
  <a-form ref="forgetPasswordForm" :model="formState" :rules="rules">
    <h3 class="md:text-5xl text-3xl font-bold text-primary mb-6">
      {{ $t('forgetPassword.title') }}
    </h3>
    <a-form-item :label="$t('forgetPassword.form.email')" name="email">
      <a-input v-model:value="formState.email" />
    </a-form-item>
    <a-form-item>
      <a-button block type="primary" @click="onSubmit" :loading="state.loading">{{
        $t('forgetPassword.form.send')
      }}</a-button>
    </a-form-item>
    <a-form-item class="flex">
      <router-link to="/login"> {{ $t('forgetPassword.form.login') }} </router-link>-
      <router-link to="/signup"> {{ $t('forgetPassword.form.createAccount') }} </router-link>
    </a-form-item>
  </a-form>
</template>

<script>
import {
  defineComponent, reactive, ref, toRaw,
} from 'vue';
import { useStore } from 'vuex';
import { notification } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import errorHandler from '@/utils/errorHandler';

export default defineComponent({
  setup() {
    const i18n = useI18n();
    const store = useStore();
    const router = useRouter();
    const forgetPasswordForm = ref();
    const formState = reactive({
      email: '',
    });
    const state = reactive({
      loading: false,
    });
    const emailRules = async (rule, value) => {
      if (!value || value === '') {
        return Promise.reject(
          new Error(i18n.t('@shared.error.required', { key: i18n.t('forgetPassword.form.email') })),
        );
      }
      if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
        return Promise.reject(new Error(i18n.t('forgetPassword.form.error.emailNotValid')));
      }

      return Promise.resolve();
    };
    const rules = reactive({
      email: [
        {
          required: true,
          validator: emailRules,
          trigger: 'change',
        },
      ],
    });
    const onSubmit = async () => {
      try {
        await forgetPasswordForm.value.validate();
        const data = toRaw(formState);
        state.loading = true;
        await store.dispatch('forgetPassword', data);
        state.loading = false;
        router.push({ name: 'otpPasswordReset' });
      } catch (error) {
        errorHandler.handle({
          i18n,
          notification,
          error,
          key: 'forgetPassword',
        });
        state.loading = false;
      }
    };
    const resetForm = () => {
      forgetPasswordForm.value.resetFields();
    };
    return {
      forgetPasswordForm,
      formState,
      state,
      rules,
      onSubmit,
      resetForm,
    };
  },
});
</script>
