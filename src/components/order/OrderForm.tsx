import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import RecipientsList from './RecipientsList';
import type { giftItems } from '@/mock/giftItems';


export type Recipient = {
  name: string;
  phone: string;     
  quantity: number;  
};

export type OrderFormData = {
  message: string;
  sender: string;
  recipients: Recipient[];
};


type Props = {
  onSubmit: (data: OrderFormData) => void;
  product: (typeof giftItems)[number];
  defaultMessage: string;
};

const OrderForm = ({ onSubmit, product, defaultMessage }: Props) => {
  const [form, setForm] = useState<OrderFormData>({
    message: defaultMessage,
    sender: '',
    recipients: [],
  });
  const [errors, setErrors] = useState<Partial<Record<keyof OrderFormData, string>>>({});
  const [recipientsEditable, setRecipientsEditable] = useState(false);

  useEffect(() => {
    setForm((f) => ({ ...f, message: defaultMessage }));
    setRecipientsEditable(false);
  }, [defaultMessage]);

  const validate = (): boolean => {
    const newErrors: typeof errors = {};
    if (!form.message.trim()) newErrors.message = '메시지는 반드시 입력 되어야 해요.';
    if (!form.sender.trim())  newErrors.sender  = '보내는 사람 이름이 반드시 입력 되어야 해요.';
    if (form.recipients.length < 1)
      newErrors.recipients = '최소 1명 이상의 받는 사람을 등록해야 해요.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) onSubmit(form);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FieldGroup>
        <Label>메시지</Label>
        <Textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        {errors.message && <ErrorText>{errors.message}</ErrorText>}
      </FieldGroup>

      <FieldGroup>
        <Label>보내는 사람</Label>
        <Input
          placeholder="이름을 입력하세요."
          value={form.sender}
          onChange={(e) => setForm({ ...form, sender: e.target.value })}
        />
        {errors.sender && <ErrorText>{errors.sender}</ErrorText>}
      </FieldGroup>

      <FieldGroup>
        <SectionHeader>
          <Label>받는 사람</Label>
          {form.recipients.length > 0 && (
            <EditButton
              type="button"
              onClick={() => setRecipientsEditable((v) => !v)}
            >
              {recipientsEditable ? '완료' : '수정'}
            </EditButton>
          )}
        </SectionHeader>

        <RecipientsList
          recipients={form.recipients}
          setRecipients={(r) => setForm({ ...form, recipients: r })}
          editable={recipientsEditable}
        />
        {errors.recipients && <ErrorText>{errors.recipients}</ErrorText>}
      </FieldGroup>

      <FieldGroup>
        <Label>상품 정보</Label>
        <ProductSection>
          <ProductThumb src={product.imageURL} alt={product.name} />
          <ProductInfo>
            <ProductName>{product.name}</ProductName>
            <Brand>{product.brandInfo.name}</Brand>
            <Price>{product.price.sellingPrice.toLocaleString()}원</Price>
          </ProductInfo>
        </ProductSection>
      </FieldGroup>

      <SubmitButton type="submit">주문하기</SubmitButton>
    </Form>
  );
};

export default OrderForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing4};
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing2};
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  font: ${({ theme }) => theme.typography.subtitle2Bold};
  color: ${({ theme }) => theme.textColors.default};
`;

const EditButton = styled.button`
  padding: ${({ theme }) => theme.spacing.spacing1}
    ${({ theme }) => theme.spacing.spacing2};
  font: ${({ theme }) => theme.typography.body2Bold};
  background-color: ${({ theme }) => theme.backgroundColors.fill};
  border: 1px solid ${({ theme }) => theme.borderColors.default};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.sementicColors.kakaoYellowHover};
  }
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.spacing2};
  border: 1px solid ${({ theme }) => theme.borderColors.default};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  font: ${({ theme }) => theme.typography.body2Regular};
`;

const Textarea = styled.textarea`
  padding: ${({ theme }) => theme.spacing.spacing2};
  height: 80px;
  resize: vertical;
  border: 1px solid ${({ theme }) => theme.borderColors.default};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  font: ${({ theme }) => theme.typography.body2Regular};
`;

const ErrorText = styled.span`
  font: ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.stateColors.critical};
`;

const ProductSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing3};
  padding: ${({ theme }) => theme.spacing.spacing2};
  border: 1px solid ${({ theme }) => theme.borderColors.default};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
`;

const ProductThumb = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.spacing.spacing2};
`;

const ProductInfo = styled.div``;

const ProductName = styled.div`
  font: ${({ theme }) => theme.typography.body1Bold};
`;

const Brand = styled.div`
  font: ${({ theme }) => theme.typography.body2Regular};
  color: ${({ theme }) => theme.textColors.sub};
`;

const Price = styled.div`
  font: ${({ theme }) => theme.typography.body1Bold};
  color: ${({ theme }) => theme.textColors.default};
`;

const SubmitButton = styled.button`
  margin-top: ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.sementicColors.kakaoYellow};
  color: ${({ theme }) => theme.textColors.default};
  font: ${({ theme }) => theme.typography.body1Bold};
  padding: ${({ theme }) => theme.spacing.spacing3};
  border: none;
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.sementicColors.kakaoYellowHover};
  }
`;
