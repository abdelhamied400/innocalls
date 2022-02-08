const rules = (() => {
  const required = (message, trigger) => ({
    required: true,
    message,
    trigger: trigger || 'change',
    transform: (val) => val?.toString(),
  });

  return {
    required,
  };
})();

export default rules;
