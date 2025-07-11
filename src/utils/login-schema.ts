import { z } from "zod";
import { EMAIL_REGEX, LOGIN_ERROR_MESSAGE } from "@/constants";

export const loginSchema = z.object({
  id: z
    .string()
    .min(1, LOGIN_ERROR_MESSAGE.ID.REQUIRED)
    .refine(
      value => EMAIL_REGEX.test(value),
      LOGIN_ERROR_MESSAGE.ID.INVALID_FORMAT,
    ),
  password: z
    .string()
    .min(1, LOGIN_ERROR_MESSAGE.PASSWORD.REQUIRED)
    .min(8, LOGIN_ERROR_MESSAGE.PASSWORD.MIN_LENGTH),
});

export type LoginFormData = z.infer<typeof loginSchema>;
