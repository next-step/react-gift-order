import { useValidationInput } from './useValidationInput';
import { validateEmail, validatePassword } from '@/utils/validators';

export function useLoginForm() {
  const email = useValidationInput(validateEmail, '');
  const password = useValidationInput(validatePassword, '');

  const isFormValid = email.isValid && password.isValid;

  return { email, password, isFormValid };
}
