import {
  CardSelectorContainer,
  ThumbnailImage,
  ThumbnailItem,
  ThumbnailList,
  CardPreviewContainer,
  MainCardImage,
  MessageTextArea,
} from "./CardSelection.styles";
import type { OrderCardType } from "@/types/OrderCardType";

interface CardSelectionProps {
  cards: OrderCardType[];
  selectedCard: OrderCardType;
  message: string;
  onSelect: (card: OrderCardType) => void;
  onMessageChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function CardSelection({
  cards,
  selectedCard,
  message,
  onSelect,
  onMessageChange,
}: CardSelectionProps) {
  return (
    <section>
      <CardSelectorContainer>
        <ThumbnailList>
          {cards.map((card) => (
            <ThumbnailItem
              key={card.id}
              isSelected={selectedCard.id === card.id}
              onClick={() => onSelect(card)}
            >
              <ThumbnailImage src={card.thumbUrl} alt={`card-${card.id}`} />
            </ThumbnailItem>
          ))}
        </ThumbnailList>
      </CardSelectorContainer>
      <CardPreviewContainer>
        <MainCardImage src={selectedCard.imageUrl} alt="selected-card" />
        <MessageTextArea
          value={message}
          onChange={onMessageChange}
          placeholder="메시지를 입력해주세요."
        />
      </CardPreviewContainer>
    </section>
  );
}

export default CardSelection;
