<template>
  <a-config-provider :direction="dir">
    <div class="h-screen flex" v-if="authLoading">
      <a-spin class="m-auto" size="large" />
    </div>
    <router-view v-else/>
  </a-config-provider>
</template>

<script>
import { useStore } from 'vuex';
import { defineComponent, computed } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const store = useStore();
    const { locale } = useI18n();

    const dir = computed(() => store.state.meta.dir);
    const lang = computed(() => store.state.meta.lang);
    const authLoading = computed(() => store.state.user.authLoading);

    locale.value = lang.value;

    store.dispatch('auth');

    return { dir, lang, authLoading };
  },
});
</script>

<style>
#app {
  font-family: 'metropolis', Helvetica, Arial, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1c1c1c;
  min-height: 100vh;
}
[dir='rtl'] #app {
  font-family: 'Tajawal', sans-serif;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
