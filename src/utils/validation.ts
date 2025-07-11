const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isValidEmail = (email: string): boolean => {
  if (!email.trim()) {
    return false;
  }
  return EMAIL_REGEX.test(email.trim());
};

export const getEmailErrorMessage = (email: string): string | null => {
  const trimmedEmail = email.trim();

  if (!trimmedEmail) {
    return 'ID를 입력해주세요.';
  }

  if (!EMAIL_REGEX.test(trimmedEmail)) {
    return 'ID는 이메일 형식으로 입력해주세요.';
  }

  return null;
};

export const isValidPassword = (password: string): boolean => {
  return password.trim().length >= 8;
};

export const getPasswordErrorMessage = (password: string): string | null => {
  const trimmedPassword = password.trim();

  if (!trimmedPassword) {
    return 'PW를 입력해주세요.';
  }

  if (trimmedPassword.length < 8) {
    return 'PW는 최소 8글자 이상이어야 합니다.';
  }

  return null;
};

export const isValidPhoneNumber = (phone: string): boolean => {
  // 01012341234 형태로만 허용
  return /^010\d{8}$/.test(phone);
};

export const getPhoneErrorMessage = (phone: string): string | null => {
  const trimmedPhone = phone.trim();

  if (!trimmedPhone) {
    return '전화번호를 입력해주세요.';
  }

  if (!isValidPhoneNumber(trimmedPhone)) {
    return '전화번호는 01012341234 형태로 입력해주세요.';
  }

  return null;
};

export const isValidName = (name: string): boolean => {
  return name.trim().length > 0;
};

export const getNameErrorMessage = (name: string): string | null => {
  const trimmedName = name.trim();

  if (!trimmedName) {
    return '이름을 입력해주세요.';
  }

  return null;
};

export const isValidQuantity = (quantity: number): boolean => {
  return quantity >= 1;
};

export const getQuantityErrorMessage = (quantity: number): string | null => {
  if (quantity < 1) {
    return '구매 수량은 1개 이상이어야 합니다.';
  }

  return null;
};
