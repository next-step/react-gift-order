export type Validator = (value: string) => string | null;

const emailRegEx =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
const pwRegEx = /^(070|02|0[3-9]{1}[0-9]{1})[0-9]{3,4}[0-9]{4}$/;
export const emailValidator: Validator = (value: string) => {
  if (!value) return "ID를 입력해주세요";
  if (!emailRegEx.test(value)) return "ID는 이메일 형식으로 입력해주세요.";
  return null;
};
export const passwordValidator: Validator = (value: string) => {
  if (!value) return "PW를 입력해주세요.";
  if (value.length < 8) return "PW는 최소 8글자 이상이어야 합니다.";
  return null;
};
export const nameValidatior: Validator=(value: string)=>{
  if (!value) return "이름을 입력해주세요.";
  return null;
}
export const phoneValidator: Validator = (value: string) => {
  if (!value) return "전화번호를 입력해주세요";
  if (!pwRegEx.test(value)) return "ID는 이메일 형식으로 입력해주세요.";
  return null;
};

export const quantityValidatior: Validator=(value: string)=>{
if(Number(value)<1)return "구매 수량은 1개 이상이어야 합니다. "
return null
}
export const cardMessageValidatior:Validator=(value:string)=>{
  if (!value) return "메시지를 입력해주세요. ";
  return null;
}