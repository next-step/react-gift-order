export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) return 'ID를 입력해주세요.';
  if (!emailRegex.test(email)) return 'ID는 이메일 형식으로 입력해주세요.';
  return '';
};

export const validatePassword = (pw: string) => {
  if (!pw.trim()) return 'PW를 입력해주세요.';
  if (pw.length < 8) return 'PW는 최소 8글자 이상이어야 합니다.';
  return '';
};
