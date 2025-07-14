import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { Section } from '@/components/layout';
import Container from '@/components/layout/Container';
import { RecipientList, RecipientModal } from '@/components/order';
import { products } from '@/data/products';
import { cardTemplates } from '@/data/cardTemplates';
import type { Recipient } from '@/types';

interface OrderFormData {
  selectedCardId: number;
  message: string;
  sender: string;
  recipients: Recipient[];
}

const CardSlider = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  margin: 0 -16px;
  padding: 8px 0 16px 0;
`;
const CardThumbButton = styled.button<{ selected: boolean }>`
  display: inline-block;
  border: 2px solid
    ${(props) =>
      props.selected ? props.theme.semanticColors.kakaoYellow : 'transparent'};
  border-radius: 8px;
  background: none;
  padding: 2px;
  margin: 0 4px;
  cursor: pointer;
  outline: none;
`;
const CardThumbImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 6px;
  object-fit: cover;
  background: #f7f8f9;
`;
const CardImagePreview = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`;
const CardLargeImg = styled.img`
  width: 320px;
  height: 180px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 2px 8px #0001;
`;
const MessageTextarea = styled.textarea<{ error?: boolean }>`
  width: 100%;
  min-height: 48px;
  font-size: 16px;
  border: 1px solid
    ${(props) =>
      props.error ? props.theme.semanticColors.state.critical : '#eee'};
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 4px;
  resize: vertical;
`;
const FormSection = styled.div`
  margin-bottom: 24px;
`;
const FormLabel = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
`;
const Input = styled.input<{ error?: boolean }>`
  width: 100%;
  padding: 12px;
  border: 1px solid
    ${(props) =>
      props.error ? props.theme.semanticColors.state.critical : '#eee'};
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 8px;
`;
const InputHelper = styled.div`
  color: #aaa;
  font-size: 12px;
  margin-top: 4px;
`;
const ErrorText = styled.div`
  color: #fa342c;
  font-size: 13px;
  margin-bottom: 8px;
`;
const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background: #fafafa;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 80px;
`;
const ProductImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  object-fit: cover;
`;
const ProductInfoText = styled.div`
  flex: 1;
`;
const ProductName = styled.div`
  font-weight: 600;
`;
const ProductBrand = styled.div`
  color: #888;
  font-size: 14px;
`;
const ProductPrice = styled.div`
  margin-top: 8px;
  font-weight: 700;
`;
const OrderButtonBar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  z-index: 100;
  padding: 0 0 12px 0;
