/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useState } from "react";
import { MESSAGE_CARD_LIST } from "../../mocks/messagecard_mock";
import type { MessageCard } from "../../mocks/types";

const MessageCardSection = () => {
  const [selectedCard, setSelectedCard] = useState<MessageCard>(
    MESSAGE_CARD_LIST[0]
  );
  const [message, setMessage] = useState(selectedCard.defaultTextMessage);

  const handleSelect = (card: MessageCard) => {
    setSelectedCard(card);
    setMessage(card.defaultTextMessage);
  };

  return (
    <>
      <ThumbList>
        {MESSAGE_CARD_LIST.map((card) => (
          <ThumbButton
            key={card.id}
            onClick={() => handleSelect(card)}
            selected={selectedCard.id === card.id}
          >
            <ThumbImg src={card.thumbUrl} alt="thumb" height={50} />
          </ThumbButton>
        ))}
      </ThumbList>

      <PreviewImage src={selectedCard.imageUrl} alt="preview" />

      <MessageInput
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 10px;
`;

const ThumbList = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray600};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray100};
  }
`;

const ThumbImg = styled.img`
  border-radius: 8px;
`;

const ThumbButton = styled.button<{ selected: boolean }>`
  border: ${({ selected }) => (selected ? "3px solid black" : "none")};
  height: 56px;
  border-radius: 10px;
  padding: 0;
  background: none;
  cursor: pointer;
  margin-bottom: 3px;
`;

const PreviewImage = styled.img`
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  border-radius: 16px;
  box-shadow: 0 6px 8px lightgray;
`;

const MessageInput = styled.textarea`
  width: 90%;
  height: 40px;
  margin: 30px auto;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 10px;
  padding: 10px;
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray800};
  }
`;

export default MessageCardSection;
