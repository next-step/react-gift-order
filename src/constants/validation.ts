export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const VALIDATION_MESSAGES = {
  email: {
    required: 'ID를 입력해주세요.',
    invalid: 'ID는 이메일 형식으로 입력해주세요.',
  },
  password: {
    required: 'PW를 입력해주세요.',
    minLength: 'PW는 최소 8글자 이상이어야 합니다.',
  },
} as const;

export const PASSWORD_MIN = 8;