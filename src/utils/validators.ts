import { MIN_PASSWORD_LENGTH } from "@/constants/validation";
import { ERROR_MESSAGES } from "@/constants/messages";

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email: string): string {
  if (!email) {
    return ERROR_MESSAGES.ID_EMPTY;
  }
  if (!emailRegex.test(email)) {
    return ERROR_MESSAGES.ID_INVALID;
  }
  return "";
}

export function validatePassword(pw: string): string {
  if (!pw) {
    return ERROR_MESSAGES.PW_EMPTY;
  }
  if (pw.length < MIN_PASSWORD_LENGTH) {
    return ERROR_MESSAGES.PW_TOO_SHORT(MIN_PASSWORD_LENGTH);
  }
  return "";
}
