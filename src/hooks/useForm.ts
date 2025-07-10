import { useState } from "react";

type Validation<T> = Partial<Record<keyof T, (value: any) => string | null>>;

export function useForm<T extends Record<string, any>>(
  initialValues: T,
  validations?: Validation<T>
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const validateAll = () => {
    const newErrors: Partial<Record<keyof T, string>> = {};
    if (validations) {
      for (const key in validations) {
        const check = validations[key];
        if (check) {
          const result = check(values[key]);
          if (result) newErrors[key] = result;
        }
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    validateAll,
  };
}
