import {
  EMAIL_REGEX,
  MIN_PASSWORD_LENGTH,
  ERROR_MESSAGES,
} from '@/constants/validation';

export const getEmailError = (value: string): string => {
  if (!value) {
    return ERROR_MESSAGES.EMPTY_EMAIL;
  }

  if (!EMAIL_REGEX.test(value)) {
    return ERROR_MESSAGES.INVALID_EMAIL;
  }

  return '';
};

export const getPasswordError = (value: string): string => {
  if (!value) {
    return ERROR_MESSAGES.EMPTY_PASSWORD;
  }

  if (value.length < MIN_PASSWORD_LENGTH) {
    return ERROR_MESSAGES.SHORT_PASSWORD;
  }

  return '';
};
