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

const Input = styled.input`
  padding: 8px 12px;
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  ${({ theme }) => theme.typography.body1Regular}
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  border-radius: 8px;
  margin-bottom: 4px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[600]};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

const LabelText = styled.p`
  margin-left: 8px;
  ${({ theme }) => theme.typography.label2Regular}
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-bottom: 24px;
`;

interface Props {
  sender: string;
  onChange: (v: string) => void;
}

export default function SenderInfo({ sender, onChange }: Props) {
  return (
    <Content>
      <Title>보내는 사람</Title>
      <Input
        placeholder="이름을 입력하세요."
        value={sender}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      />
      <LabelText>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</LabelText>
    </Content>
  );
}
