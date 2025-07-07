import React from 'react';
import Image from '@/components/atoms/Image';
import MessageInput from '@/components/molcules/MesageInput';
import CardCarousel from '@/components/organisms/CardCarousel';
import SenderSection from '@/components/organisms/SenderSection';
import ReceiverSection from '@/components/organisms/ReceiverSection';
import ProductInfo from '@/components/organisms/ProductInfo';
import { type RankingItem } from '@/data/ranking';
import * as S from './styles';

interface Order {
  id: number;
  thumbUrl: string;
  imageUrl: string;
  defaultTextMessage: string;
}

interface ValidationErrors {
  message: string;
  senderName: string;
  receiverName: string;
  receiverPhone: string;
  quantity: string;
}

interface OrderTemplateProps {
  orders: Order[];
  selectedCardId: number;
  selectedCard: Order | undefined;
  message: string;
  senderName: string;
  receiverName: string;
  receiverPhone: string;
  quantity: string;
  product?: RankingItem;
  errors: ValidationErrors;
  onCardClick: (id: number) => void;
  onMessageChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSenderNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReceiverNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReceiverPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onOrder: () => void;
}

const OrderTemplate: React.FC<OrderTemplateProps> = ({
  orders,
  selectedCardId,
  selectedCard,
  message,
  senderName,
  receiverName,
  receiverPhone,
  quantity,
  product,
  errors,
  onCardClick,
  onMessageChange,
  onSenderNameChange,
  onReceiverNameChange,
  onReceiverPhoneChange,
  onQuantityChange,
  onOrder,
}) => {
  return (
    <>
      <S.ContentWrapper>
        <S.Container>
          <S.FirstSection>
            <CardCarousel
              orders={orders}
              selectedCardId={selectedCardId}
              onCardClick={onCardClick}
            />
            
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
              error={errors.message}
            />
          </S.FirstSection>
          
          <S.Spacer />
          
          <SenderSection
            senderName={senderName}
            onSenderNameChange={onSenderNameChange}
            error={errors.senderName}
          />
          
          <S.Spacer />
          
          <ReceiverSection
            receiverName={receiverName}
            receiverPhone={receiverPhone}
            quantity={quantity}
            onReceiverNameChange={onReceiverNameChange}
            onReceiverPhoneChange={onReceiverPhoneChange}
            onQuantityChange={onQuantityChange}
            receiverNameError={errors.receiverName}
            receiverPhoneError={errors.receiverPhone}
            quantityError={errors.quantity}
          />
          
          {product && (
            <>
              <S.Spacer />
              <ProductInfo product={product} />
            </>
          )}
        </S.Container>
      </S.ContentWrapper>
      
      <S.FixedBottomButton onClick={onOrder}>
        {product ? `${product.price.sellingPrice.toLocaleString()}원 결제하기` : '선물하기'}
      </S.FixedBottomButton>
    </>
  );
};

export default OrderTemplate;
