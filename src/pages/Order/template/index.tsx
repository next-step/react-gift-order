import { 
  Image, CardCarousel, ProductInfo, MessageTextArea, 
  SenderSection, ReceiverSection, type InputChangeHandler, type TextAreaChangeHandler
} from '@/components';
import { type RankingItem } from '@/data/ranking';
import { type Order } from '@/data/orders';
import { 
  type CardState,
  type FormData,
  type ValidationErrors 
} from '@/utils/validation/orderForm';
import * as S from './styles';

interface FormHandlers {
  onSenderNameChange: InputChangeHandler;
  onReceiverNameChange: InputChangeHandler;
  onReceiverPhoneChange: InputChangeHandler;
  onQuantityChange: InputChangeHandler;
}

interface OrderTemplateProps {
  orders: Order[];
  cardState: CardState;
  selectedCard: Order | undefined;
  onCardClick: (id: number) => void;
  onMessageChange: TextAreaChangeHandler;
  formData: FormData;
  formHandlers: FormHandlers;
  errors: ValidationErrors;
  product?: RankingItem;
  onSubmit: () => void;
}

const OrderTemplate = ({
  orders,
  cardState,
  selectedCard,
  onCardClick,
  onMessageChange,
  formData,
  formHandlers,
  errors,
  product,
  onSubmit,
}: OrderTemplateProps) => {
  return (
    <>
      <S.ContentWrapper>
        <S.Container>
          <S.FirstSection>
            <CardCarousel
              orders={orders}
              selectedCardId={cardState.selectedCardId}
              onCardClick={onCardClick}
            />         
            <S.PreviewContainer>
              <S.PreviewImageContainer>
                <Image
                  src={selectedCard?.imageUrl || ''}
                  alt={selectedCard ? `${selectedCard.id}번 메시지 카드` : '메시지 카드'}
                  variant="preview"
                />
              </S.PreviewImageContainer>
            </S.PreviewContainer>           
            <MessageTextArea
              value={cardState.message}
              onChange={onMessageChange}
              placeholder="메시지를 입력하세요"
              error={errors.message}
            />
          </S.FirstSection>    
          <S.Spacer />        
          <SenderSection
            senderName={formData.senderName}
            onSenderNameChange={formHandlers.onSenderNameChange}
            error={errors.senderName}
          />       
          <S.Spacer /> 
          <ReceiverSection
          />        
          {product && (
            <>
              <S.Spacer />
              <ProductInfo product={product} />
            </>
          )}
        </S.Container>
      </S.ContentWrapper> 
      <S.FixedBottomButton onClick={onSubmit}>
        {product ? `${(product.price.sellingPrice * formData.quantity).toLocaleString()}원 결제하기` : '선물하기'}
      </S.FixedBottomButton>
    </>
  );
};

export default OrderTemplate;
