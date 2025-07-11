import React, { useState } from 'react';
import styled from '@emotion/styled';
import { order_cards } from '@/mocks';

const Wrapper = styled.div`
  width: 100%;
`;

const SelectedCardWrapper = styled.div`
  width: 100%;
  padding: 0px 1rem;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
`;

const SelectedCardAligner = styled.div`
  width: 100%;
  max-width: 360px;
  height: 240px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 39px 20px -30px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CardList = styled.div`
  width: 100%;
  overflow: scroll auto;
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
`;

const Card = styled.div`
  width: 82px;
  height: 56px;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  flex-shrink: 0;
  &:first-of-type {
    margin-left: 16px;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
`;

const CardSelector = () => {
  const [selectedCardUrl, setSelectedCardUrl] = useState(order_cards[0].imageUrl);

  return (
    <Wrapper>
      <CardList>
        {order_cards.map((item) => (
          <Card key={item.id} onClick={() => setSelectedCardUrl(item.imageUrl)}>
            <CardImg src={item.imageUrl} />
          </Card>
        ))}
      </CardList>
      <SelectedCardWrapper>
        <SelectedCardAligner>
          <CardImage src={selectedCardUrl} />
        </SelectedCardAligner>
      </SelectedCardWrapper>
    </Wrapper>
  );
};

export default CardSelector;
