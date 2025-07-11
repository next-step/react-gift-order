const ERROR_MSG_ID_EMPTY = "ID를 입력해주세요.";
const ERROR_MSG_ID_FORM = "ID는 이메일 형식으로 입력해주세요.";
const ERROR_MSG_PASSWORD_EMPTY = "PW를 입력해주세요.";
const ERROR_MSG_PASSWORD_FORM = "PW는 최소 8글자 이상이어야 합니다.";

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
