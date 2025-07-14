import type { Recipient } from '@/types';

/**
 * 받는사람 목록에서 전화번호 중복 검사
 */
export const checkDuplicatePhone = (recipients: Recipient[]): string[] => {
  const phoneNumbers = recipients.map((r) => r.phone);
  const duplicates: string[] = [];

  phoneNumbers.forEach((phone, index) => {
    const firstIndex = phoneNumbers.indexOf(phone);
    if (firstIndex !== index && !duplicates.includes(phone)) {
      duplicates.push(phone);
    }
  });

  return duplicates;
};

/**
 * 받는사람이 최대 인원(10명)을 초과하는지 확인
 */
export const isMaxRecipientsReached = (recipients: Recipient[]): boolean => {
  return recipients.length >= 10;
};

/**
 * 새로운 받는사람 객체 생성
 */
export const createNewRecipient = (): Recipient => {
  return {
    id: `recipient_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    name: '',
    phone: '',
    quantity: 1,
  };
};

/**
 * 받는사람 목록이 유효한지 검사
 */
export const validateRecipients = (
  recipients: Recipient[]
): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];

  if (recipients.length === 0) {
    errors.push('받는사람을 최소 1명 이상 등록해주세요.');
    return { isValid: false, errors };
  }

  // 전화번호 중복 검사
  const duplicatePhones = checkDuplicatePhone(recipients);
  if (duplicatePhones.length > 0) {
    errors.push(`중복된 전화번호가 있습니다: ${duplicatePhones.join(', ')}`);
  }

  // 각 받는사람의 정보 검증
  recipients.forEach((recipient, index) => {
    if (!recipient.name.trim()) {
      errors.push(`받는사람 ${index + 1}의 이름을 입력해주세요.`);
    }

    if (!recipient.phone.trim()) {
      errors.push(`받는사람 ${index + 1}의 전화번호를 입력해주세요.`);
    } else if (!/^010\d{8}$/.test(recipient.phone)) {
      errors.push(`받는사람 ${index + 1}의 전화번호 형식이 올바르지 않습니다.`);
    }

    if (recipient.quantity < 1) {
      errors.push(`받는사람 ${index + 1}의 수량은 1개 이상이어야 합니다.`);
    }
  });

  return { isValid: errors.length === 0, errors };
};
