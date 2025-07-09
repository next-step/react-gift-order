import { ERROR_MESSAGES } from "@/constants/messages"
import type { FormField } from "@/pages/OrderPage"

export const getErrorMessage = (
  hasError: (field: FormField) => boolean,
  field: FormField
): string | undefined => (hasError(field) ? ERROR_MESSAGES[field] : undefined)
