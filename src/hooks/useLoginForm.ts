import { useInput } from './useInput';
import { validateEmail, validatePassword } from '@/utils/validation';

export function useLoginForm() {
  const emailInput = useInput({ validator: validateEmail });
  const passwordInput = useInput({ validator: validatePassword });

  const isEmailValid = emailInput.error === null;
  const isPasswordValid = passwordInput.error === null;
  const isFormValid = isEmailValid && isPasswordValid;

  return {
    emailInput,
    passwordInput,
    isFormValid,
  };
}
