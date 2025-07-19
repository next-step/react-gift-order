import styled from '@emotion/styled';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { TextArea } from '@/components/common/TextArea';
import type { OrderForm as OrderFormType } from '@/types/order';

interface OrderFormProps {
  form: OrderFormType;
  errors: Partial<Record<keyof OrderFormType, string>>;
  updateForm: <K extends keyof OrderFormType>(key: K, value: OrderFormType[K]) => void;
  handleSubmit: (e: React.FormEvent) => void;
  totalPrice: number;
}

export function OrderForm({
  form,
  errors,
  updateForm,
  handleSubmit,
  totalPrice,
}: OrderFormProps) {
  return (
    <Form onSubmit={handleSubmit}>
      <FieldSet>
        <TextArea
          placeholder="메시지를 입력해주세요."
          value={form.message}
          onChange={e => updateForm('message', e.target.value)}
          error={errors.message}
        />
      </FieldSet>

      <Divider />

      <FieldSet>
        <Legend>보내는 사람</Legend>
        <Input
          placeholder="이름을 입력하세요."
          value={form.senderName}
          onChange={e => updateForm('senderName', e.target.value)}
          error={errors.senderName}
        />
      </FieldSet>

      <Divider />

      <FieldSet>
        <Legend>받는 사람</Legend>
        <Input
          placeholder="이름을 입력하세요."
          value={form.receiverName}
          onChange={e => updateForm('receiverName', e.target.value)}
          error={errors.receiverName}
        />
        <Input
          placeholder="전화번호를 입력하세요."
          value={form.receiverPhoneNumber}
          onChange={e => updateForm('receiverPhoneNumber', e.target.value)}
          error={errors.receiverPhoneNumber}
        />
      </FieldSet>

      <Divider />

      <FieldSet>
        <Legend>수량</Legend>
        <Input
          type="number"
          value={form.quantity}
          onChange={e => updateForm('quantity', Math.max(1, parseInt(e.target.value, 10) || 1))}
          error={errors.quantity}
        />
      </FieldSet>

      <SubmitButton type="submit">{`${totalPrice.toLocaleString()}원 주문하기`}</SubmitButton>
    </Form>
  );
}

const Form = styled.form`
  padding: 20px;
`;

const FieldSet = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Legend = styled.legend`
  ${({ theme }) => theme.typography.body.body1Bold};
  margin-bottom: 8px;
`;

const Divider = styled.div`
  height: 8px;
  background-color: ${({ theme }) => theme.colors.gray.gray100};
  margin: 24px -20px;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 24px;
`;
