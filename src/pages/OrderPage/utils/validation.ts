import { PHONE_NUMBER_REGEX } from "../constants/phoneNumberRegEx";
import { VALIDATE_LABELS } from "../constants/validateLabels";

export const validatePhoneNumber = (phoneNumber: string) => {
  return PHONE_NUMBER_REGEX.KOREAN.test(phoneNumber);
};

export const validateQuantity = (quantity: string) => {
  return parseInt(quantity, 10) > 0;
};

export const validateReceiverData = (receiver: {
  name: string;
  phone: string;
  quantity: string;
}) => {
  const errors: { name?: string; phone?: string; quantity?: string } = {};

  if (!receiver.name.trim()) {
    errors.name = VALIDATE_LABELS.NAME_EMPTY;
  }

  if (!receiver.phone.trim()) {
    errors.phone = VALIDATE_LABELS.PHONE_EMPTY;
  } else if (!validatePhoneNumber(receiver.phone)) {
    errors.phone = VALIDATE_LABELS.PHONE_INVALID;
  }

  if (!receiver.quantity.trim()) {
    errors.quantity = VALIDATE_LABELS.QUANTITY_EMPTY;
  } else if (!validateQuantity(receiver.quantity)) {
    errors.quantity = VALIDATE_LABELS.QUANTITY_INVALID;
  }

  return errors;
};
