import React from 'react';
import type { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';
import { Container, Input, Hint, ErrorMessage, Title } from './styles';
import {
  SENDER_TITLE,
  SENDER_HINT,
} from './constants';

interface IFormData {
  senderName: string;
}
interface SenderFormProps {
  register: UseFormRegister<IFormData>;
  errors: FieldErrors<IFormData>;
}


function SenderForm({ register, errors }: SenderFormProps) {
  return (
    <>
      <Container>
        <Title>{SENDER_TITLE}</Title>
        <Input
          {...register('senderName')}
        />
        <Hint>{SENDER_HINT}</Hint>
        {errors.senderName && <ErrorMessage>{errors.senderName.message}</ErrorMessage>}
      </Container>
    </>
  );
}

export default SenderForm;
