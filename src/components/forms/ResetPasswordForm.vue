<template>
  <a-form ref="resetPasswordForm" :model="formState" :rules="rules">
    <h3 class="md:text-5xl text-3xl font-bold text-primary mb-6">
      {{ $t('resetPassword.title') }}
    </h3>
    <a-form-item :label="$t('resetPassword.form.password')" name="password">
      <a-input type="password" v-model:value="formState.password" />
    </a-form-item>
    <a-form-item
      :label="$t('resetPassword.form.password_confirmation')"
      name="password_confirmation"
    >
      <a-input type="password" v-model:value="formState.password_confirmation" />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" @click="onSubmit" :loading="state.loading">{{
        $t('resetPassword.form.reset')
      }}</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import {
  computed,
  defineComponent, reactive, ref, toRaw,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { notification } from 'ant-design-vue';
import errorHandler from '@/utils/errorHandler';

export default defineComponent({
  setup() {
    const i18n = useI18n();
    const store = useStore();
    const router = useRouter();
    const resetPasswordForm = ref();

    const formState = reactive({
      password: '',
      rePassword: '',
    });
    const state = reactive({
      loading: false,
    });

    const back = () => {
      router.push({ name: 'forgetPassword' });
    };

    const resetEmail = computed(() => store.state.user.resetEmail);
    const otp = computed(() => store.state.user.otp);
    if (!resetEmail.value || !otp.value) back();

    const confirmPasswordRules = async (rule, value) => {
      if (value !== formState.password) {
        return Promise.reject(new Error(i18n.t('resetPassword.form.error.passwordNoMatch')));
      }

      return Promise.resolve();
    };
    const passwordRules = async (rule, value) => {
      if (!value || value === '') {
        return Promise.reject(
          new Error(i18n.t('@shared.error.required', { key: i18n.t('resetPassword.form.password') })),
        );
      }
      const rules = [
        { message: i18n.t('resetPassword.form.error.passwordHint1'), regex: /[a-z]+/ },
        { message: i18n.t('resetPassword.form.error.passwordHint2'), regex: /[A-Z]+/ },
        { message: i18n.t('resetPassword.form.error.passwordHint3'), regex: /.{8,}/ },
        { message: i18n.t('resetPassword.form.error.passwordHint4'), regex: /[0-9]+/ },
        {
          message: i18n.t('resetPassword.form.error.passwordHint5'),
          regex: /(?=.*[!@#$%^&*()_+=/<>,.?'-])/,
        },
      ];

      const errors = [];
      rules.forEach(({ regex, message }) => {
        if (!regex.test(value)) {
          errors.push(message);
        }
      });

      if (errors.length > 0) {
        return Promise.reject(new Error(errors.join('\r\n')));
      }

      return Promise.resolve();
    };

    const rules = reactive({
      password: [
        {
          required: true,
          validator: passwordRules,
          trigger: 'change',
        },
      ],
      password_confirmation: [
        {
          required: true,
          validator: confirmPasswordRules,
          trigger: 'change',
        },
      ],
    });

    const onSubmit = async () => {
      try {
        await resetPasswordForm.value.validate();
        const data = toRaw(formState);
        state.loading = true;
        await store.dispatch('resetPassword', data.password);
        state.loading = false;
        router.push({ name: 'login' });
      } catch (error) {
        errorHandler.handle({
          i18n,
          notification,
          error,
          key: 'resetPassword',
        });
        state.loading = false;
      }
    };

    return {
      resetPasswordForm,
      formState,
      rules,
      state,
      onSubmit,
    };
  },
});
</script>
