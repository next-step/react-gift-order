export const validateEmail = (email: string): string => {
  if (!email) {
    return 'ID를 입력해주세요.';
  }
  const emailPattern = /^.+@.+\..+$/;
  if (!emailPattern.test(email)) {
    return 'ID는 이메일 형식으로 입력해주세요.';
  }
  return '';
};

export const validatePassword = (password: string): string => {
  if (!password) {
    return 'PW를 입력해주세요.';
  }

  if (password.length < 8) {
    return 'PW는 최소 8글자 이상이어야 합니다.';
  }

  return '';
};
