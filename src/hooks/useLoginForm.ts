import { useInput } from './useInput';
import { validateEmail, validatePassword } from '@/utils/validation';

export function useLoginForm() {
  const emailInput = useInput({ validator: validateEmail });
  const passwordInput = useInput({ validator: validatePassword });

  const isEmailValid = validateEmail(emailInput.value) === null;
  const isPasswordValid = validatePassword(passwordInput.value) === null;
  const isFormValid = isEmailValid && isPasswordValid;

  return {
    emailInput,
    passwordInput,
    isFormValid,
  };
}
