export const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const MIN_PASSWORD_LENGTH = 8;

export const PHONE_REGEX = /^01[0-9]{8,9}$/;
export const MIN_QUANTITY = 1;

export const ERROR_MESSAGES = {
  EMPTY_EMAIL: 'ID를 입력해주세요.',
  INVALID_EMAIL: 'ID는 이메일 형식으로 입력해주세요.',
  EMPTY_PASSWORD: 'PW를 입력해주세요.',
  SHORT_PASSWORD: `PW는 최소 ${MIN_PASSWORD_LENGTH}글자 이상이어야 합니다.`,
  EMPTY_MESSAGE: '메시지를 입력해주세요.',
  EMPTY_SENDER: '이름을 입력해주세요.',
  EMPTY_RECEIVER_NAME: '이름을 입력해주세요.',
  EMPTY_RECEIVER_PHONE: '전화번호를 입력해주세요.',
  INVALID_PHONE: '올바른 전화번호 형식이 아닙니다.',
  INVALID_QUANTITY: `구매 수량은 ${MIN_QUANTITY}개 이상이어야 합니다.`,
  DUPLICATE_PHONE: '전화번호가 중복되었습니다.',
} as const;
