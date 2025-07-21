import { validateEmail, validatePassword } from '@/utils/validation';

export class LoginFormModel {
  email = '';
  password = '';

  constructor(initialValues?: Partial<LoginFormModel>) {
    if (initialValues) {
      this.email = initialValues.email || '';
      this.password = initialValues.password || '';
    }
  }

  validate() {
    const errors: Partial<Record<keyof LoginFormModel, string>> = {};

    const emailError = validateEmail(this.email);
    if (emailError) {
      errors.email = emailError;
    }

    const passwordError = validatePassword(this.password);
    if (passwordError) {
      errors.password = passwordError;
    }

    return errors;
  }

  toPlainObject() {
    return {
      email: this.email,
      password: this.password,
    };
  }
}
