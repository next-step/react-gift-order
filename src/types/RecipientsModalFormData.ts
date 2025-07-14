import type { Recipient } from './Recipient';

export interface RecipientsModalFormData {
  newRecipients: Recipient[]; // 모달 내부에서만 사용될 임시 배열
}
