import { useState } from "react";

interface UseInputParams {
  initialValue?: string;
  validator: (value: string) => string;
}

/**
 * 범용 입력 필드 상태 관리 및 검증 훅
 *
 * 입력 필드의 상태와 검증 로직을 담당하며, validator 함수에서 직접 에러 메시지를 반환함
 *
 * @param initialValue - 입력 필드의 초기값
 * @param validator - 검증 함수 (에러 메시지 또는 빈 문자열 반환)
 * @returns
 *   - value: 현재 입력값
 *   - errorMessage: 현재 에러 메시지 (없으면 빈 문자열)
 *   - handleValueChange: 입력값 변경 함수
 *   - validate: 검증 실행 함수
 */
export function useInput({ initialValue = "", validator }: UseInputParams) {
  const [value, setValue] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
  };

  const validate = (valueToValidate: string) => {
    const trimmedValue = valueToValidate.trim();
    const error = validator(trimmedValue);
    setErrorMessage(error);
  };

  return {
    value,
    errorMessage,
    handleValueChange,
    validate,
  };
}
