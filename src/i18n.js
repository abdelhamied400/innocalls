/* eslint-disable no-shadow */
import { createI18n } from 'vue-i18n';
import locales from '@/locales';
import store from '@/store';

// on language change
const changeLanguage = (lang) => {
  const html = document.querySelector('html');
  const { dir } = locales.filter((locale) => locale.value === lang)[0];

  localStorage.setItem('lang', lang);
  localStorage.setItem('dir', dir);

  html.setAttribute('lang', lang);
  html.setAttribute('dir', dir);

  store.commit('lang', lang);
  store.commit('dir', dir);
};

// set default
let lang = localStorage.getItem('lang');
if (!lang) {
  lang = process.env.VUE_APP_I18N_LOCALE;
  localStorage.setItem('lang', lang);
}
changeLanguage(lang);

export {
  changeLanguage,
};

function loadLocaleMessages() {
  const locales = require.context('@/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key).default;
    }
  });
  return messages;
}

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages(),
});
