import React from 'react';
import Image from '@/components/atoms/Image';
import MessageInput from '@/components/molcules/MesageInput';
import CardCarousel from '@/components/organisms/CardCarousel';
import * as S from './styles';

interface Order {
  id: number;
  thumbUrl: string;
  imageUrl: string;
  defaultTextMessage: string;
}

interface OrderTemplateProps {
  orders: Order[];
  selectedCardId: number;
  selectedCard: Order | undefined;
  message: string;
  onCardClick: (id: number) => void;
  onMessageChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const OrderTemplate: React.FC<OrderTemplateProps> = ({
  orders,
  selectedCardId,
  selectedCard,
  message,
  onCardClick,
  onMessageChange,
}) => {
  return (
    <S.Container>
      <CardCarousel
        orders={orders}
        selectedCardId={selectedCardId}
        onCardClick={onCardClick}
      />
      <S.Spacer />
      
      <S.PreviewContainer>
        <S.PreviewImageContainer>
          <Image
            src={selectedCard?.imageUrl || ''}
            alt={`${selectedCard?.id}번 메시지 카드`}
            variant="preview"
          />
        </S.PreviewImageContainer>
      </S.PreviewContainer>
      
      <MessageInput
        value={message}
        onChange={onMessageChange}
        placeholder="메시지를 입력하세요"
      />
    </S.Container>
  );
};

export default OrderTemplate;
