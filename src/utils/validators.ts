import { MIN_PASSWORD_LENGTH } from "@/constants/validation";

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email: string): string {
  if (!email) {
    return "아이디를 입력해주세요.";
  }
  if (!emailRegex.test(email)) {
    return "아이디는 이메일 형식으로 입력해주세요.";
  }
  return "";
}

export function validatePassword(pw: string): string {
  if (!pw) {
    return "비밀번호를 입력해주세요.";
  }
  if (pw.length < MIN_PASSWORD_LENGTH) {
    return `비밀번호는 최소 ${MIN_PASSWORD_LENGTH}자 이상이어야 합니다.`;
  }
  return "";
}
