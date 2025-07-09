import { useState, useCallback } from 'react';

// 필드 설정 타입
export interface FieldConfig<T = string> {
  defaultValue: T;
  validator?: (value: T) => string | null;
  required?: boolean;
}

// 필드 상태 타입
export interface FieldState<T = string> {
  value: T;
  error: string | null;
  touched: boolean;
}

// useForm 훅의 반환 타입
export interface UseFormReturn<T extends Record<string, any>> {
  fields: { [K in keyof T]: FieldState<T[K]> };
  values: T;
  errors: { [K in keyof T]: string | null };
  isValid: boolean;
  setValue: <K extends keyof T>(field: K, value: T[K]) => void;
  setError: <K extends keyof T>(field: K, error: string | null) => void;
  setTouched: <K extends keyof T>(field: K, touched?: boolean) => void;
  validateField: <K extends keyof T>(field: K) => void;
  validateAll: () => boolean;
  reset: () => void;
  handleChange: <K extends keyof T>(field: K) => (value: T[K]) => void;
  handleBlur: <K extends keyof T>(field: K) => () => void;
}

export const useForm = <T extends Record<string, any>>(config: {
  [K in keyof T]: FieldConfig<T[K]>;
}): UseFormReturn<T> => {
  // 초기 상태 생성
  const createInitialState = () => {
    const fields: any = {};
    Object.keys(config).forEach((key) => {
      fields[key] = {
        value: config[key].defaultValue,
        error: null,
        touched: false,
      };
    });
    return fields;
  };

  const [fields, setFields] =
    useState<{ [K in keyof T]: FieldState<T[K]> }>(createInitialState);

  // 필드 값 설정
  const setValue = useCallback(<K extends keyof T>(field: K, value: T[K]) => {
    setFields((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        value,
      },
    }));
  }, []);

  // 에러 설정
  const setError = useCallback(
    <K extends keyof T>(field: K, error: string | null) => {
      setFields((prev) => ({
        ...prev,
        [field]: {
          ...prev[field],
          error,
        },
      }));
    },
    []
  );

  // touched 상태 설정
  const setTouched = useCallback(
    <K extends keyof T>(field: K, touched: boolean = true) => {
      setFields((prev) => ({
        ...prev,
        [field]: {
          ...prev[field],
          touched,
        },
      }));
    },
    []
  );

  // 특정 필드 유효성 검사
  const validateField = useCallback(
    <K extends keyof T>(field: K) => {
      const fieldConfig = config[field];
      const value = fields[field].value;

      let error: string | null = null;

      // required 검사
      if (fieldConfig.required && !value) {
        error = '필수 입력 항목입니다.';
      }
      // 커스텀 validator 검사
      else if (fieldConfig.validator) {
        error = fieldConfig.validator(value);
      }

      setError(field, error);
      return error === null;
    },
    [fields, config, setError]
  );

  // 모든 필드 유효성 검사
  const validateAll = useCallback(() => {
    let isValid = true;
    Object.keys(config).forEach((key) => {
      const fieldValid = validateField(key as keyof T);
      if (!fieldValid) {
        isValid = false;
      }
    });
    return isValid;
  }, [config, validateField]);

  // 폼 초기화
  const reset = useCallback(() => {
    setFields(createInitialState());
  }, []);

  // 필드 변경 핸들러
  const handleChange = useCallback(
    <K extends keyof T>(field: K) =>
      (value: T[K]) => {
        setValue(field, value);
        // 이미 touched된 필드는 실시간 유효성 검사
        if (fields[field].touched) {
          validateField(field);
        }
      },
    [fields, setValue, validateField]
  );

  // 필드 blur 핸들러
  const handleBlur = useCallback(
    <K extends keyof T>(field: K) =>
      () => {
        setTouched(field, true);
        validateField(field);
      },
    [setTouched, validateField]
  );

  // 현재 값들 추출
  const values = Object.keys(fields).reduce((acc, key) => {
    acc[key as keyof T] = fields[key as keyof T].value;
    return acc;
  }, {} as T);

  // 현재 에러들 추출
  const errors = Object.keys(fields).reduce(
    (acc, key) => {
      acc[key as keyof T] = fields[key as keyof T].error;
      return acc;
    },
    {} as { [K in keyof T]: string | null }
  );

  // 전체 폼 유효성 상태
  const isValid =
    Object.values(errors).every((error) => error === null) &&
    Object.keys(config).every((key) => {
      const fieldConfig = config[key];
      const value = fields[key as keyof T].value;
      return !fieldConfig.required || !!value;
    });

  return {
    fields,
    values,
    errors,
    isValid,
    setValue,
    setError,
    setTouched,
    validateField,
    validateAll,
    reset,
    handleChange,
    handleBlur,
  };
};
