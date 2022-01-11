<template>
  <div class="page">
    <div class="otpPasswordReset">
      <AuthLayout class="flex">
        <div class="w-full flex relative">
          <div class="m-auto">
            <OtpForm />
            <img
              class="absolute bottom-0 left-0 pointer-events-none"
              src="../../assets/login-bg.png"
              alt
            />
          </div>
        </div>
      </AuthLayout>
    </div>
  </div>
</template>

<script setup>
import AuthLayout from '@/layout/AuthLayout.vue';
import OtpForm from '@/components/forms/OtpForm.vue';
</script>
