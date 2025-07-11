import { useInput } from './useInput';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getEmailError = (value: string, touched: boolean) => {
  if (!touched) return '';
  if (!value) return 'ID를 입력해주세요.';
  if (!EMAIL_REGEX.test(value)) return 'ID는 이메일 형식으로 입력해주세요.';
  return '';
};

export const useEmailInput = () => useInput(getEmailError);
