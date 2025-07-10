import React from 'react';
import type { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';
import { Container, Input, Hint, ErrorMessage, Title } from './styles';
import {
  SENDER_TITLE,
  SENDER_HINT,
  SENDER_NAME_ERROR,
} from './constants';
import type { IFormData } from '@/types/order.d';

interface OrderFormProps {
  register: UseFormRegister<IFormData>;
  errors: FieldErrors<IFormData>;
  watch: UseFormWatch<IFormData>;
  productPrice: number;
}

function OrderForm({ register, errors }: OrderFormProps) {
  return (
    <>
      <Container>
        <Title>{SENDER_TITLE}</Title>
        <Input
          {...register('senderName', { required: SENDER_NAME_ERROR })}
        />
        <Hint>{SENDER_HINT}</Hint>
        {errors.senderName && <ErrorMessage>{errors.senderName.message}</ErrorMessage>}
      </Container>
    </>
  );
}

export default OrderForm;


