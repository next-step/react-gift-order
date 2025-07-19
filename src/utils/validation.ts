export const PHONE_NUMBER_REGEX = /^010\d{8}$/;
export const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

export const validateEmail = (email: string) => {
  if (!EMAIL_REGEX.test(email)) {
    return '유효한 이메일 주소를 입력해주세요.';
  }
  return null;
};

export const validatePassword = (password: string) => {
  if (!PASSWORD_REGEX.test(password)) {
    return '비밀번호는 영문, 숫자를 포함하여 8자 이상 25자 이하여야 합니다.';
  }
  return null;
};

export const validatePhoneNumber = (phoneNumber: string) => {
  return PHONE_NUMBER_REGEX.test(phoneNumber);
};

export const validateRequired = (value: string) => {
  if (!value || value.trim().length === 0) {
    return false;
  }
  return true;
};

export const validateMinLength = (value: string, minLength: number) => {
  return value.length >= minLength;
};
