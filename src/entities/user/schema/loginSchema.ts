import { z } from 'zod'
import { VALIDATE_RULES } from '@/shared/lib/validateRules'

// * 로그인 폼 스키마 정의 (기존 VALIDATE_RULES 활용)
export const loginSchema = z.object({
  // * 이메일 (email 규칙 사용)
  email: z
    .string()
    .min(1, VALIDATE_RULES.email.required?.errorMsg)
    .regex(VALIDATE_RULES.email.regex?.value, VALIDATE_RULES.email.regex?.errorMsg),

  // * 비밀번호 (password 규칙 사용)
  password: z
    .string()
    .min(1, VALIDATE_RULES.password.required?.errorMsg)
    .min(VALIDATE_RULES.password.minLength?.value, VALIDATE_RULES.password.minLength?.errorMsg),
})

export type LoginFormData = z.infer<typeof loginSchema>
