import { EMAIL_REGEX, LOGIN_ERROR_MESSAGE } from "@/constants";
import type { ValidationRulesMap } from "@/utils/type";
import type { FormData } from "@/utils/type";

export const isValidEmail = (email: string): boolean => EMAIL_REGEX.test(email);

export const loginValidationRules: ValidationRulesMap<FormData> = {
  id: [
    {
      condition: (value: string) => !value.trim(),
      message: LOGIN_ERROR_MESSAGE.ID.REQUIRED,
    },
    {
      condition: (value: string) => !isValidEmail(value),
      message: LOGIN_ERROR_MESSAGE.ID.INVALID_FORMAT,
    },
  ],
  password: [
    {
      condition: (value: string) => !value.trim(),
      message: LOGIN_ERROR_MESSAGE.PASSWORD.REQUIRED,
    },
    {
      condition: (value: string) => value.length < 8,
      message: LOGIN_ERROR_MESSAGE.PASSWORD.MIN_LENGTH,
    },
  ],
};
