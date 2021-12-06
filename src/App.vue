<template>
  <div class="h-screen flex" v-if="isauthLoading">
    <a-spin class="m-auto" size="large" />
  </div>
  <router-view v-else/>
</template>

<script>
import { mapGetters } from 'vuex';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import locales from '@/locales';

export default defineComponent({
  computed: {
    ...mapGetters(['isauthLoading']),
  },
  setup() {
    const lang = localStorage.getItem('lang');

    const html = document.querySelector('html');
    const { dir } = locales.filter((locale) => locale.value === lang)[0];
    html.setAttribute('dir', dir);

    const { locale } = useI18n();
    locale.value = lang;
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
