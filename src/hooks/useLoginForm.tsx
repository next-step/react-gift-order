import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

interface LoginFormState {
  id: string;
  password: string;
}

export const useLoginForm = () => {
  const [form, setForm] = useState<LoginFormState>({
    id: '',
    password: '',
  });

  const { login } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(form.id);
  };

  return {
    form,
    handleChange,
    handleSubmit,
  };
};
