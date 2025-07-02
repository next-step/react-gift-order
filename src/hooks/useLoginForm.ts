import { useState } from 'react';
import type { ChangeEvent, FocusEvent } from 'react';

export interface LoginState {
  email: string;
  password: string;
}
export interface LoginErrors {
  email?: string;
  password?: string;
}

const emailRegex = /^[0-9a-zA-Z]([.-]?[0-9a-zA-Z])*@[0-9a-zA-Z]([.-]?[0-9a-zA-Z])*\.[a-zA-Z]{2,}$/;

export default function useLoginForm() {
  const [values, setValues] = useState<LoginState>({ email: '', password: '' });
  const [errors, setErrors] = useState<LoginErrors>({});

  const validate = (name: keyof LoginState, value: string) => {
    switch (name) {
      case 'email':
        if (!value.trim()) return 'ID를 입력해주세요.';
        if (!emailRegex.test(value)) return 'ID는 이메일 형식으로 입력해주세요.';
        return;
      case 'password':
        if (!value.trim()) return 'PW를 입력해주세요.';
        if (value.length < 8) return 'PW는 최소 8글자 이상이어야 합니다.';
        return;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validate(name as any, value) }));
  };

  const isValid = !validate('email', values.email) && !validate('password', values.password);

  return { values, errors, handleChange, handleBlur, isValid };
}
