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
  ErrorMessageWrapper,
} from "./CardSelection.styles";
import type { OrderCardType } from "@/types/OrderCardType";
import CARD_SELECTION_CONSTANTS from "@/pages/OrderPage/constants/cardSelection";
import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import { FORM_FIELD } from "../../constants/formField";
import type { MessageCardFormData } from "../../schemas";

interface CardSelectionProps {
  cards: OrderCardType[];
  control: Control<MessageCardFormData>;
  errors: FieldErrors<MessageCardFormData>;
  messageCard: OrderCardType;
  setMessageCard: (card: OrderCardType) => void;
}

function CardSelection({
  cards,
  control,
  errors,
  messageCard,
  setMessageCard,
}: CardSelectionProps) {
  const selectedCard = cards.find((card) => card.id === messageCard.id);

  return (
    <section>
      <CardSelectorContainer>
        <ThumbnailList>
          {cards.map((card) => (
            <ThumbnailItem
              key={card.id}
              isSelected={messageCard.id === card.id}
              onClick={() => setMessageCard(card)}
            >
              <ThumbnailImage src={card.thumbUrl} alt={`card-${card.id}`} />
            </ThumbnailItem>
          ))}
        </ThumbnailList>
      </CardSelectorContainer>
      <CardPreviewContainer>
        <MainCardImage src={selectedCard?.imageUrl} alt="selected-card" />
        <MessageTextAreaContainer>
          <Controller
            name={FORM_FIELD.CARD_MESSAGE}
            control={control}
            render={({ field }) => (
              <>
                <MessageTextArea
                  {...field}
                  placeholder={CARD_SELECTION_CONSTANTS.MESSAGE_PLACEHOLDER}
                  hasError={!!errors.cardMessage}
                />
                {errors.cardMessage && (
                  <ErrorMessageWrapper>
                    <FormErrorMessage
                      errorMessage={
                        errors.cardMessage.message ||
                        CARD_SELECTION_CONSTANTS.MESSAGE_ERROR
                      }
                    />
                  </ErrorMessageWrapper>
                )}
              </>
            )}
          />
        </MessageTextAreaContainer>
      </CardPreviewContainer>
    </section>
  );
}

export default CardSelection;
