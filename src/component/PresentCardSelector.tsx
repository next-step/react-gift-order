import { CardTemplete } from '@/mock/CardTemplete';
import { CentorAlignDiv, DefaultComponentDiv, EmptyDiv40h, EmptyDiv8h, LowSlideDiv, SideBlankDiv } from '@/styles/Common.styled';
import React, { useState } from 'react'
import { CardBiGImg, CardBiGImgDiv, CardMessage, CardMiniImg } from './PresentCardSelector.styled';
import { useOrder } from '@/context/OrderContext';



const PresentCardSelector= () => {
  const {cardMessage, setCardMessage} = useOrder()
  const [selectedCard, setSelectedCard] = useState(CardTemplete[0]);

  return (
    <DefaultComponentDiv>
      <LowSlideDiv>
        {CardTemplete.map((card, index) => (
          <CardMiniImg
            key={index}
            src={card.thumbUrl}
            alt={card.defaultTextMessage}
            onClick={() => {
              setSelectedCard(card)
              setCardMessage(card.defaultTextMessage)
              }
            }
            selected={selectedCard === card}
          />
        ))}
      </LowSlideDiv>

      <EmptyDiv8h/>

      <CentorAlignDiv>
      <CardBiGImgDiv>
        <CardBiGImg
          src={selectedCard.imageUrl}
          alt={selectedCard.imageUrl}
        />
      </CardBiGImgDiv>
      </CentorAlignDiv>

      <EmptyDiv40h/>

      <SideBlankDiv style={{ marginTop: '16px' }}>
        <CardMessage
          value={cardMessage}
          onChange={(e) => setCardMessage(e.target.value)}
          placeholder="메시지를 입력해주세요."
        />
      </SideBlankDiv>

      <EmptyDiv40h/>

    </DefaultComponentDiv>
  );
}

export default PresentCardSelector