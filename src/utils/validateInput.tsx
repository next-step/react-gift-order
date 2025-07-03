export const validateEmail = (value: string): string | null => {
  if (!value) return 'ID를 입력해주세요.';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) return 'ID는 이메일 형식으로 입력해주세요.';
  return null;
};

export const validatePassword = (value: string): string | null => {
  if (!value) return 'PW를 입력해주세요.';
  if (value.length < 8) return 'PW는 최소 8글자 이상이어야 합니다.';
  return null;
};
