interface RecipientForm {
  recipientName: string;
  phoneNumber: string;
  amount: number;
}

type FormValues = {
  message: string;
  senderName: string;
  recipientInfo: RecipientForm[];
};

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export const OrderInfoFormProvider = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm<FormValues>();

  return <FormProvider {...methods}>{children}</FormProvider>;
};
