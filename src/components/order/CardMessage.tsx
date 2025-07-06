import styled from '@emotion/styled';
import type { CardTemplate } from '@/mock/cardTemplates';

const Content = styled.section`
  padding: 12px 16px;
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

const TextArea = styled.textarea`
  width: 100%;
  min-height: 62px;
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  border-radius: 8px;
  padding: 8px 12px;
  box-sizing: border-box;
  resize: vertical;
  ${({ theme }) => theme.typography.body1Regular};
  margin-bottom: 22px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

interface Props {
  tpl: CardTemplate;
  message: string;
  onMessageChange: (msg: string) => void;
}

export default function CardMessage({ tpl, message, onMessageChange }: Props) {
  return (
    <Content>
      <BigImg src={tpl.imageUrl} alt="카드보기" />
      <TextArea value={message} onChange={(e) => onMessageChange(e.target.value)} />
    </Content>
  );
}
