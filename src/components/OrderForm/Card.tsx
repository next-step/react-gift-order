import styled from '@emotion/styled';
import CardSelector from './CardSelector';
import { useState } from 'react';
import { MOCK_CARDFORM_LIST } from './mock';
import { CardImg } from './CardImg';

const Wrapper = styled.div`
  width: 100%;
`;
const Margin1 = styled.div`
  width: 100%;
  height: 12px;
  background-color: transparent;
`;

const Margin2 = styled.div`
  width: 100%;
  height: 40px;
  background-color: transparent;
`;

const Margin3 = styled.div`
  width: 100%;
  height: 32px;
  background-color: transparent;
`;

const CardImgWrapper = styled.div`
  width: 100%;
  padding: 0px 1rem;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
`;

const CardMent = styled.div`
  width: 100%;
  padding: 0px 1rem;
`;

const Card = () => {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(904);
  const selectedCard = MOCK_CARDFORM_LIST.find((card) => card.id === selectedCardId);

  return (
    <Wrapper>
      <Margin1 />
      <CardSelector selectedCardId={selectedCardId} onChange={setSelectedCardId} />
      <Margin1 />
      <CardImgWrapper>
        {selectedCard && <CardImg selectedImgUrl={selectedCard.imageUrl} />}
      </CardImgWrapper>
      <Margin2 />
      <CardMent />
      <Margin3 />
    </Wrapper>
  );
};

export default Card;
