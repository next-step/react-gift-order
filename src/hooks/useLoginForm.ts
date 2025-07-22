import { useInput } from '@/hooks/useInput';
import { validateEmail, validatePassword } from '@/utils/validation';

export function useLoginForm() {
  const emailInput = useInput({
    validator: validateEmail,
  });

  const passwordInput = useInput({
    validator: validatePassword,
  });

  const isFormValid = !emailInput.error && !passwordInput.error;

  return {
    emailInput,
    passwordInput,
    isFormValid,
  };
}
