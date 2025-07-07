import styled from '@emotion/styled';
import type { ChangeEvent } from 'react';

const Content = styled.section`
  padding: 0 16px 16px;
  background: #fff;
  margin-bottom: 8px;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  ${({ theme }) => theme.typography.title2Bold};
  padding: 12px 0;
`;

const Field = styled.div`
  margin-bottom: 8px;
`;

const LabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Label = styled.label`
  width: 80px;
  ${({ theme }) => theme.typography.body1Regular};
`;

const Input = styled.input<{ error?: boolean }>`
  width: 100%;
  height: 44px;
  padding: 8px 12px;
  box-sizing: border-box;
  ${({ theme }) => theme.typography.body1Regular};
  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red[600] : theme.colors.gray[400])};
  border-radius: 8px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[600]};
  }
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

const Error = styled.p`
  ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.colors.red[600]};
  margin-top: 4px;
  margin-left: 80px;
`;

interface Value {
  name: string;
  phone: string;
  qty: number;
}

interface FieldErrors {
  name?: string;
  phone?: string;
  qty?: string;
}

interface Props {
  value: Value;
  onChange: (v: Value) => void;
  errors?: FieldErrors;
}

export default function ReceiverInfo({ value, onChange, errors = {} }: Props) {
  const update = (field: keyof Value) => (e: ChangeEvent<HTMLInputElement>) =>
    onChange({ ...value, [field]: field === 'qty' ? Number(e.target.value) : e.target.value });

  return (
    <Content>
      <Title>받는 사람</Title>

      {/* 이름 필드 */}
      <Field>
        <LabelRow>
          <Label htmlFor="recvName">이름</Label>
          <Input
            id="recvName"
            placeholder="이름을 입력하세요."
            value={value.name}
            onChange={update('name')}
            error={!!errors.name}
          />
        </LabelRow>
        {errors.name && <Error>{errors.name}</Error>}
      </Field>

      {/* 전화번호 필드 */}
      <Field>
        <LabelRow>
          <Label htmlFor="recvPhone">전화번호</Label>
          <Input
            id="recvPhone"
            placeholder="전화번호를 입력하세요."
            value={value.phone}
            onChange={update('phone')}
            error={!!errors.phone}
          />
        </LabelRow>
        {errors.phone && <Error>{errors.phone}</Error>}
      </Field>

      {/* 수량 필드 */}
      <Field>
        <LabelRow>
          <Label htmlFor="recvQty">수량</Label>
          <Input
            id="recvQty"
            type="number"
            min={1}
            value={value.qty}
            onChange={update('qty')}
            error={!!errors.qty}
          />
        </LabelRow>
        {errors.qty && <Error>{errors.qty}</Error>}
      </Field>
    </Content>
  );
}
