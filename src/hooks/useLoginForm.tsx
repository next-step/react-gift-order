import { useState } from 'react';

interface LoginFormState {
  id: string;
  password: string;
}

export const useLoginForm = () => {
  const [form, setForm] = useState<LoginFormState>({
    id: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    form,
    handleChange,
  };
};
