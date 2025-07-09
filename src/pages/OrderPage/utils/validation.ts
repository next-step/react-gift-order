import { PHONE_NUMBER_REGEX } from "../constants/phoneNumberRegEx";

export const validatePhoneNumber = (phoneNumber: string) => {
  return PHONE_NUMBER_REGEX.KOREAN.test(phoneNumber);
};

export const validateQuantity = (quantity: string) => {
  return parseInt(quantity, 10) > 0;
};
