import { useState, useMemo } from 'react';
import { LoginFormModel } from '@/models/LoginFormModel';

export function useLoginForm(initialValues?: Partial<LoginFormModel>) {
  const [form, setForm] = useState(() => new LoginFormModel(initialValues));
  const [errors, setErrors] = useState<Partial<Record<keyof LoginFormModel, string>>>({});

  const loginFormModel = useMemo(() => new LoginFormModel(form), [form]);

  const updateForm = <K extends keyof LoginFormModel>(key: K, value: LoginFormModel[K]) => {
    setForm(prev => new LoginFormModel({ ...prev.toPlainObject(), [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent, onSubmit: (form: LoginFormModel) => void) => {
    e.preventDefault();
    const validationErrors = loginFormModel.validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(form);
    }
  };

  return { form, errors, updateForm, handleSubmit };
}
