import Spacing from "@/components/Spacing";
import styled from "@emotion/styled";
import { ordercard } from "@/data/ordercard";
import { useState, useEffect } from "react";
import ErrorMessage from "./ErrorMessage";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error: boolean;
};

export default function GiftCardSelector({ value, onChange, error }: Props) {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  
  useEffect(() => {
    onChange({
      target: {
        value: ordercard[selectedCardIndex].defaultTextMessage,
      },
    } as React.ChangeEvent<HTMLTextAreaElement>);
  }, [selectedCardIndex, onChange]);

  return (
    <GiftCardWrapper>
      <GiftBox>
        <GiftcardBox>
          <GiftcardGird>
            {ordercard.map((card, index) => (
              <GiftCard
                key={card.id}
                src={card.thumbUrl}
                isSelected={selectedCardIndex === index}
                onClick={() => setSelectedCardIndex(index)}
              />
            ))}
            <GiftcardEndBox />
          </GiftcardGird>
        </GiftcardBox>
      </GiftBox>

      <Spacing height="12px" />

      <CardBox>
        <CardImage
          src={ordercard[selectedCardIndex].imageUrl}
          alt="message-card"
        />
      </CardBox>

      <Spacing height="40px" />

      <TextBox>
        <TextWrapper>
          <Text
            placeholder="메시지를 입력해주세요."
            value={value}
            onChange={onChange}
            error={error}
          />
          {error && (
            <ErrorMessage>메시지를 입력해주세요.</ErrorMessage>
          )}
        </TextWrapper>
      </TextBox>
      <Spacing height="32px" />
    </GiftCardWrapper>
  );
}

const GiftCardWrapper = styled.div`
  width: 100%;
`;

const GiftBox = styled.div`
  width: 100%;
`;

const GiftcardBox = styled.div`
  width: 100%;
  position: relative;
`;

const GiftcardGird = styled.div`
  width: 100%;
  overflow: scroll auto;
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;

  &::-webkit-scrollbar {
    height: 16px;
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: rgb(193, 193, 193) 0px 0px 14px 14px inset;
    border: 4px solid transparent;
    border-radius: 14px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: rgb(242, 242, 242) 0px 0px 14px 14px inset;
    border-style: solid;
    border-color: rgb(250, 250, 250);
    border-image: initial;
    border-width: 4px 0px;
  }
`;

const GiftCard = styled.img<{ isSelected: boolean }>`
  flex: 0 0 auto;
  width: 82px;
  height: 56px;
  border-radius: 0.5rem;
  overflow: hidden;
  border: ${({ isSelected, theme }) =>
    isSelected
      ? `3px solid ${theme.colors.gray[900]}`
      : "3px solid transparent"};
  cursor: pointer;
  &:first-of-type {
    margin-left: 16px;
  }
`;

const GiftcardEndBox = styled.div`
  height: 100%;
  width: 2rem;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgb(255, 255, 255)
  );
  position: absolute;
  right: 0px;
  top: 0px;
`;

const CardBox = styled.div`
  width: 100%;
  padding: 0px 1rem;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
`;

const CardImage = styled.img`
  width: 100%;
  max-width: 360px;
  height: 240px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 39px 20px -30px;
`;

const TextBox = styled.div`
  width: 100%;
  padding: 0px 1rem;
`;

const TextWrapper = styled.div`
  width: 100%;
`;

const Text = styled.textarea<{ error?: boolean }>`
  width: 100%;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.gray[900]};
  transition: border-color 200ms;
  border-style: solid;
  min-height: 2.75rem;
  ${({ theme }) => theme.typography.body1Regular};
  padding: 8px 12px;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${({ theme, error }) => 
    error? theme.colors.state.critical 
  : theme.colors.gray[400]};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray[700]};
  }
`;
