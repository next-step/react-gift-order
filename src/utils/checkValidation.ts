const MIN_PASSWORD_LENGTH = 8;

export const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function checkEmailValidation(email: string): string | null {
  if (!email) {
    return "아이디를 입력해주세요.";
  }
  if (!emailFormat.test(email)) {
    return "아이디는 이메일 형식으로 입력해주세요.";
  }
  return null;
}

export function checkPasswordValidation(password: string): string | null {
  if (!password) {
    return "비밀번호를 입력해주세요.";
  }
  if (password.length < MIN_PASSWORD_LENGTH) {
    return `비밀번호는 최소 ${MIN_PASSWORD_LENGTH}자 이상이어야 합니다.`;
  }
  return null;
}
