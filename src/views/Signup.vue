<template>
  <div class="page">
    <div class="signup">
      <AuthLayout class="flex">
        <div class="mx-8 my-auto flex justify-center items-center">
          <SignupForm />
        </div>
      </AuthLayout>
    </div>
  </div>
</template>

<script setup>
import AuthLayout from '@/layout/AuthLayout.vue';
import SignupForm from '@/components/forms/SignupForm.vue';
</script>
