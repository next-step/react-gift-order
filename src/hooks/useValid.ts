import type { ValueType } from "@/interfaces/ValueType"

 const EMAIL_REG_EXP =
  /^[A-Za-z0-9_]+[A-Za-z0-9]*@[A-Za-z0-9]+[A-Za-z0-9]*\.[A-Za-z]{1,3}$/

export function validateEmail(email: string): string {
  if (email.length === 0) return "ID를 입력해주세요.";
  if (!EMAIL_REG_EXP.test(email)) return "ID는 이메일 형식으로 입력해주세요.";
  return "";
}

export function validatePassword(password: string): string {
  if (password.length === 0) return "PW를 입력해주세요.";
  if (password.length < 8) return "PW는 최소 8글자 이상이어야 합니다.";
  return "";
}

export function useValid(data: ValueType) {
  const emailMessage = validateEmail(data.email);
  const passwordMessage = validatePassword(data.password);
  const isEmailValid = !emailMessage;
  const isPasswordValid = !passwordMessage;
  return {
    emailMessage,
    passwordMessage,
    isEmailValid,
    isPasswordValid,
  };
}
