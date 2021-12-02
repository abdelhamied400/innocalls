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
      <a-button block type="primary" @click="onSubmit">Login</a-button>
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

export default defineComponent({
  setup() {
    const loginForm = ref();
    const formState = reactive({
      username: '',
      password: '',
    });
    const rules = {
      username: [
        { required: true, message: 'Please enter username', trigger: 'blur' },
      ],
      password: [
        { required: true, message: 'Please enter password', trigger: 'blur' },
      ],
    };
    const onSubmit = () => {
      loginForm.value
        .validate()
        .then(() => {
          console.log('values', formState, toRaw(formState));
        })
        .catch((error) => {
          console.log('error', error);
        });
    };
    const resetForm = () => {
      loginForm.value.resetFields();
    };
    return {
      loginForm,
      formState,
      rules,
      onSubmit,
      resetForm,
    };
  },
});
</script>
