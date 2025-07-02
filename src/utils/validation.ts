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
