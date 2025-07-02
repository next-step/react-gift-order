export const emailRegex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;

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
  if (pw.length < 8) {
    return 'PW는 최소 8글자 이상이어야 합니다.';
  }
  return;
};