export const validatePhoneNumber = (phoneNumber: string) => {
  return /^010\d{8}$/.test(phoneNumber);
};

export const validateQuantity = (quantity: string) => {
  return parseInt(quantity, 10) > 0;
};
