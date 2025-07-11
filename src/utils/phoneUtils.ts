/**
 * 전화번호 포맷팅 및 검증 관련 유틸리티 함수들
 */

/**
 * 전화번호에서 숫자만 추출
 */
export const extractNumbers = (value: string): string => {
  return value.replace(/\D/g, '');
};

/**
 * 전화번호 입력 시 자동 포맷팅 (010-1234-5678)
 */
export const formatPhoneNumber = (value: string): string => {
  const numbers = extractNumbers(value);

  if (numbers.length <= 3) {
    return numbers;
  } else if (numbers.length <= 7) {
    return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
  } else if (numbers.length <= 11) {
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
  }

  return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
};

/**
 * 포맷된 전화번호를 순수 숫자로 변환 (저장용)
 */
export const normalizePhoneNumber = (value: string): string => {
  return extractNumbers(value);
};

/**
 * 전화번호 유효성 검사 (단계별)
 */
export const validatePhoneStep = (
  value: string
): {
  isValid: boolean;
  error?: string;
  warning?: string;
} => {
  const numbers = extractNumbers(value);

  if (numbers.length === 0) {
    return { isValid: false, error: '전화번호를 입력해주세요.' };
  }

  if (!numbers.startsWith('010')) {
    return {
      isValid: false,
      error: '010으로 시작하는 번호만 입력 가능합니다.',
    };
  }

  if (numbers.length < 11) {
    return {
      isValid: false,
      warning: '전화번호가 짧습니다. (010-1234-5678 형식)',
    };
  }

  if (numbers.length > 11) {
    return { isValid: false, error: '전화번호가 너무 깁니다.' };
  }

  if (numbers.length === 11) {
    return { isValid: true };
  }

  return { isValid: false, error: '올바른 전화번호 형식이 아닙니다.' };
};

/**
 * 전화번호 최종 유효성 검사
 */
export const isValidPhoneNumberStrict = (value: string): boolean => {
  const numbers = normalizePhoneNumber(value);
  return /^010\d{8}$/.test(numbers);
};

/**
 * 전화번호 마스킹 (개인정보 보호용)
 */
export const maskPhoneNumber = (value: string): string => {
  const numbers = normalizePhoneNumber(value);
  if (numbers.length === 11) {
    return `${numbers.slice(0, 3)}-****-${numbers.slice(7)}`;
  }
  return value;
};

/**
 * 전화번호 표시용 포맷팅
 */
export const displayPhoneNumber = (value: string): string => {
  const numbers = normalizePhoneNumber(value);
  if (numbers.length === 11) {
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
  }
  return value;
};
