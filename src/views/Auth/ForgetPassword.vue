<template>
  <div class="page">
    <div class="login">
      <AuthLayout class="flex">
        <div class="w-full flex relative">
          <div class="m-auto">
            <ForgetPasswordForm />
            <img class="absolute bottom-0 left-0" src="../../assets/login-bg.png" alt />
          </div>
        </div>
      </AuthLayout>
    </div>
  </div>
</template>

<script setup>
import AuthLayout from '@/layout/AuthLayout.vue';
import ForgetPasswordForm from '@/components/forms/ForgetPasswordForm.vue';
</script>
