/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useState } from "react";
import type { RefObject } from "react";
import { MESSAGE_CARD_LIST } from "../../mocks/messagecard_mock";
import type { MessageCard } from "../../mocks/types";

interface Props {
  inputRef: RefObject<HTMLTextAreaElement>;
  error?: string;
}

const MessageCardSection = ({ inputRef, error }: Props) => {
  const [selectedCard, setSelectedCard] = useState<MessageCard>(
    MESSAGE_CARD_LIST[0]
  );

  const handleSelect = (card: MessageCard) => {
    setSelectedCard(card);
    if (inputRef.current) {
      inputRef.current.value = card.defaultTextMessage;
    }
  };

  return (
    <Wrapper>
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

      <MessageInputWrapper>
        <MessageInput
          ref={inputRef}
          placeholder="메시지를 입력해주세요."
          defaultValue={selectedCard.defaultTextMessage}
        />
        {error && <ErrorText>{error}</ErrorText>}
      </MessageInputWrapper>
    </Wrapper>
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
  margin: 0 auto 18px;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 10px;
  padding: 10px;
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray800};
  }
`;

const MessageInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const ErrorText = styled.p`
  color: red;
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
`;

export default MessageCardSection;
