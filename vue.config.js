const vueConfig = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#2F8FCF',
          'link-color': '#2F8FCF',
          'badge-color': '#2F8FCF',
          'success-color': '#5DB22C',
          'warning-color': '#F6C700',
          'error-color': '#FC476A',
          'font-size-base': '14px',
          'heading-color': 'rgba(0, 0, 0, 0.85)',
          'text-color': 'rgba(0, 0, 0, 0.65)',
          'text-color-secondary': 'rgba(0, 0, 0, 0.45)',
          'disabled-color': 'rgba(0, 0, 0, 0.25)',
          'border-radius-base': '2px',
          'border-color-base': '#d9d9d9',
          'box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)',
          'btn-danger-bg': '#FC476A',
          'btn-danger-border': '#FC476A',
          'btn-primary-bg': '#2F8FCF',
        },
        javascriptEnabled: true,
      },
    },
  },
  devServer: {
    port: 8000,
  },
};

module.exports = vueConfig;
