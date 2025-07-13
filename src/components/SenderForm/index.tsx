import React from 'react';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { OrderFormValues } from '@/pages/OrderPage';
import { Container, Input, Hint, ErrorMessage, Title } from './styles';
import {
  SENDER_TITLE,
  SENDER_HINT,
} from './constants';

interface SenderFormProps {
  register: UseFormRegister<OrderFormValues>;
  errors: FieldErrors<OrderFormValues>;
}

function SenderForm({ register, errors }: SenderFormProps) {
  return (
    <Container>
      <Title>{SENDER_TITLE}</Title>
      <Input
        {...register('senderName')}
      />
      <Hint>{SENDER_HINT}</Hint>
      {errors.senderName && <ErrorMessage>{errors.senderName.message}</ErrorMessage>}
    </Container>
  );
}

export default SenderForm;
