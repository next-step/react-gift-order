import {
  useState,
  useCallback,
  useMemo,
  type FormEvent,
  type ChangeEvent,
} from "react";
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

  const getEventValue = <T>(
    eventOrValue: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | T,
  ): T | string => {
    if (
      typeof eventOrValue === "object" &&
      eventOrValue !== null &&
      "target" in eventOrValue
    ) {
      return (
        eventOrValue as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ).target.value;
    }
    return eventOrValue as T;
  };

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
      const error = validateField(field, value);
      setErrors(prev => ({ ...prev, [field]: error }));
    },
    [validateField],
  );

  const handleBlur = useCallback(
    <K extends keyof T>(field: K) => {
      setTouched(prev => ({ ...prev, [field]: true }));
      setValues(prev => {
        const error = validateField(field, prev[field]);
        setErrors(errors => ({ ...errors, [field]: error }));
        return prev;
      });
    },
    [validateField],
  );

  const validateAllFields = useCallback(() => {
    let isValid = true;

    setValues(currentValues => {
      const newErrors = Object.keys(validationRules).reduce((acc, key) => {
        const field = key as keyof T;
        const error = validateField(field, currentValues[field]);
        if (error) {
          acc[field] = error;
          isValid = false;
        }
        return acc;
      }, {} as ValidationErrors<T>);

      setErrors(newErrors);
      setTouched(prev => ({
        ...prev,
        ...Object.keys(validationRules).reduce(
          (acc, key) => {
            acc[key as keyof T] = true;
            return acc;
          },
          {} as Record<keyof T, boolean>,
        ),
      }));

      return currentValues;
    });

    return isValid;
  }, [validationRules, validateField]);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setValues(currentValues => {
        const newErrors = Object.keys(validationRules).reduce((acc, key) => {
          const field = key as keyof T;
          const error = validateField(field, currentValues[field]);
          if (error) {
            acc[field] = error;
          }
          return acc;
        }, {} as ValidationErrors<T>);

        const isValid = Object.keys(newErrors).length === 0;

        if (isValid) {
          onSubmit(currentValues);
        } else {
          setErrors(newErrors);
        }

        return currentValues;
      });
    },
    [validationRules, validateField, onSubmit],
  );

  const register = useCallback(
    <K extends keyof T>(field: K) => ({
      name: String(field),
      value: values[field],
      onChange: (
        eventOrValue:
          | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          | T[K],
      ) => {
        const newValue = getEventValue(eventOrValue);
        handleChange(field, newValue as T[K]);
      },
      onBlur: () => handleBlur(field),
      error: touched[field] ? errors[field] : undefined,
      hasError: !!errors[field] && !!touched[field],
    }),
    [values, errors, touched, handleChange, handleBlur],
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({} as Record<keyof T, boolean>);
  }, [initialValues]);

  const getFormValidity = useCallback(() => {
    return Object.keys(validationRules).every(key => {
      const field = key as keyof T;
      return !validateField(field, values[field]);
    });
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
