/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useFormContext, useWatch } from "react-hook-form";
import { messageCards } from "@/mock/messageCards";
import type { MessageCard } from "@/mock/messageCards";
import type { OrderFormValues } from "@/validations/orderSchema";

const MessageCardSection = () => {
  const { register, setValue, control } = useFormContext<OrderFormValues>();

  const selectedCardId = useWatch({ control, name: "selectedCardId" });
  const message = useWatch({ control, name: "message" });

  const handleSelectCard = (card: MessageCard) => {
    setValue("selectedCardId", card.id);

    const isCurrentMessageDefault = messageCards.some(
      (c) => c.defaultTextMessage === message
    );

    if (isCurrentMessageDefault || !message?.trim()) {
      setValue("message", card.defaultTextMessage);
    }
  };

  const selectedCard =
    messageCards.find((card) => card.id === selectedCardId) ?? messageCards[0];

  return (
    <Wrapper>
      <ThumbList>
        {messageCards.map((card) => (
          <ThumbButton
            key={card.id}
            onClick={() => handleSelectCard(card)}
            selected={selectedCard.id === card.id}
          >
            <ThumbImg src={card.thumbUrl} alt="thumb" height={50} />
          </ThumbButton>
        ))}
      </ThumbList>

      <PreviewImage src={selectedCard.imageUrl} alt="preview" />

      <MessageInputWrapper>
        <Label>메시지 입력</Label>
        <MessageInput
          {...register("message")}
          placeholder="메시지를 입력해주세요."
        />
      </MessageInputWrapper>
    </Wrapper>
  );
};

export default MessageCardSection;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
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

const ThumbButton = styled.button<{ selected: boolean }>`
  border: ${({ selected }) => (selected ? "3px solid black" : "none")};
  height: 56px;
  border-radius: 10px;
  padding: 0;
  background: none;
  cursor: pointer;
  margin-bottom: 3px;
`;

const ThumbImg = styled.img`
  border-radius: 8px;
`;

const PreviewImage = styled.img`
  width: 100%;
  max-width: 400px;
  align-self: center;
  border-radius: 16px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
`;

const MessageInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  font-weight: bold;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.gray800};
`;

const MessageInput = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 10px;
  padding: 15px;
  background-color: #fff;
  color: black;
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray800};
  }
`;
