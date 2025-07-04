import { EMAIL_REGEX, LOGIN_ERROR_MESSAGE } from "@/constants";
import { validateField } from "@/utils/validation";

export const isValidEmail = (email: string): boolean => EMAIL_REGEX.test(email);

export const loginValidators = {
  id: (value: string) =>
    validateField(value, [
      {
        condition: val => !val.trim(),
        message: LOGIN_ERROR_MESSAGE.ID.REQUIRED,
      },
      {
        condition: val => !isValidEmail(val),
        message: LOGIN_ERROR_MESSAGE.ID.INVALID_FORMAT,
      },
    ]),

  password: (value: string) =>
    validateField(value, [
      {
        condition: val => !val.trim(),
        message: LOGIN_ERROR_MESSAGE.PASSWORD.REQUIRED,
      },
      {
        condition: val => val.length < 8,
        message: LOGIN_ERROR_MESSAGE.PASSWORD.MIN_LENGTH,
      },
    ]),
};
