const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

export const validateEmail = (email: string): string => {
  if (!email.trim()) {
    return 'ID를 입력해주세요.';
  }
  if (!EMAIL_REGEX.test(email)) {
    return 'ID는 이메일 형식으로 입력해주세요.';
  }
  return '';
};

export const validatePassword = (password: string): string => {
  if (!password.trim()) {
    return 'PW를 입력해주세요.';
  }
  if (password.length < MIN_PASSWORD_LENGTH) {
    return 'PW는 최소 8글자 이상이어야 합니다.';
  }
  return '';
};
