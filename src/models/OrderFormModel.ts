import { validatePhoneNumber, validateRequired } from '@/utils/validation';

export class OrderFormModel {
  message: string;
  senderName: string;
  receiverName: string;
  receiverPhoneNumber: string;
  quantity: number;

  constructor(data: Partial<OrderFormModel> = {}) {
    this.message = data.message || '';
    this.senderName = data.senderName || '';
    this.receiverName = data.receiverName || '';
    this.receiverPhoneNumber = data.receiverPhoneNumber || '';
    this.quantity = data.quantity || 1;
  }

  toPlainObject() {
    return {
      message: this.message,
      senderName: this.senderName,
      receiverName: this.receiverName,
      receiverPhoneNumber: this.receiverPhoneNumber,
      quantity: this.quantity,
    };
  }

  validate(form: OrderFormModel) {
    const errors: Partial<Record<keyof OrderFormModel, string>> = {};

    if (!validateRequired(form.message)) {
      errors.message = '메시지를 입력해주세요.';
    }
    if (!validateRequired(form.senderName)) {
      errors.senderName = '보내는 사람 이름을 입력해주세요.';
    }
    if (!validateRequired(form.receiverName)) {
      errors.receiverName = '받는 사람 이름을 입력해주세요.';
    }
    if (!validateRequired(form.receiverPhoneNumber)) {
      errors.receiverPhoneNumber = '전화번호를 입력해주세요.';
    } else if (!validatePhoneNumber(form.receiverPhoneNumber)) {
      errors.receiverPhoneNumber = '올바른 전화번호 형식이 아닙니다. (01012341234)';
    }
    if (form.quantity < 1) {
      errors.quantity = '수량은 1개 이상이어야 합니다.';
    }

    return errors;
  }
}
