import { useInput } from './useInput';

const getPasswordError = (value: string, touched: boolean) => {
  if (!touched) return '';
  if (!value) return 'PW를 입력해주세요.';
  if (value.length < 8) return 'PW는 최소 8글자 이상이어야 합니다.';
  return '';
};

export const usePasswordInput = () => useInput(getPasswordError);
