export const checkEmailError = (newEmail: string): string => {
  if (!newEmail.trim()) {
    return "ID를 입력해주세요.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
    return "ID는 이메일 형식으로 입력해주세요.";
  }
  return "";
};

export const checkPasswordError = (newPassword: string): string => {
  if (!newPassword.trim()) {
    return "PW를 입력해주세요.";
  } else if (newPassword.length < 8) {
    return "PW는 최소 8글자 이상이어야 합니다.";
  }
  return "";
};
