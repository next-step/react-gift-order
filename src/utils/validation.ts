import { EMAIL_REGEX, PHONE_REGEX } from "@/constants/regex";

export const checkEmailError = (newEmail: string): string | undefined => {
  if (!newEmail.trim()) {
    return "ID를 입력해주세요.";
  } else if (!EMAIL_REGEX.test(newEmail)) {
    return "ID는 이메일 형식으로 입력해주세요.";
  }
  return undefined;
};

export const checkPasswordError = (newPassword: string): string | undefined => {
  if (!newPassword.trim()) {
    return "PW를 입력해주세요.";
  } else if (newPassword.length < 8) {
    return "PW는 최소 8글자 이상이어야 합니다.";
  }
  return undefined;
};

export const checkMessageError = (message: string): string | undefined => {
  if (!message.trim()) {
    return "메시지를 입력해주세요.";
  }
  return undefined;
};

export const checkNameError = (name: string): string | undefined => {
  if (!name.trim()) {
    return "이름을 입력해주세요.";
  }
  return undefined;
};

export const checkPhoneError = (phone: string): string | undefined => {
  if (!phone.trim()) {
    return "전화번호를 입력해주세요.";
  } else if (!PHONE_REGEX.test(phone)) {
    return "올바른 전화번호 형식이 아닙니다.";
  }
  return undefined;
};

export const checkCountError = (count: string): string | undefined => {
  if (Number(count) <= 0) {
    return "구매 수량은 1개 이상이어야 합니다.";
  }
  return undefined;
};
