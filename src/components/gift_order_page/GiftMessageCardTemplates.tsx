import { giftMessageCardTemplatesData } from '@/mock_data/giftMessageCardTemplates';
import styled from '@emotion/styled';
import { GiftMessageCard } from './GiftMessageCard';
import { useEffect, useState } from 'react';

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

const MessageInputField = styled.textarea<{ isClicked: boolean }>`
  all: unset;
  display: flex;
  width: calc(100% - 2rem);
  height: 3.9rem;
  box-sizing: border-box;
  margin-top: ${({ theme }) => theme.spacing.spacing10};
  margin-left: 1rem;
  margin-bottom: ${({ theme }) => theme.spacing.spacing9};
  padding: 0.75rem;
  font-size: 1rem;
  white-space: pre-wrap;
  resize: both;
  border-radius: 0.5rem;
  border-color: ${({ theme, isClicked }) =>
    isClicked ? theme.colors.gray800 : theme.colors.gray400};
  border-style: solid;
  border-width: 1px;
`;

export const GiftMessageCardTemplates = () => {
  const giftMessageCards = giftMessageCardTemplatesData;
  const [selectedCard, setSelectedCard] = useState(0);
  const [message, setMessage] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setMessage(giftMessageCards[selectedCard].defaultTextMessage);
  }, [giftMessageCards, selectedCard]);

  return (
    <Container>
      <List>
        {giftMessageCards.map((item, i) => {
          return (
            <GiftMessageCard
              key={i}
              id={i}
              image={item.thumbUrl}
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
          );
        })}
      </List>
      <Card image={giftMessageCards[selectedCard].imageUrl} />
      <MessageInputField
        isClicked={isClicked}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onFocus={() => setIsClicked(true)}
        onBlur={() => {
          setIsClicked(false);
        }}
      />
    </Container>
  );
};
