import { useState } from "react";

type ValidatorMap = Record<string, (value: string) => boolean>;

/**
 * 범용 입력 필드 상태 관리 및 검증 훅
 *
 * 입력 필드의 상태와 검증 로직만을 담당하며, 결합도를 줄이기 위해 에러 메시지 로직은 처리하지 않음
 * 에러 메시지는 사용처에서 errors 객체를 기반으로 처리해야 함
 *
 * @param initialValue - 입력 필드의 초기값
 * @param validators - 검증 함수들의 객체
 * @returns
 *   - value: 현재 입력값
 *   - errors: validators와 동일한 구조의 에러 객체 (각 키별로 boolean 값)
 *   - handleValueChange: 입력값 변경 함수
 *   - validate: 검증 실행 함수
 *   - hasError: 하나라도 에러가 있는지 여부
 */
export function useInput<T extends ValidatorMap>(
  initialValue = "",
  validators: T
) {
  const [value, setValue] = useState(initialValue);
  const [errors, setErrors] = useState<{ [K in keyof T]: boolean }>(() => {
    const initialErrors = {} as { [K in keyof T]: boolean };
    Object.keys(validators).forEach((key) => {
      initialErrors[key as keyof T] = false;
    });
    return initialErrors;
  });

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
  };

  const validate = (valueToValidate: string) => {
    const trimmedValue = valueToValidate.trim();
    const newErrors = {} as { [K in keyof T]: boolean };

    Object.entries(validators).forEach(([key, validatorFn]) => {
      newErrors[key as keyof T] = !validatorFn(trimmedValue);
    });

    setErrors(newErrors);
  };

  const hasError = Object.values(errors).some((error) => error);

  return {
    value,
    errors,
    handleValueChange,
    validate,
    hasError,
  };
}
