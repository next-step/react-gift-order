const ERROR_MSG_ID_EMPTY = "ID를 입력해주세요.";
const ERROR_MSG_ID_FORM = "ID는 이메일 형식으로 입력해주세요.";
const ERROR_MSG_PASSWORD_EMPTY = "PW를 입력해주세요.";
const ERROR_MSG_PASSWORD_FORM = "PW는 최소 8글자 이상이어야 합니다.";
const ERROR_MSG_NAME_EMPTY = "이름을 입력해주세요.";
const ERROR_MSG_PHONE_EMPTY = "전화번호를 입력해주세요.";
const ERROR_MSG_PHONE_FORM = "올바른 전화번호 형식이 아닙니다.";
const ERROR_MSG_COUNT_NOT_NATURAL = "수량은 1개 이상이어야 합니다.";
const ERROR_MSG_MESSAGE_EMPTY = "메세지를 입력해주세요.";

export const getIdError = (id: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let errorMsg: string | null = null;
  if (id.length === 0) errorMsg = ERROR_MSG_ID_EMPTY;
  else if (!emailRegex.test(id)) errorMsg = ERROR_MSG_ID_FORM;
  return errorMsg;
};
export const getPasswordError = (password: string) => {
  let errorMsg: string | null = null;
  if (password.length === 0) errorMsg = ERROR_MSG_PASSWORD_EMPTY;
  else if (password.length < 8) errorMsg = ERROR_MSG_PASSWORD_FORM;
  return errorMsg;
};
export const getNameError = (name: string) => {
  let errorMsg: string | null = null;
  if (name.length === 0) errorMsg = ERROR_MSG_NAME_EMPTY;
  return errorMsg;
};
export const getPhoneError = (phone: string) => {
  const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{4})[- ]?(\d{4})$/;
  let errorMsg: string | null = null;
  if (phone.length === 0) errorMsg = ERROR_MSG_PHONE_EMPTY;
  else if (!phoneRegex.test(phone)) errorMsg = ERROR_MSG_PHONE_FORM;
  return errorMsg;
};
export const getQuantityError = (count: number) => {
  let errorMsg: string | null = null;
  if (count < 1) errorMsg = ERROR_MSG_COUNT_NOT_NATURAL;
  return errorMsg;
};
export const getMessageError = (msg: string) => {
  let errorMsg: string | null = null;
  if (msg.length === 0) errorMsg = ERROR_MSG_MESSAGE_EMPTY;
  return errorMsg;
};
