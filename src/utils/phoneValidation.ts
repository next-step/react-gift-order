export const isValidPhone = (phone: string) => /^010\d{8}$/.test(phone);
export const isValidHypenPhone = (phone: string) => /^010-\d{4}-\d{4}$/.test(phone);
