export const isValidPhoneFlexible = (phone: string) => /^010\d{8}$|^010-\d{4}-\d{4}$/.test(phone);
