import { deepFreeze } from "@/utils/deepFreeze";

export const PHONE_NUMBER_REGEX = deepFreeze({
  KOREAN: /^010\d{8}$/,
} as const);
