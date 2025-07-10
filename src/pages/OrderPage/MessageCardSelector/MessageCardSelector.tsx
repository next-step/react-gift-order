import * as S from './MessageCardSelector.styles';

export interface MessageCard {
  id: number;
  thumbUrl: string;
  imageUrl: string;
  defaultTextMessage: string;
}

interface Props {
  cards: MessageCard[];
  selectedId: number | null;
  onSelect: (card: MessageCard) => void;
}

const MessageCardSelector = ({ cards, selectedId, onSelect }: Props) => {
  return (
    <S.Container>
      {cards.map((card) => (
        <S.Card key={card.id} isSelected={card.id === selectedId} onClick={() => onSelect(card)}>
          <S.Thumbnail src={card.thumbUrl} alt={card.defaultTextMessage} />
        </S.Card>
      ))}
    </S.Container>
  );
};

export default MessageCardSelector;
