export const emailRegex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
export const MIN_PASSWORD_LENGTH = 8;

export const validateId = (id: string): string | undefined => {
  if (!id.trim()) {
    return 'ID를 입력해주세요.';
  }
  if (!emailRegex.test(id)) {
    return 'ID는 이메일 형식으로 입력해주세요.';
  }
  return;
};

export const validatePw = (pw: string): string | undefined => {
  if (!pw.trim()) {
    return 'PW를 입력해주세요.';
  }
  if (pw.length < MIN_PASSWORD_LENGTH) {
    return `PW는 최소 ${MIN_PASSWORD_LENGTH}글자 이상이어야 합니다.`;
  }
  return;
};
