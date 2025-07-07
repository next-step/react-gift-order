import { CardTemplete } from '@/mock/CardTemplete';
import { CentorAlignDiv, DefaultComponentDiv, EmptyDiv40h, EmptyDiv8h, LowSlideDiv, SideBlankDiv } from '@/styles/Common.styled';
import { useState } from 'react'
import { CardBiGImg, CardBiGImgDiv, CardMessage, CardMiniImg } from './PresentCardSelector.styled';



const PresentCardSelector = () => {
  const [selectedCard, setSelectedCard] = useState(CardTemplete[0]);
  const [message, setMessage] = useState('축하해요.');

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
              setMessage(card.defaultTextMessage)
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="메시지를 입력해주세요."
        />
      </SideBlankDiv>

      <EmptyDiv40h/>

    </DefaultComponentDiv>
  );
}

export default PresentCardSelector