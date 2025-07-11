export type Validator = (value: string) => string | true;
//undefined 안 나오게 모든 분기 명시
const emailRegEx =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
const pwRegEx = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
const phoneRegEx = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
console.log(phoneRegEx.test('01048571666'));
// 이메일 유효성 검사
export const emailValidator: Validator = (value: string) => {
  if (!value) return "ID를 입력해주세요";
  if (!emailRegEx.test(value)) return "ID는 이메일 형식으로 입력해주세요.";
  return true;
};
export const passwordValidator: Validator = (value: string) => {
  if (!value) return "PW를 입력해주세요.";
  if (value.length < 8) return "PW는 최소 8글자 이상이어야 합니다.";
  return true;
};
export const nameValidatior: Validator = (value: string) => {
  if (!value) return "이름을 입력해주세요.";
  return true;
};
export const phoneValidator= (value: string) => {
  if (!value) return "전화번호를 입력해주세요";
  if (!pwRegEx.test(value)) return "전화번호는 형식에 맞춰주세요.";
  return true;
};

export const quantityValidatior = (value: number) => {
  if (Number(value) < 1) return "구매 수량은 1개 이상이어야 합니다. ";
  return true;
};
export const cardMessageValidatior: Validator = (value: string) => {
  if (!value) return "메시지를 입력해주세요. ";
  return true;
};
