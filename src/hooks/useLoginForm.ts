import { useInput } from './useInput';
import { validateEmail, validatePassword } from '@/utils/validation/login';

interface UseLoginFormReturn {
  email: {
    value: string;
    error: string;
    onChange: (value: string) => void;
    onBlur: () => void;
  };
  password: {
    value: string;
    error: string;
    onChange: (value: string) => void;
    onBlur: () => void;
  };
  isFormValid: boolean;
  reset: () => void;
}

export const useLoginForm = (): UseLoginFormReturn => {
  const emailInput = useInput({ validate: validateEmail });
  const passwordInput = useInput({ validate: validatePassword });

  const isFormValid =
    emailInput.isValid &&
    passwordInput.isValid &&
    emailInput.value.trim() !== '' &&
    passwordInput.value.trim() !== '';

  const reset = () => {
    emailInput.reset();
    passwordInput.reset();
  };

  return {
    email: {
      value: emailInput.value,
      error: emailInput.error,
      onChange: emailInput.onChange,
      onBlur: emailInput.onBlur,
    },
    password: {
      value: passwordInput.value,
      error: passwordInput.error,
      onChange: passwordInput.onChange,
      onBlur: passwordInput.onBlur,
    },
    isFormValid,
    reset,
  };
};
