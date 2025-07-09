import React from 'react';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Container, Input, Hint, InputRow, Label, ErrorMessage, Title } from './styles';
import {
  SENDER_TITLE,
  SENDER_HINT,
  RECEIVER_TITLE,
  NAME_LABEL,
  PHONE_LABEL,
  QUANTITY_LABEL,
  SENDER_NAME_ERROR,
  RECEIVER_NAME_ERROR,
  RECEIVER_PHONE_ERROR,
  PHONE_REGEX_ERROR,
  QUANTITY_MIN_ERROR,
} from './constants';
import type { IFormData } from '@/types/order.d';

interface OrderFormProps {
  register: UseFormRegister<IFormData>;
  errors: FieldErrors<IFormData>;
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
      <Container>
        <Title>{RECEIVER_TITLE}</Title>
        <InputRow>
          <Label>{NAME_LABEL}</Label>
          <Input
            {...register('receiverName', { required: RECEIVER_NAME_ERROR })}
          />
        </InputRow>
        {errors.receiverName && <ErrorMessage>{errors.receiverName.message}</ErrorMessage>}
        <InputRow>
          <Label>{PHONE_LABEL}</Label>
          <Input
            {...register('receiverPhone', {
              required: RECEIVER_PHONE_ERROR,
              pattern: {
                value: /^010\d{8}$/,
                message: PHONE_REGEX_ERROR,
              },
            })}
          />
        </InputRow>
        {errors.receiverPhone && <ErrorMessage>{errors.receiverPhone.message}</ErrorMessage>}
        <InputRow>
          <Label>{QUANTITY_LABEL}</Label>
          <Input
            type='number'
            {...register('quantity', {
              required: true,
              min: {
                value: 1,
                message: QUANTITY_MIN_ERROR,
              },
              valueAsNumber: true,
            })}
          />
        </InputRow>
        {errors.quantity && <ErrorMessage>{errors.quantity.message}</ErrorMessage>}
      </Container>
    </>
  );
}

export default OrderForm;
