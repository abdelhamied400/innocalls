<template>
  <a-form ref="signupForm" :model="formState" :rules="rules">
    <h3 class="md:text-3xl text-xl font-bold text-primary mb-6">
      {{ $t('signup.title') }}
    </h3>

    <div class="max-w-sm mx-auto">

    <a-form-item :label="$t('signup.form.name')" name="name">
      <a-input v-model:value="formState.name" />
    </a-form-item>
    <a-form-item :label="$t('signup.form.email')" name="email">
      <a-input v-model:value="formState.email" />
    </a-form-item>
    <a-form-item :label="$t('signup.form.password')" name="password">
      <a-input type="password" v-model:value="formState.password" />
    </a-form-item>
    <a-form-item :label="$t('signup.form.confirmPassword')" name="confirmPassword">
      <a-input type="password" v-model:value="formState.confirmPassword" />
    </a-form-item>
    <a-form-item>
      <a-button block type="primary" @click="onSubmit" :loading="state.loading">{{
        $t('signup.form.signup')
      }}</a-button>
    </a-form-item>
    <a-form-item class="flex">
      <router-link to="/login"> {{ $t('signup.form.alreadyHaveAccount') }} </router-link>
    </a-form-item>
    </div>
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

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const store = useStore();
    const router = useRouter();
    const signupForm = ref();
    const formState = reactive({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    const state = reactive({
      loading: false,
    });

    // custom rules
    const confirmPasswordRules = async (rule, value) => {
      if (value !== formState.pass) {
        return Promise.reject(new Error(t('signup.form.error.passwordNoMatch')));
      }
      return Promise.resolve();
    };

    const rules = reactive({
      name: [
        {
          required: true,
          message: () => t('@shared.error.required', { key: t('signup.form.name') }),
          trigger: 'blur',
        },
      ],
      email: [
        {
          required: true,
          message: () => t('@shared.error.required', { key: t('signup.form.email') }),
          trigger: 'blur',
        },
      ],
      password: [
        {
          required: true,
          message: () => t('@shared.error.required', { key: t('signup.form.password') }),
          trigger: 'blur',
        },
      ],
      confirmPassword: [{ validator: confirmPasswordRules, trigger: 'blur' }],
    });

    const onSubmit = async () => {
      try {
        await signupForm.value.validate();
        const credentials = toRaw(formState);
        state.loading = true;
        await store.dispatch('signup', credentials);
        state.loading = false;
        router.push({ name: 'home' });
      } catch (error) {
        if (error.errorFields) {
          error.errorFields.forEach((field, idx) => {
            setTimeout(() => {
              notification.error({
                message: t(`signup.form.${field.name}`),
                description: field.errors.join(', '),
              });
            }, idx * 100);
          });
        } else {
          notification.error({
            message: error.response?.data.error,
            description: error.response?.data.message,
          });
        }
        state.loading = false;
      }
    };
    const resetForm = () => {
      signupForm.value.resetFields();
    };
    return {
      signupForm,
      formState,
      state,
      rules,
      onSubmit,
      resetForm,
    };
  },
});
</script>
