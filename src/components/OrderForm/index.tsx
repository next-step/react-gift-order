import React from 'react';
import { Form, Container, Input, Hint, InputRow, Label, FixedButton, Button, ErrorMessage, Title } from './styles';
import {
  SENDER_TITLE,
  SENDER_HINT,
  RECEIVER_TITLE,
  NAME_LABEL,
  PHONE_LABEL,
  QUANTITY_LABEL,
  formatOrderButtonText,
} from './constants';
import { useOrderForm } from './useOrderForm';

interface OrderFormProps {
  productPrice: number;
  productName: string;
  message: string;
}

function OrderForm({ productPrice, productName, message }: OrderFormProps) {
  const { formData, errors, handleChange, handleSubmit } = useOrderForm({
    productPrice,
    productName,
    message,
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <Title>{SENDER_TITLE}</Title>
        <Input
          name="senderName"
          value={formData.senderName}
          onChange={handleChange}
        />
        <Hint>{SENDER_HINT}</Hint>
        {errors.senderName && <ErrorMessage>{errors.senderName}</ErrorMessage>}
      </Container>
      <Container>
        <Title>{RECEIVER_TITLE}</Title>
        <InputRow>
          <Label>{NAME_LABEL}</Label>
          <Input
            name="receiverName"
            value={formData.receiverName}
            onChange={handleChange}
          />
        </InputRow>
        {errors.receiverName && <ErrorMessage>{errors.receiverName}</ErrorMessage>}
        <InputRow>
          <Label>{PHONE_LABEL}</Label>
          <Input
            name="receiverPhone"
            value={formData.receiverPhone}
            onChange={handleChange}
          />
        </InputRow>
        {errors.receiverPhone && <ErrorMessage>{errors.receiverPhone}</ErrorMessage>}
        <InputRow>
          <Label>{QUANTITY_LABEL}</Label>
          <Input
            type='number'
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </InputRow>
        {errors.quantity && <ErrorMessage>{errors.quantity}</ErrorMessage>}
      </Container>
      <FixedButton>
        <Button type="submit">
          {formatOrderButtonText(formData.quantity * productPrice)}
        </Button>
      </FixedButton>
    </Form>
  );
}

export default OrderForm;