`;
const OrderButton = styled.button<{ disabled?: boolean }>`
  background: ${(props) => (props.disabled ? '#f3f4f6' : '#fee500')};
  color: ${(props) => (props.disabled ? '#9ca3af' : '#222')};
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  padding: 18px 0;
  border-radius: 12px;
  box-shadow: 0 -2px 8px #0001;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease;
  border: none;
  width: 100%;

  &:hover:not([disabled]) {
    background: ${(props) => (props.disabled ? '#f3f4f6' : '#fde047')};
  }

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
`;

const OrderPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => String(p.id) === String(productId));

  // 주문 정보만 관리하는 폼
  const {
    register,
    watch,
    setValue,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<OrderFormData>({
    defaultValues: {
      selectedCardId: cardTemplates[0].id,
      message: cardTemplates[0].defaultTextMessage || '',
      sender: '',
      recipients: [],
    },
    mode: 'onChange',
  });

  // 폼 값들 watch
  const selectedCardId = watch('selectedCardId');
  const recipients = watch('recipients');

  // 선택된 카드 정보
  const selectedCard =
    cardTemplates.find((card) => card.id === selectedCardId) ||
    cardTemplates[0];

  // 모달 상태
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 카드 선택 핸들러
  const handleSelectCard = (cardId: number) => {
    setValue('selectedCardId', cardId);
    const card = cardTemplates.find((c) => c.id === cardId);
    setValue('message', card?.defaultTextMessage || '');
  };

  // 받는사람 추가 (모달 열기)
  const handleAddRecipient = () => {
    setIsModalOpen(true);
  };

  // 받는사람 제거
  const handleRemoveRecipient = (index: number) => {
    const updatedRecipients = recipients.filter((_, i) => i !== index);
    setValue('recipients', updatedRecipients);
  };

  // 모달에서 받는사람 저장 - setValue로 업데이트
  const handleRecipientsSubmit = (newRecipients: Recipient[]) => {
    const updatedRecipients = [...recipients, ...newRecipients];
    setValue('recipients', updatedRecipients);
    setIsModalOpen(false);
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // 주문 제출 핸들러
  const handleOrderSubmit = handleSubmit(async (data) => {
    if (!product) return;

    // 총 수량 계산
    const totalQuantity = data.recipients.reduce(
      (sum, recipient) => sum + recipient.quantity,
      0
    );
    const totalPrice = product.price.sellingPrice * totalQuantity;

    // 안내 메시지 구성
    const recipientList = data.recipients
      .map((r, i) => `${i + 1}. ${r.name} (${r.phone}) - ${r.quantity}개`)
      .join('\n');

    const msg = `주문이 완료되었습니다.\n상품명: ${product.name}\n보내는 사람: ${data.sender}\n받는사람 목록:\n${recipientList}\n총 수량: ${totalQuantity}개\n총 가격: ${totalPrice.toLocaleString()}원\n메시지: ${data.message}`;
    alert(msg);
    navigate('/');
  });

  // 총 수량 계산
  const totalQuantity = recipients.reduce((sum, r) => sum + r.quantity, 0);

  // 주문 가능 여부 확인
  const canOrder = recipients.length > 0 && totalQuantity > 0 && isValid;

  // 에러 메시지들
  const messageError = errors.message?.message || '';
  const senderError = errors.sender?.message || '';

  if (!product) {
    return (
      <Section>
        <div style={{ padding: 32, textAlign: 'center' }}>
          <h2>상품을 찾을 수 없습니다.</h2>
          <button onClick={() => navigate(-1)}>돌아가기</button>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <CardSlider>
          {cardTemplates.map((card, idx) => (
            <CardThumbButton
              key={card.id}
              selected={card.id === selectedCardId}
              onClick={() => handleSelectCard(card.id)}
            >
              <CardThumbImg
                src={card.thumbUrl}
                alt={`카드 템플릿 ${idx + 1}`}
              />
            </CardThumbButton>
          ))}
        </CardSlider>
        <CardImagePreview>
          <CardLargeImg src={selectedCard.imageUrl} alt="선택된 카드" />
        </CardImagePreview>
        <MessageTextarea
          {...register('message', {
            required: '메시지를 입력해주세요.',
            validate: (value) =>
              value.trim().length > 0 || '메시지를 입력해주세요.',
          })}
          placeholder="메시지를 입력하세요."
          error={!!messageError}
        />
        {messageError && <ErrorText>{messageError}</ErrorText>}
        <FormSection>
          <FormLabel>보내는 사람</FormLabel>
          <Input
            type="text"
            {...register('sender', {
              required: '이름을 입력해주세요.',
              validate: (value) =>
                value.trim().length > 0 || '이름을 입력해주세요.',
            })}
            placeholder="이름을 입력하세요."
            error={!!senderError}
          />
          {senderError && <ErrorText>{senderError}</ErrorText>}
          <InputHelper>
            * 실제 선물 발송 시 발신자(보내는 사람) 이름으로 반영되는
            정보입니다.
          </InputHelper>
        </FormSection>
        <RecipientList
          recipients={recipients}
          onRemoveRecipient={handleRemoveRecipient}
          onAddRecipient={handleAddRecipient}
          canAddMore={recipients.length < 10}
          maxReached={recipients.length >= 10}
        />
        <ProductInfo>
          <ProductImg src={product.imageURL} alt={product.name} />
          <ProductInfoText>
            <ProductName>{product.name}</ProductName>
            <ProductBrand>{product.brandInfo?.name}</ProductBrand>
            <ProductPrice>
              상품가 {product.price.sellingPrice.toLocaleString()}원
            </ProductPrice>
          </ProductInfoText>
        </ProductInfo>
      </Container>
      <OrderButtonBar>
        <Container>
          <OrderButton
            disabled={!canOrder}
            onClick={() => canOrder && handleOrderSubmit()}
          >
            {totalQuantity > 0
              ? `${(product.price.sellingPrice * totalQuantity).toLocaleString()}원 주문하기 (${totalQuantity}개)`
              : `${product.price.sellingPrice.toLocaleString()}원 주문하기`}
          </OrderButton>
        </Container>
      </OrderButtonBar>

      <RecipientModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleRecipientsSubmit}
        existingRecipients={recipients}
      />
    </Section>
  );
};

export default OrderPage;
