import { useValidationInput } from './useValidationInput';
import { validateMessage, validateName, validatePhone, validateCount } from '@/utils/validators';

export function useOrderForm() {
  const message = useValidationInput(validateMessage, '');
  const senderName = useValidationInput(validateName, '');
  const receiverName = useValidationInput(validateName, '');
  const receiverPhoneNumber = useValidationInput(validatePhone, '');
  const itemCount = useValidationInput(validateCount, 1);

  const validateAll = () =>
    message.isValid &&
    senderName.isValid &&
    receiverName.isValid &&
    receiverPhoneNumber.isValid &&
    itemCount.isValid;

  return {
    message,
    senderName,
    receiverName,
    receiverPhoneNumber,
    itemCount,
    validateAll,
  };
}
