const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isValidEmail = (email: string): boolean => {
  if (!email.trim()) {
    return false;
  }
  return EMAIL_REGEX.test(email.trim());
};

export const getEmailErrorMessage = (email: string): string | null => {
  const trimmedEmail = email.trim();

  if (!trimmedEmail) {
    return 'ID를 입력해주세요.';
  }

  if (!EMAIL_REGEX.test(trimmedEmail)) {
    return 'ID는 이메일 형식으로 입력해주세요.';
  }

  return null;
};

export const isValidPassword = (password: string): boolean => {
  return password.trim().length >= 8;
};

export const getPasswordErrorMessage = (password: string): string | null => {
  const trimmedPassword = password.trim();

  if (!trimmedPassword) {
    return 'PW를 입력해주세요.';
  }

  if (trimmedPassword.length < 8) {
    return 'PW는 최소 8글자 이상이어야 합니다.';
  }

  return null;
};
