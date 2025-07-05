export type Validator = (value: string) => string | null;

const emailRegEx =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
export const emailValidator: Validator = (value: string) => {
  if (!value) return "ID를 입력해주세요";
  if (!emailRegEx.test(value)) return "ID는 이메일 형식으로 입력해주세요.";
  return null;
};
export const passwordValidator :Validator= (value: string) => {
  if (!value) return "PW를 입력해주세요.";
  if (value.length < 8) return "PW는 최소 8글자 이상이어야 합니다.";
  return null;
};
