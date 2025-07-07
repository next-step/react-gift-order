import styled from '@emotion/styled';
import type { ChangeEvent } from 'react';

const Content = styled.section`
  padding: 0 16px;
  background: #fff;
  margin-bottom: 8px;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  ${({ theme }) => theme.typography.title2Bold};
  padding: 12px 0;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 8px 12px;
  align-items: center;
  margin-bottom: 24px;
`;

const Label = styled.label`
  ${({ theme }) => theme.typography.body1Regular};
`;

const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 8px 12px;
  box-sizing: border-box;
  ${({ theme }) => theme.typography.body1Regular};
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  border-radius: 8px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[600]};
  }
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

interface Value {
  name: string;
  phone: string;
  qty: number;
}

interface Props {
  value: Value;
  onChange: (v: Value) => void;
}

export default function ReceiverInfo({ value, onChange }: Props) {
  const update = (field: keyof Value) => (e: ChangeEvent<HTMLInputElement>) => {
    const v = field === 'qty' ? Number(e.target.value) : e.target.value;
    onChange({ ...value, [field]: v });
  };

  return (
    <Content>
      <Title>받는 사람</Title>

      <Row>
        <Label htmlFor="recvName">이름</Label>
        <Input
          id="recvName"
          placeholder="이름을 입력하세요."
          value={value.name}
          onChange={update('name')}
        />

        <Label htmlFor="recvPhone">전화번호</Label>
        <Input
          id="recvPhone"
          placeholder="전화번호를 입력하세요."
          value={value.phone}
          onChange={update('phone')}
        />

        <Label htmlFor="recvQty">수량</Label>
        <Input id="recvQty" type="number" min={1} value={value.qty} onChange={update('qty')} />
      </Row>
    </Content>
  );
}
