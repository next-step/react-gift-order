import { useState } from 'react';

export interface FormData {
  message: string;
  senderName: string;
  receiverName: string;
  receiverPhone: string;
  quantity: number;
}

export interface FormErrors {
  message?: string;
  senderName?: string;
  receiverName?: string;
  receiverPhone?: string;
  quantity?: string;
}

export function useOrderForm(initialMessage: string = '축하해요.') {
  const [formData, setFormData] = useState<FormData>({
    message: initialMessage,
    senderName: '',
    receiverName: '',
    receiverPhone: '',
    quantity: 1,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const validatePhone = (phone: string): boolean => /^010\d{8}$/.test(phone);

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    let isValid = true;

    if (!formData.message.trim()) {
      errors.message = '메시지를 입력해주세요.';
      isValid = false;
    }
    if (!formData.senderName.trim()) {
      errors.senderName = '보내는 사람 이름을 입력해주세요.';
      isValid = false;
    }
    if (!formData.receiverName.trim()) {
      errors.receiverName = '받는 사람 이름을 입력해주세요.';
      isValid = false;
    }
    if (!formData.receiverPhone.trim() || !validatePhone(formData.receiverPhone)) {
      errors.receiverPhone = '올바른 전화번호를 입력해주세요. (예: 01012341234)';
      isValid = false;
    }
    if (!formData.quantity || formData.quantity < 1) {
      errors.quantity = '수량은 1개 이상이어야 합니다.';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleInputChange = (field: keyof FormData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const setMessage = (message: string) => {
    setFormData((prev) => ({ ...prev, message }));
  };

  return {
    formData,
    setFormData,
    formErrors,
    setFormErrors,
    validateForm,
    handleInputChange,
    setMessage,
  };
}
