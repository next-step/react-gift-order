/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useFormContext, useWatch } from "react-hook-form";
import { messageCards } from "@/mock/messageCards";
import type { MessageCard } from "@/mock/messageCards";
import type { OrderFormValues } from "@/validations/orderSchema";

const DEFAULT_MESSAGE = "와~ 축하해요";

const MessageCardSection = () => {
  const { register, setValue, control } = useFormContext<OrderFormValues>();

  const selectedCardId = useWatch({ control, name: "selectedCardId" });
  const message = useWatch({ control, name: "message" });

  const selectedCard: MessageCard =
    messageCards.find((card) => card.id === selectedCardId) || messageCards[0];

  const handleSelectCard = (card: MessageCard) => {
    setValue("selectedCardId", card.id);

    if (!message?.trim()) {
      setValue("message", DEFAULT_MESSAGE);
    }
  };

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
        <MessageInput
          {...register("message")}
          placeholder="메시지를 입력해주세요."
        />
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
