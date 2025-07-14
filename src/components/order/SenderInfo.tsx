import styled from '@emotion/styled';
import type { UseFormRegisterReturn } from 'react-hook-form';

const Content = styled.section`
  padding: 0 16px 24px;
  background: #fff;
  margin-bottom: 8px;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  ${({ theme }) => theme.typography.title2Bold};
  padding: 12px 0;
`;

const Input = styled.input<{ error: boolean }>`
  padding: 8px 12px;
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  ${({ theme }) => theme.typography.body1Regular}
  border: 1px solid ${({ theme, error }) =>
    error ? theme.colors.red[600] : theme.colors.gray[400]};
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

const Error = styled.p`
  ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.colors.red[600]};
  margin-left: 8px;
`;

const LabelText = styled.p`
  margin-left: 8px;
  ${({ theme }) => theme.typography.label2Regular}
  color: ${({ theme }) => theme.colors.gray[600]};
`;

interface Props {
  register: UseFormRegisterReturn;
  error?: string;
}

export default function SenderInfo({ register, error }: Props) {
  return (
    <Content>
      <Title>보내는 사람</Title>
      <Input placeholder="이름을 입력하세요." {...register} error={!!error} />
      {error ? (
        <Error>{error}</Error>
      ) : (
        <LabelText>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</LabelText>
      )}
    </Content>
  );
}
