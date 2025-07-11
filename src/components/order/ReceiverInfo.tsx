import styled from '@emotion/styled';
import type { UseFormRegisterReturn } from 'react-hook-form';
import { useState } from 'react';
import ReceiverListModal from './receiver/ReceiverListModal';

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

const AddButton = styled.button``;

interface Props {
  registerName: UseFormRegisterReturn;
  registerPhone: UseFormRegisterReturn;
  registerQty: UseFormRegisterReturn;
  errors?: {
    name?: string;
    phone?: string;
    qty?: string;
  };
}

export default function ReceiverInfo({
  registerName,
  registerPhone,
  registerQty,
  errors = {},
}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Content>
        <Title>받는 사람</Title>
        <AddButton type="button" onClick={() => setOpen(true)}>
          추가
        </AddButton>

        {/* 이름 필드 */}
        <Field>
          <LabelRow>
            <Label htmlFor="recvName">이름</Label>
            <Input
              id="recvName"
              placeholder="이름을 입력하세요."
              {...registerName}
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
              {...registerPhone}
              error={!!errors.phone}
            />
          </LabelRow>
          {errors.phone && <Error>{errors.phone}</Error>}
        </Field>

        {/* 수량 필드 */}
        <Field>
          <LabelRow>
            <Label htmlFor="recvQty">수량</Label>
            <Input id="recvQty" type="number" min={1} {...registerQty} error={!!errors.qty} />
          </LabelRow>
          {errors.qty && <Error>{errors.qty}</Error>}
        </Field>
      </Content>
      {open && <ReceiverListModal onClose={() => setOpen(false)} />}
    </>
  );
}
