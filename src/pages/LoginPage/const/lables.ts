import { deepFreeze } from "@/utils/deepFreeze";

export const LOGIN_ERROR_MESSAGES = deepFreeze({
  EMAIL_EMPTY: "ID를 입력해주세요.",
  EMAIL_INVALID: "ID는 이메일 형식으로 입력해주세요.",
} as const);
