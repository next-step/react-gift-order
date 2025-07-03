import type { Rule } from '@/utils/validateValue'

/**
 * ? 참고용 Rule 타입 목록
  type Rule = {
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
 */

// * 유효성 검증을 위한 규칙 데이터 관리
// ? (객체 타입 지정을 위해 Record 이용)
// ! 필드명을 고정(한정)하고 싶지 않아 string 타입으로 두었는데,
// ! 이 경우 단순히 Record<> 로 두면 잘못된 필드명 사용 시 걸러지지 않는 문제 발생
// ! 따라서, as const satisfies Record<> 구문을 이용하여 타입 유도
export const VALIDATE_RULES = {
  email: {
    required: { value: true, errorMsg: 'ID를 입력해주세요.' },
    regex: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      errorMsg: 'ID는 이메일 형식으로 입력해주세요.',
    },
  },
  password: {
    required: { value: true, errorMsg: 'PW를 입력해주세요.' },
    minLength: { value: 8, errorMsg: 'PW는 최소 8글자 이상이어야 합니다.' },
  },
} as const satisfies Record<string, Rule>
