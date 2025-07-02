import { EMAIL_REGEX, ERROR_MESSAGE } from "@/constants";
import type { FormData, ValidationErrors, ValidationRule } from "@/utils/type";

export const isValidEmail = (email: string): boolean => EMAIL_REGEX.test(email);

export const validateField = (
  value: string,
  rules: ValidationRule[],
): string | undefined => {
  const failedRule = rules.find(rule => rule.condition(value));
  return failedRule ? failedRule.message : undefined;
};

export const validators = {
  id: (value: string) =>
    validateField(value, [
      { condition: val => !val.trim(), message: ERROR_MESSAGE.ID.REQUIRED },
      {
        condition: val => !isValidEmail(val),
        message: ERROR_MESSAGE.ID.INVALID_FORMAT,
      },
    ]),

  password: (value: string) =>
    validateField(value, [
      {
        condition: val => !val.trim(),
        message: ERROR_MESSAGE.PASSWORD.REQUIRED,
      },
      {
        condition: val => val.length < 8,
        message: ERROR_MESSAGE.PASSWORD.MIN_LENGTH,
      },
    ]),
};

export const createFieldHandler = <T extends keyof ValidationErrors>(
  field: T,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>,
  setErrors: React.Dispatch<React.SetStateAction<ValidationErrors>>,
  hasError: boolean,
) => ({
  onChange: (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (hasError) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  },
  onBlur: (value: string) => {
    const error = validators[field](value);
    setErrors(prev => ({ ...prev, [field]: error }));
  },
});
