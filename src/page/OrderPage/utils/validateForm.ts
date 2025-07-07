export const validateText = (value: string): string => {
  if (value.trim() === '') {
    return '이름을 입력해주세요.';
  } else {
    return '';
  }
};
