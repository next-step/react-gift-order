import React, { useState } from 'react';
import { Form, Container, Input, Hint, InputRow, Label, FixedButton, Button, ErrorMessage, Title } from './styles';

interface IFormData {
  senderName: string;
  receiverName: string;
  receiverPhone: string;
  quantity: number;
}

interface IFormErrors {
  senderName?: string;
  receiverName?: string;
  receiverPhone?: string;
  quantity?: string;
}

interface OrderFormProps {
  productPrice: number;
}

function OrderForm({ productPrice }: OrderFormProps) {
  const [formData, setFormData] = useState<IFormData>({
    senderName: '',
    receiverName: '',
    receiverPhone: '',
    quantity: 1,
  });

  const [errors, setErrors] = useState<IFormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'quantity' ? Number(value) : value,
    }));
  };

  const validate = (): boolean => {
    let isValid = true;
    const newErrors: IFormErrors = {};

    if (!formData.senderName) {
      newErrors.senderName = '보내는 사람 이름을 입력해주세요.';
      isValid = false;
    }

    if (!formData.receiverName) {
      newErrors.receiverName = '받는 사람 이름을 입력해주세요.';
      isValid = false;
    }

    const phoneRegex = /^010\d{8}$/;
    if (!formData.receiverPhone) {
      newErrors.receiverPhone = '받는 사람 연락처를 입력해주세요.';
      isValid = false;
    } else if (!phoneRegex.test(formData.receiverPhone)) {
      newErrors.receiverPhone = '01012341234 형식으로 입력해주세요.';
      isValid = false;
    }

    if (!formData.quantity) {
      newErrors.quantity = '수량을 입력해주세요.';
      isValid = false;
    } else if (formData.quantity < 1) {
      newErrors.quantity = '수량은 1개 이상이어야 합니다.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert(JSON.stringify(formData));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <Title>보내는 사람</Title>
        <Input
          name="senderName"
          value={formData.senderName}
          onChange={handleChange}
        />
        <Hint>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</Hint>
        {errors.senderName && <ErrorMessage>{errors.senderName}</ErrorMessage>}
      </Container>
      <Container>
        <Title>받는 사람</Title>
        <InputRow>
          <Label>이름</Label>
          <Input
            name="receiverName"
            value={formData.receiverName}
            onChange={handleChange}
          />
        </InputRow>
        {errors.receiverName && <ErrorMessage>{errors.receiverName}</ErrorMessage>}
        <InputRow>
          <Label>전화번호</Label>
          <Input
            name="receiverPhone"
            value={formData.receiverPhone}
            onChange={handleChange}
          />
        </InputRow>
        {errors.receiverPhone && <ErrorMessage>{errors.receiverPhone}</ErrorMessage>}
        <InputRow>
          <Label>수량</Label>
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
          {new Intl.NumberFormat('ko-KR').format(formData.quantity * productPrice)}원 주문하기
        </Button>
      </FixedButton>
    </Form>
  );
}

export default OrderForm;
