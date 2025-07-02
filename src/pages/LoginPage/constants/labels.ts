import { deepFreeze } from "@/utils/deepFreeze";

export const LOGIN_LABELS = deepFreeze({
  EMAIL_PLACEHOLDER: "이메일",
  PASSWORD_PLACEHOLDER: "비밀번호",
  LOGIN_BUTTON: "로그인",
} as const);

export const LOGIN_ERROR_MESSAGES = deepFreeze({
  EMAIL_EMPTY: "ID를 입력해주세요.",
  EMAIL_FORMAT_INVALID: "ID는 이메일 형식으로 입력해주세요.",
  PASSWORD_EMPTY: "PW를 입력해주세요.",
  PASSWORD_FORMAT_INVALID: "PW는 최소 8자 이상이어야 합니다.",
} as const);
