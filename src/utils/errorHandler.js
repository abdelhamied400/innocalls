import locales from '@/locales';

export default {
  handle: ({
    error, key, i18n, notification,
  }) => {
    const rtl = locales.filter((locale) => locale.value === i18n.locale.value)[0].dir !== 'rtl';
    if (error.errorFields) {
      // handle local validation errors
      error.errorFields.forEach((field, idx) => {
        setTimeout(() => {
          notification.error({
            message: i18n.t(`${key}.form.${field.name[0]}`),
            description: field.errors.join(', '),
            rtl,
          });
        }, idx * 100);
      });
    } else if (error.response?.data.error?.errors) {
      // handle server errors
      const message = error.response?.data.error.message;
      const description = Object.values(error.response?.data?.error.errors).join(', ');
      notification.error({
        message,
        description,
        rtl,
      });
    } else if (error.response && key === 'login') {
      // handle auth server errors
      const message = error.response?.data.error;
      const description = error.response?.data.message;
      notification.error({
        duration: 0,
        message,
        description,
        rtl,
      });
    } else {
      // other errors
      notification.error({
        message: 'unknown error',
        description: error.message,
        rtl,
      });
    }
  },

};
