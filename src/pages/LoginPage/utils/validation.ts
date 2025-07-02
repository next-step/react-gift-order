export const validateEmailFormat = (email: string) => {
  return /^[\w.-]+@[\w-]+\.\w+$/.test(email);
};

export const isNotEmpty = (value: string) => {
  return value.length > 0;
};
