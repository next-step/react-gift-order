import { cardData } from "@/mocks/orderCardData";
import { useState } from "react";

const GiftMessageSection = () => {
  const [selectedCardId, setSelectedCardId] = useState(cardData[0].id);
  const selectedCard = cardData.find((card) => card.id === selectedCardId);

  return (
    <div>
      <div style={{ display: "flex", overflowX: "auto", padding: "8px 0" }}>
        {cardData.map((card) => (
          <img
            key={card.id}
            src={card.thumbUrl}
            alt="card thumbnail"
            onClick={() => setSelectedCardId(card.id)}
            style={{
              width: 56,
              height: 56,
              borderRadius: 8,
              marginRight: 8,
              border: card.id === selectedCardId ? "2px solid black" : "none",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      {selectedCard && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "16px 0",
          }}
        >
          <img
            src={selectedCard.imageUrl}
            alt="selected card"
            style={{ width: 320, borderRadius: 12 }}
          />
        </div>
      )}

      <textarea
        value={selectedCard?.defaultTextMessage ?? ""}
        readOnly
        style={{
          width: "100%",
          border: "1px solid #ccc",
          borderRadius: 8,
          padding: 12,
          fontSize: 16,
          resize: "none",
        }}
      />
    </div>
  );
};

export default GiftMessageSection;
