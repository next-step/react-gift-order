import { useEmail } from './useEmail'
import { usePassword } from './usePassword'

export function useLoginForm() {
  const email = useEmail()
  const password = usePassword()

  return {
    email,
    password,
    validForm: !email.error && !password.error,
  }
}
