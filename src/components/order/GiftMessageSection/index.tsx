import { cardData } from "@/mocks/orderCardData";
import { whiteSectionStyle } from "@/styles/CommonStyles";
import theme from "@/styles/theme";
import { useState, useEffect } from "react";
import {
  cardListStyle,
  selectedCardStyle,
  messageInputStyle,
  cardThumbnailStyle,
  selectedCardImageStyle,
} from "./styles";

const GiftMessageSection = () => {
  const [selectedCardId, setSelectedCardId] = useState(cardData[0].id);
  const selectedCard = cardData.find((card) => card.id === selectedCardId);

  const [message, setMessage] = useState(
    selectedCard?.defaultTextMessage ?? ""
  );

  useEffect(() => {
    setMessage(selectedCard?.defaultTextMessage ?? "");
  }, [selectedCard]);

  return (
    <div css={whiteSectionStyle(theme)}>
      <div css={cardListStyle}>
        {cardData.map((card) => (
          <img
            key={card.id}
            src={card.thumbUrl}
            alt="card thumbnail"
            onClick={() => setSelectedCardId(card.id)}
            css={cardThumbnailStyle(card.id === selectedCardId)}
          />
        ))}
      </div>

      {selectedCard && (
        <div css={selectedCardStyle}>
          <img
            src={selectedCard.imageUrl}
            alt="selected card"
            css={selectedCardImageStyle}
          />
        </div>
      )}

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        css={messageInputStyle}
      />
    </div>
  );
};

export default GiftMessageSection;
