import { useState, useCallback, useMemo } from "react";
import type { ValidationRulesMap, ValidationErrors } from "@/utils/type";

interface UseFormProps<T> {
  initialValues: T;
  validationRules: ValidationRulesMap<T>;
  onSubmit: (values: T) => void;
}

export const useForm = <T extends object>({
  initialValues,
  validationRules,
  onSubmit,
}: UseFormProps<T>) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<ValidationErrors<T>>({});
  const [touched, setTouched] = useState<Record<keyof T, boolean>>(
    {} as Record<keyof T, boolean>,
  );

  const validateField = useCallback(
    <K extends keyof T>(field: K, value: T[K]) => {
      const rules = validationRules[field];
      if (!rules) return undefined;

      const failedRule = rules.find(rule => rule.condition(value));
      return failedRule ? failedRule.message : undefined;
    },
    [validationRules],
  );

  const handleChange = useCallback(
    <K extends keyof T>(field: K, value: T[K]) => {
      setValues(prev => ({ ...prev, [field]: value }));
      setTouched(prev => ({ ...prev, [field]: true }));
      if (touched[field] || errors[field]) {
        const error = validateField(field, value);
        setErrors(prev => ({ ...prev, [field]: error }));
      }
    },
    [validateField, touched, errors],
  );

  const handleBlur = useCallback(
    <K extends keyof T>(field: K) => {
      setTouched(prev => ({ ...prev, [field]: true }));
      const error = validateField(field, values[field]);
      setErrors(prev => ({ ...prev, [field]: error }));
    },
    [values, validateField],
  );

  const validateAllFields = useCallback(() => {
    const newErrors: ValidationErrors<T> = {};
    let isValid = true;
    for (const key in validationRules) {
      const field = key as keyof T;
      const error = validateField(field, values[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
      setTouched(prev => ({ ...prev, [field]: true }));
    }
    setErrors(newErrors);
    return isValid;
  }, [values, validateField, validationRules]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (validateAllFields()) {
        onSubmit(values);
      }
    },
    [validateAllFields, onSubmit, values],
  );

  const register = useCallback(
    <K extends keyof T>(field: K) => {
      return {
        name: field,
        value: values[field],
        onChange: (
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | T[K],
        ) => {
          const newValue =
            typeof e === "object" &&
            e !== null &&
            "target" in e &&
            (e.target instanceof HTMLInputElement ||
              e.target instanceof HTMLTextAreaElement)
              ? e.target.value
              : e;

          handleChange(field, newValue as T[K]);
        },
        onBlur: () => handleBlur(field),
        error: touched[field] ? errors[field] : undefined,
        hasError: Boolean(errors[field]),
      };
    },
    [values, errors, touched, handleChange, handleBlur],
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({} as Record<keyof T, boolean>);
  }, [initialValues]);

  const getFormValidity = useCallback(() => {
    for (const key in validationRules) {
      const field = key as keyof T;
      const error = validateField(field, values[field]);
      if (error) {
        return false;
      }
    }
    return true;
  }, [values, validateField, validationRules]);

  const formIsValid = useMemo(() => getFormValidity(), [getFormValidity]);

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    register,
    validateAllFields,
    reset,
    setValues,
    formIsValid,
  };
};
