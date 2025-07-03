export const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const MIN_PASSWORD_LENGTH = 8;

export const ERROR_MESSAGES = {
  EMPTY_EMAIL: 'ID를 입력해주세요.',
  INVALID_EMAIL: 'ID는 이메일 형식으로 입력해주세요.',
  EMPTY_PASSWORD: 'PW를 입력해주세요.',
  SHORT_PASSWORD: `PW는 최소 ${MIN_PASSWORD_LENGTH}글자 이상이어야 합니다.`,
} as const;
