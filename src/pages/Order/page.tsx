import { useState } from 'react';
import { orders } from '@/data/orders';
import * as S from './styles';

const Order = () => {
  const [selectedCardId, setSelectedCardId] = useState<number>(orders[0]?.id || 904);
  const [message, setMessage] = useState<string>(orders[0]?.defaultTextMessage || '축하해요.');

  const handleCardClick = (id: number) => {
    setSelectedCardId(id);
    const card = orders.find(order => order.id === id);
    if (card) {
      setMessage(card.defaultTextMessage);
    }
    console.log('카드 클릭:', id);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const selectedCard = orders.find(order => order.id === selectedCardId);

  return (
    <S.Container>
      <S.ScrollContainer>
        {orders.map((order) => (
          <S.CardContainer 
            key={order.id} 
            isSelected={selectedCardId === order.id}
            onClick={() => handleCardClick(order.id)}
          >
            <S.CardImage
              alt={`${order.id}번 메시지 카드`}
              src={order.thumbUrl}
            />
          </S.CardContainer>
        ))}
      </S.ScrollContainer>
      <S.Spacer />
      
      <S.PreviewContainer>
        <S.PreviewImageContainer>
          <S.PreviewImage
            alt={`${selectedCard?.id}번 메시지 카드`}
            src={selectedCard?.imageUrl || ''}
          />
        </S.PreviewImageContainer>
      </S.PreviewContainer>
      
      <S.MessageContainer>
        <S.MessageInputWrapper>
          <S.MessageTextarea
            value={message}
            onChange={handleMessageChange}
          />
        </S.MessageInputWrapper>
      </S.MessageContainer>
    </S.Container>
  );
};

export default Order;
