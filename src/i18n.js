/* eslint-disable no-shadow */
import { createI18n } from 'vue-i18n';
import locales from '@/locales';

const lang = localStorage.getItem('lang');
const dir = localStorage.getItem('dir');

// set default
if (!lang || !dir) {
  localStorage.setItem('lang', process.env.VUE_APP_I18N_LOCALE);
  localStorage.setItem('dir', process.env.VUE_APP_I18N_DIR);
}

// on language change
const changeLanguage = (lang) => {
  const { dir } = locales.filter((locale) => locale.value === lang)[0];

  localStorage.setItem('lang', lang);
  localStorage.setItem('dir', dir);

  const html = document.querySelector('html');
  html.setAttribute('dir', dir);
  html.setAttribute('lang', lang);
};

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
