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
