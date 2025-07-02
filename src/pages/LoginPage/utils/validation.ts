export const validateEmailFormat = (email: string) => {
  return /^[\w.-]+@[\w-]+\.\w+$/.test(email);
};

export const validatePasswordFormat = (password: string) => {
  return password.length >= 8;
};

export const isNotEmpty = (value: string) => {
  return value.length > 0;
};
