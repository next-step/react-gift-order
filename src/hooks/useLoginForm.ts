import { useInput } from '@/hooks/useInput';
import { validateEmail, validatePassword } from '@/utils/validation';
import type { AuthState } from '@/stores/authStore';

export function useLoginForm() {
  const emailInput = useInput({
    validator: validateEmail,
  });

  const passwordInput = useInput({
    validator: validatePassword,
  });

  const isFormValid = emailInput.isValid && passwordInput.isValid;

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    login: AuthState['login'],
    navigate: (path: string, options?: { replace: boolean }) => void,
    from: string
  ) => {
    e.preventDefault();
    const isEmailValid = emailInput.validate();
    const isPasswordValid = passwordInput.validate();

    if (isEmailValid && isPasswordValid) {
      const mockUser = { nickname: '김대영', email: emailInput.value };
      login('mock_access_token', mockUser);
      navigate(from, { replace: true });
    }
  };

  return {
    emailInput,
    passwordInput,
    isFormValid,
    handleSubmit,
  };
}

