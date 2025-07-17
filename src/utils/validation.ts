export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const MIN_PASSWORD_LENGTH = 8;

export const ERROR_MESSAGES = {
  EMAIL_REQUIRED: 'ID를 입력해주세요.',
  EMAIL_INVALID: 'ID는 이메일 형식으로 입력해주세요.',
  PASSWORD_REQUIRED: 'PW를 입력해주세요.',
  PASSWORD_MIN_LENGTH: `PW는 최소 ${MIN_PASSWORD_LENGTH}글자 이상이어야 합니다.`,
};

export const validateEmail = (email: string) => {
  if (!email) return ERROR_MESSAGES.EMAIL_REQUIRED;
  if (!EMAIL_REGEX.test(email)) return ERROR_MESSAGES.EMAIL_INVALID;
  return null;
};

export const validatePassword = (password: string) => {
  if (!password) return ERROR_MESSAGES.PASSWORD_REQUIRED;
  if (password.length < MIN_PASSWORD_LENGTH) return ERROR_MESSAGES.PASSWORD_MIN_LENGTH;
  return null;
};
