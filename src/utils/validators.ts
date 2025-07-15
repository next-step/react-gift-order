import {
  MIN_PASSWORD_LENGTH,
  MIN_PRODUCT_COUNT,
  MIN_RECEIVER_COUNT,
} from "@/constants/validation";
import { ERROR_MESSAGES } from "@/constants/messages";

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^010\d{8}$/;

export function validateEmail(email: string) {
  if (!email) {
    return ERROR_MESSAGES.LOGIN.ID_EMPTY;
  }
  if (!emailRegex.test(email)) {
    return ERROR_MESSAGES.LOGIN.ID_INVALID;
  }
  return "";
}

export function validatePassword(pw: string) {
  if (!pw) {
    return ERROR_MESSAGES.LOGIN.PW_EMPTY;
  }
  if (pw.length < MIN_PASSWORD_LENGTH) {
    return ERROR_MESSAGES.LOGIN.PW_TOO_SHORT(MIN_PASSWORD_LENGTH);
  }
  return "";
}

export function validateSenderName(name: string) {
  if (!name.trim()) {
    return ERROR_MESSAGES.VALIDATE.NAME;
  }
  return "";
}

export function validateReceiverName(name: string) {
  if (!name.trim()) {
    return ERROR_MESSAGES.VALIDATE.NAME;
  }
  return true;
}

export function validateMessage(message: string) {
  if (!message.trim()) {
    return ERROR_MESSAGES.VALIDATE.MESSGE;
  }
  return "";
}

export function validatePhone(phone: string) {
  if (!phone) {
    return ERROR_MESSAGES.VALIDATE.PHONE;
  }
  if (!phoneRegex.test(phone)) {
    return ERROR_MESSAGES.VALIDATE.PHONE_TYPE;
  }
  return "";
}

export function validateQuantity(quantity: number) {
  if (quantity < MIN_PRODUCT_COUNT) {
    return ERROR_MESSAGES.VALIDATE.QUANTITY;
  }
  return true;
}

export function validateReceiverCount(receiverCount: number) {
  if (receiverCount < MIN_RECEIVER_COUNT) {
    return ERROR_MESSAGES.VALIDATE.SELECT_RECEIVER;
  }
  return "";
}

export function createPhoneValidator(getReceivers: () => { phone: string }[]) {
  return (value: string) => {
    const formatError = validatePhone(value);
    if (formatError) return formatError;

    const receivers = getReceivers() ?? [];
    const sameCount = receivers.filter((r) => r.phone === value).length;

    if (sameCount > 1) {
      return ERROR_MESSAGES.VALIDATE.DUPLICATE_PHONE;
    }

    return true;
  };
}
