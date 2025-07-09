// validators.ts
import type { Validator } from '@/hooks/useValidationInput';

// 로그인 전용
export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) return 'ID를 입력해주세요.';
  if (!emailRegex.test(email)) return 'ID는 이메일 형식으로 입력해주세요.';
  return '';
};

export const validatePassword = (pw: string) => {
  if (!pw.trim()) return 'PW를 입력해주세요.';
  if (pw.length < 8) return 'PW는 최소 8글자 이상이어야 합니다.';
  return '';
};

// 주문 폼 전용
export const validateMessage: Validator<string> = (v) => (v.trim() ? '' : '메시지를 입력해주세요.');

export const validateName: Validator<string> = (v) => {
  if (!v.trim()) return '이름을 입력해주세요.';
  if (!/^[가-힣a-zA-Z]{2,}$/.test(v)) return '2자 이상 한글 또는 영어만 입력해주세요.';
  return '';
};

export const validatePhone: Validator<string> = (v) =>
  /^\d{10,11}$/.test(v) ? '' : '올바른 전화번호 형식이 아닙니다.';

export const validateCount: Validator<number> = (v) =>
  v > 0 ? '' : '구매 수량은 1개 이상이어야 합니다.';
