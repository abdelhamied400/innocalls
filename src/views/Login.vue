<template>
  <div class="page">
    <div class="login">
      <AuthLayout class="flex">
        <div class="mx-8 my-auto flex justify-center items-center">
          <LoginForm />
          <img class="hidden lg:block mx-8" src="../assets/inno-wave.png" alt />
        </div>
      </AuthLayout>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import AuthLayout from '@/layout/AuthLayout.vue';

export default {
  components: { LoginForm, AuthLayout },
};
</script>
