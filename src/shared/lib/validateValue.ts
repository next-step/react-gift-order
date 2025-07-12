// * 유효성 검증을 위한 규칙 타입
export type Rule = {
  required?: {
    value: boolean
    errorMsg?: string
  }
  regex?: {
    value: RegExp
    errorMsg?: string
  }
  minLength?: {
    value: number
    errorMsg?: string
  }
  custom?: {
    value: (value: string) => boolean
    errorMsg?: string
  }
}

/**
 * * value에 대해 여러 유효성 검사를 수행하는 유틸 함수
 */
export const validateValue = (value: string, rules: Rule): string | null => {
  const trimmedValue = value.trim()

  if (rules.required && !trimmedValue) {
    return rules.required.errorMsg || '필수 입력 항목입니다.'
  }

  if (rules.regex && !rules.regex.value.test(trimmedValue)) {
    return rules.regex.errorMsg || '형식이 올바르지 않습니다.'
  }

  if (rules.minLength && trimmedValue.length < rules.minLength.value) {
    return rules.minLength.errorMsg || `${rules.minLength}자 이상 입력해주세요.`
  }

  if (rules.custom && !rules.custom.value(trimmedValue)) {
    return rules.custom.errorMsg || '유효하지 않은 입력입니다.'
  }

  return null
}
