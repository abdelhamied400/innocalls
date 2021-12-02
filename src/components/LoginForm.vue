<template>
  <a-form ref="loginForm" :model="formState" :rules="rules">
    <h3 class="md:text-5xl text-3xl font-bold text-primary mb-6">Welcome</h3>
    <a-form-item label="username" name="username">
      <a-input v-model:value="formState.username" />
    </a-form-item>
    <a-form-item label="password" name="password">
      <a-input type="password" v-model:value="formState.password" />
    </a-form-item>
    <a-form-item>
      <a-button block type="primary" @click="onSubmit" :loading="state.loading">Login</a-button>
    </a-form-item>
    <a-form-item class="flex">
      <a href>forget password?</a> -
      <a href>create account?</a>
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

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const loginForm = ref();
    const formState = reactive({
      username: '',
      password: '',
    });
    const state = reactive({
      loading: false,
    });
    const rules = {
      username: [
        { required: true, message: 'Please enter username', trigger: 'blur' },
      ],
      password: [
        { required: true, message: 'Please enter password', trigger: 'blur' },
      ],
    };
    const onSubmit = async () => {
      try {
        await loginForm.value.validate();
        const credentials = toRaw(formState);
        state.loading = true;
        await store.dispatch('login', credentials);
        state.loading = false;
        router.push({ name: 'home' });
      } catch (error) {
        notification.error({
          message: error.response?.data.error,
          description: error.response?.data.message,
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
