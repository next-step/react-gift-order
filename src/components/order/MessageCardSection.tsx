/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useMemo, useCallback } from "react";
import { messageCards } from "@/mock/messageCards";
import type { MessageCard } from "@/mock/messageCards";

interface Props {
  message: string;
  selectedCardId: number | null;
  onChange: (field: "message" | "selectedCardId", value: string | number | null) => void;
  error?: string;
}

const MessageCardSection = ({ message, selectedCardId, onChange, error }: Props) => {
  // 선택된 카드 객체를 계산 (불필요한 useState 제거)
  const selectedCard: MessageCard = useMemo(() => {
    return messageCards.find((card) => card.id === selectedCardId) || messageCards[0];
  }, [selectedCardId]);

  const handleSelect = useCallback(
    (card: MessageCard) => {
      onChange("selectedCardId", card.id);

      // 메시지가 비어 있으면 해당 카드의 기본 메시지 적용
      if (message.trim() === "") {
        onChange("message", card.defaultTextMessage);
      }
    },
    [onChange, message]
  );

  return (
    <Wrapper>
      <ThumbList>
        {messageCards.map((card) => (
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
          value={message}
          onChange={(e) => onChange("message", e.target.value)}
          placeholder="메시지를 입력해주세요."
        />
        {error && <ErrorText>{error}</ErrorText>}
      </MessageInputWrapper>
    </Wrapper>
  );
};

export default MessageCardSection;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 10px;
`;

const ThumbList = styled.div`
  display: flex;
  gap: 10px;
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
  max-width: 400px;
  margin: 0 auto;
  border-radius: 16px;
  box-shadow: 0 6px 8px lightgray;
`;

const MessageInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const MessageInput = styled.textarea`
  width: 90%;
  height: 100px;
  margin: 0 auto 18px;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 10px;
  padding: 15px;
  background-color: #fff;
  color: black;
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.red500};
  margin: 0 0 0px 35px;
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
`;
