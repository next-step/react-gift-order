import { deepFreeze } from '@/utils/deepFreeze';

export const LOGIN_LABELS = deepFreeze({
  EMAIL_PLACEHOLDER: '이메일',
  PASSWORD_PLACEHOLDER: '비밀번호',
  LOGIN_BUTTON: '로그인',
} as const);
