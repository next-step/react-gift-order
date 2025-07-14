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
  // 정규화된 형태(01012341234) 또는 포맷된 형태(010-1234-5678) 모두 허용
  const normalized = phone.replace(/\D/g, '');
  return /^010\d{8}$/.test(normalized);
};

export const getPhoneErrorMessage = (phone: string): string | null => {
  const trimmedPhone = phone.trim();

  if (!trimmedPhone) {
    return '전화번호를 입력해주세요.';
  }

  const normalized = trimmedPhone.replace(/\D/g, '');

  if (!normalized.startsWith('010')) {
    return '010으로 시작하는 번호만 입력 가능합니다.';
  }

  if (normalized.length !== 11) {
    return '전화번호는 11자리여야 합니다. (010-1234-5678)';
  }

  if (!isValidPhoneNumber(trimmedPhone)) {
    return '올바른 전화번호 형식이 아닙니다.';
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
