export interface Recipient {
  id: string;
  name: string;
  phone: string;
  quantity: number;
}

export interface OrderFormData {
  selectedCardId: number;
  message: string;
  sender: string;
  recipients: Recipient[];
}

export interface OrderFormErrors {
  message?: string;
  sender?: string;
  recipients?: Array<{
    name?: string;
    phone?: string;
    quantity?: string;
  }>;
  general?: string;
}

// 단일 받는사람 폼 (기존 호환성 유지)
export interface SingleRecipientFormData {
  selectedCardId: number;
  message: string;
  sender: string;
  receiver: string;
  receiverPhone: string;
  quantity: number;
}

// 받는사람 모달 관련 타입
export interface RecipientModalData {
  recipients: Recipient[];
  isEditing?: boolean;
  editingIndex?: number;
}

// 폼 액션 타입
export interface RecipientActions {
  addRecipient: () => boolean;
  removeRecipient: (index: number) => void;
  updateRecipient: (index: number, recipient: Recipient) => void;
  setRecipients: (recipients: Recipient[]) => void;
  canAddMore: boolean;
  maxReached: boolean;
}

// 주문 요약 정보
export interface OrderSummary {
  productName: string;
  senderName: string;
  totalQuantity: number;
  totalPrice: number;
  recipientCount: number;
  message: string;
}
