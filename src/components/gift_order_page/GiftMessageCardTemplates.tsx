import { giftMessageCardTemplatesData } from '@/mock_data/giftMessageCardTemplates';
import styled from '@emotion/styled';
import { GiftMessageCard } from './GiftMessageCard';
import { useCallback, useEffect, useState } from 'react';
import useOrderInfo from '@/hooks/useOrderInfo';
import type { inputStyle } from '@/types/inputStyle';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
  margin-top: 2.8rem;
  background-color: white;
`;

const List = styled.div`
  display: flex;
  box-sizing: border-box;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 4.8rem;
  overflow-x: scroll;
`;

const Card = styled.div<{ image: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 22.5rem;
  height: 15rem;
  border-radius: 0.75rem;
  margin-top: ${({ theme }) => theme.spacing.spacing4};
  background-image: url(${({ image }) => image});
  background-size: contain;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: ${({ theme }) => theme.spacing.spacing10};
  margin-bottom: ${({ theme }) => theme.spacing.spacing9};
  width: 100%;
  height: auto;
`;

const MessageInputField = styled.textarea<{ messageInputFieldStyle: string }>`
  all: unset;
  display: flex;
  width: calc(100% - 2rem);
  height: 3.9rem;
  box-sizing: border-box;
  margin-left: 1rem;
  padding: 0.75rem;
  font-size: 1rem;
  white-space: pre-wrap;
  resize: both;
  border-radius: 0.5rem;
  border-color: ${({ theme, messageInputFieldStyle }) => {
    if (messageInputFieldStyle === 'idle') {
      return theme.colors.gray400;
    } else if (messageInputFieldStyle === 'isClicked') {
      return theme.colors.gray800;
    } else {
      return theme.colors.red700;
    }
  }};
  border-style: solid;
  border-width: 1px;
  transition: border-color 0.3s;
`;

const ErrorText = styled.div`
  ${({ theme }) => theme.typography.label2Regular}
  margin-top: 0.6rem;
  margin-left: ${({ theme }) => theme.spacing.spacing6};
  color: ${({ theme }) => theme.colors.red700};
`;

export const GiftMessageCardTemplates = () => {
  const giftMessageCards = giftMessageCardTemplatesData;
  const [selectedCardId, setSelectedCardId] = useState(giftMessageCards[0].id);
  const index = giftMessageCards.findIndex((item) => item.id === selectedCardId);
  const [messageInputFieldStyle, setMessageInputFieldStyle] = useState<inputStyle>('idle');
  const [isClicked, setIsClicked] = useState(false);
  const { setIsFirstTry, message, setMessage, error } = useOrderInfo();

  const handleInputFieldStyle = useCallback(() => {
    let inputStatus: inputStyle = 'idle';

    if (isClicked) {
      inputStatus = 'isClicked';
    } else {
      if (error.messageError) {
        inputStatus = 'error';
      } else {
        inputStatus = 'idle';
      }
    }

    setMessageInputFieldStyle(inputStatus);
  }, [isClicked, error]);

  useEffect(() => {
    setMessage(giftMessageCards[index].defaultTextMessage);
  }, [setMessage, giftMessageCards, index]);

  useEffect(() => {
    handleInputFieldStyle();
  }, [handleInputFieldStyle]);

  return (
    <Container>
      <List>
        {giftMessageCards.map((item) => {
          return (
            <GiftMessageCard
              key={item.id}
              id={item.id}
              image={item.thumbUrl}
              selectedCardId={selectedCardId}
              setSelectedCardId={setSelectedCardId}
            />
          );
        })}
      </List>
      <Card image={giftMessageCards[index].imageUrl} />
      <InputContainer>
        <MessageInputField
          messageInputFieldStyle={messageInputFieldStyle}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            error.setTargetMessage('modifying..');
            setIsFirstTry(false);
          }}
          onFocus={() => setIsClicked(true)}
          onBlur={() => setIsClicked(false)}
        />
        {error.messageError && <ErrorText>{error.messageError}</ErrorText>}
      </InputContainer>
    </Container>
  );
};
