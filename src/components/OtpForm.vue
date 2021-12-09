<template>
  <h3 class="md:text-5xl text-3xl font-bold text-primary mb-6">
    {{ $t('otpPasswordReset.title') }}
  </h3>
  <Countdown :time="180" />
  <Otp :num="6" />
</template>

<script>
import { defineComponent } from 'vue';
import Countdown from './ui/Countdown.vue';
import Otp from './ui/Otp.vue';

export default defineComponent({
  setup() {},
  components: { Countdown, Otp },
});
</script>
