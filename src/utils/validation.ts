import type { Dispatch, SetStateAction } from "react";
import type { ValidationErrors, ValidationRule } from "@/utils/type";

export const validateField = <T>(
  value: T,
  rules: ValidationRule<T>[],
): string | undefined => {
  const failedRule = rules.find(rule => rule.condition(value));
  return failedRule ? failedRule.message : undefined;
};

export const createFieldHandler = <T, K extends keyof T>(
  field: K,
  validators: Record<K, (value: T[K]) => string | undefined>,
  setFormData: Dispatch<SetStateAction<T>>,
  setErrors: Dispatch<SetStateAction<ValidationErrors<T>>>,
  hasError: boolean,
) => ({
  onChange: (value: T[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (hasError) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  },
  onBlur: (value: T[K]) => {
    const error = validators[field](value);
    setErrors(prev => ({ ...prev, [field]: error }));
  },
});
