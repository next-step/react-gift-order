import type { MessageCard } from '../MessageCardSelector/MessageCardSelector';
import * as S from './SelectedCardPreview.styles';

interface Props {
  card: MessageCard;
  message: string;
  onChange: (value: string) => void;
}

const SelectedCardPreview = ({ card, message, onChange }: Props) => {
  return (
    <>
      <S.ImageWrapper>
        <img src={card.imageUrl} alt="미리보기" />
      </S.ImageWrapper>
      <S.Textarea
        placeholder="카드에 들어갈 메시지를 입력하세요"
        value={message}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default SelectedCardPreview;
