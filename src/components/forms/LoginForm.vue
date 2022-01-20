<template>
  <a-form ref="loginForm" :model="formState" :rules="rules">
    <h3 class="md:text-5xl text-3xl font-bold text-primary mb-6">{{ $t('login.welcome') }}</h3>
    <a-form-item :label="$t('login.form.username')" name="username">
      <a-input v-model:value="formState.username" />
    </a-form-item>
    <a-form-item :label="$t('login.form.password')" name="password">
      <a-input type="password" v-model:value="formState.password" />
    </a-form-item>
    <a-form-item>
      <a-button block type="primary" @click="onSubmit" :loading="state.loading">{{
        $t('login.form.login')
      }}</a-button>
    </a-form-item>
    <a-form-item class="flex">
      <router-link to="/forget-password">
        {{ $t('login.form.forgetPassword') }} </router-link
      >-
      <router-link to="/signup">
        {{ $t('login.form.createAccount') }} </router-link
      >
    </a-form-item>
  </a-form>
</template>

<script>
import {
  defineComponent, reactive, ref, toRaw,
} from 'vue';
import { useStore } from 'vuex';
import { notification } from 'ant-design-vue';
import { useI18n } from 'vue-i18n';
import errorHandler from '@/utils/errorHandler';

export default defineComponent({
  setup() {
    const i18n = useI18n();
    const store = useStore();
    const loginForm = ref();
    const formState = reactive({
      username: '',
      password: '',
    });
    const state = reactive({
      loading: false,
    });
    const rules = reactive({
      username: [
        {
          required: true,
          message: () => i18n.t('@shared.error.required', { key: i18n.t('login.form.username') }),
          trigger: 'blur',
        },
      ],
      password: [
        {
          required: true,
          message: () => i18n.t('@shared.error.requiredF', { key: i18n.t('login.form.password') }),
          trigger: 'blur',
        },
      ],
    });
    const onSubmit = async () => {
      try {
        await loginForm.value.validate();
        const credentials = toRaw(formState);
        state.loading = true;
        await store.dispatch('login', credentials);
        state.loading = false;
        window.location.href = '/';
      } catch (error) {
        errorHandler.handle({
          i18n,
          notification,
          error,
          key: 'login',
        });
        state.loading = false;
      }
    };
    const resetForm = () => {
      loginForm.value.resetFields();
    };
    return {
      loginForm,
      formState,
      state,
      rules,
      onSubmit,
      resetForm,
    };
  },
});
</script>
