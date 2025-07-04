import FormErrorMessage from "@/pages/LoginPage/components/FormErrorMessage";
import {
  CardSelectorContainer,
  ThumbnailImage,
  ThumbnailItem,
  ThumbnailList,
  CardPreviewContainer,
  MainCardImage,
  MessageTextArea,
  MessageTextAreaContainer,
} from "./CardSelection.styles";
import type { OrderCardType } from "@/types/OrderCardType";
import CARD_SELECTION_CONSTANTS from "@/pages/OrderPage/constants/cardSelection";

interface CardSelectionProps {
  cards: OrderCardType[];
  selectedCard: OrderCardType;
  message: string;
  onSelect: (card: OrderCardType) => void;
  onMessageChange: (value: string) => void;
  hasCardSelectionError: boolean;
  cardSelectionErrorMessage: string | null;
}

function CardSelection({
  cards,
  selectedCard,
  message,
  onSelect,
  onMessageChange,
  hasCardSelectionError,
  cardSelectionErrorMessage,
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
        <MessageTextAreaContainer>
          <MessageTextArea
            value={message}
            onChange={(e) => onMessageChange(e.target.value)}
            placeholder={CARD_SELECTION_CONSTANTS.MESSAGE_PLACEHOLDER}
            hasError={hasCardSelectionError}
          />
          {hasCardSelectionError && cardSelectionErrorMessage && (
            <FormErrorMessage
              errorMessage={CARD_SELECTION_CONSTANTS.MESSAGE_ERROR}
            />
          )}
        </MessageTextAreaContainer>
      </CardPreviewContainer>
    </section>
  );
}

export default CardSelection;
