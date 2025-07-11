import type { Recipient } from '@/types';
import { isValidPhoneNumberStrict } from './phoneUtils';

/**
 * 받는사람 폼 초기화
 */
export const createEmptyRecipientForm = (): Omit<Recipient, 'id'> => ({
  name: '',
  phone: '',
  quantity: 1,
});

/**
 * 받는사람 폼 데이터 검증
 */
export const validateRecipientForm = (
  recipient: Omit<Recipient, 'id'>
): {
  isValid: boolean;
  errors: { [key: string]: string };
} => {
  const errors: { [key: string]: string } = {};

  if (!recipient.name.trim()) {
    errors.name = '이름을 입력해주세요.';
  }

  if (!recipient.phone.trim()) {
    errors.phone = '전화번호를 입력해주세요.';
  } else if (!isValidPhoneNumberStrict(recipient.phone)) {
    errors.phone = '전화번호는 01012341234 형태로 입력해주세요.';
  }

  if (recipient.quantity < 1) {
    errors.quantity = '수량은 1개 이상이어야 합니다.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * 받는사람 목록에서 특정 전화번호가 이미 존재하는지 확인
 */
export const isPhoneNumberDuplicate = (
  phone: string,
  recipients: Recipient[],
  excludeId?: string
): boolean => {
  return recipients.some(
    (recipient) => recipient.phone === phone && recipient.id !== excludeId
  );
};

/**
 * 받는사람 목록의 총 수량 계산
 */
export const calculateTotalQuantity = (recipients: Recipient[]): number => {
  return recipients.reduce((sum, recipient) => sum + recipient.quantity, 0);
};

/**
 * 받는사람 목록의 총 가격 계산
 */
export const calculateTotalPrice = (
  recipients: Recipient[],
  unitPrice: number
): number => {
  const totalQuantity = calculateTotalQuantity(recipients);
  return totalQuantity * unitPrice;
};

/**
 * 받는사람 정보를 포맷팅된 문자열로 변환
 */
export const formatRecipientInfo = (
  recipient: Recipient,
  index: number
): string => {
  return `${index + 1}. ${recipient.name} (${recipient.phone}) - ${recipient.quantity}개`;
};

/**
 * 받는사람 목록을 요약 문자열로 변환
 */
export const formatRecipientsSummary = (recipients: Recipient[]): string => {
  if (recipients.length === 0) {
    return '받는사람이 없습니다.';
  }

  const totalQuantity = calculateTotalQuantity(recipients);
  return `받는사람 ${recipients.length}명, 총 ${totalQuantity}개`;
};
