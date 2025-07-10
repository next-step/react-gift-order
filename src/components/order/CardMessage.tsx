import styled from '@emotion/styled';
import type { CardTemplate } from '@/mock/cardTemplates';
import type { UseFormRegisterReturn } from 'react-hook-form';

const Content = styled.section`
  padding: 12px 16px 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  margin-bottom: 8px;
`;

const BigImg = styled.img`
  width: 100%;
  max-width: 360px;
  aspect-ratio: 3 / 2;
  object-fit: contain;
  border-radius: 12px;
  margin-bottom: 40px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 39px 20px -30px;
`;

const TextArea = styled.textarea<{ error?: boolean }>`
  width: 100%;
  min-height: 62px;
  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red[600] : theme.colors.gray[400])};
  border-radius: 8px;
  padding: 8px 12px;
  box-sizing: border-box;
  resize: vertical;
  ${({ theme }) => theme.typography.body1Regular};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray[700]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[600]};
  }
`;

const ErrorMsg = styled.p`
  align-self: flex-start;
  ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.colors.red[600]};
  margin-top: 6px;
  margin-left: 8px;
`;

interface Props {
  tpl: CardTemplate;
  register: UseFormRegisterReturn;
  error?: string;
}

export default function CardMessage({ tpl, register, error }: Props) {
  return (
    <Content>
      <BigImg src={tpl.imageUrl} alt="카드보기" />
      <TextArea placeholder="메시지를 입력해주세요." {...register} error={!!error} />
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </Content>
  );
}
