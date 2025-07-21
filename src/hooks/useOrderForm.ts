import { useState, useMemo } from 'react';
import { OrderFormModel } from '@/models/OrderFormModel';
import type { OrderForm } from '@/types/order';

export function useOrderForm(initialValues?: Partial<OrderForm>) {
  const [form, setForm] = useState(() => new OrderFormModel(initialValues));
  const [errors, setErrors] = useState<OrderFormErrors>({});

  const orderFormModel = useMemo(() => new OrderFormModel(form), [form]);

  

  const updateForm = <K extends keyof OrderForm>(key: K, value: OrderForm[K]) => {
    setForm(prev => new OrderFormModel({ ...prev.toPlainObject(), [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent, onSubmit: (form: OrderForm) => void) => {
    e.preventDefault();
    const validationErrors = new OrderFormModel().validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(form);
    }
  };

  return { form, errors, updateForm, handleSubmit };
}

