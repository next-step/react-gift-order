import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cardData, products } from '@/mock/mockData';
import { Header } from '@/components/Header/Header';
import { SuccessModal } from '@/components/SuccessModal/SuccessModal';
import { useModal } from '@/hooks/useModal';
import { RecipientModal } from '@/components/RecipientInput/RecipientModal';
import { RecipientList } from '@/components/RecipientInput/RecipientList';
import { orderFormSchema, type OrderFormData, type RecipientData } from '@/schemas/orderSchema';
import { colors } from '@/styles/tokens';

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  background-color: white;
  min-height: 100vh;
  background-color: ${colors.gray50};

  display: flex;
  flex-direction: column;
  position: relative;
`;

const CharacterSection = styled.div`
  padding: 20px;
  text-align: center;
`;

const CharacterGrid = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 8px;
  margin-bottom: 20px;
  padding-bottom: 4px;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: #f5f5f5;
  }
`;

const CharacterItem = styled.div<{ selected: boolean; characterId: number }>`
  min-width: 40px;
  min-height: 40px;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 2px solid ${(props) => (props.selected ? '#4A90E2' : 'transparent')};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transform: ${(props) => (props.selected ? 'scale(1.1)' : 'scale(1)')};
  margin-right: 0;

  ${(props) => {
    const gradients = [
      'linear-gradient(135deg, #FFE066, #FF8A80)',
      'linear-gradient(135deg, #FFCC02, #FF6B6B)',
      'linear-gradient(135deg, #A8E6CF, #81C784)',
      'linear-gradient(135deg, #FFD54F, #FF8A65)',
      'linear-gradient(135deg, #E1BEE7, #CE93D8)',
      'linear-gradient(135deg, #4A90E2, #7986CB)',
      'linear-gradient(135deg, #81C784, #AED581)',
    ];
    return css`
      background: ${gradients[props.characterId - 1]};
    `;
  }}
`;

const MainCharacter = styled.div`
  width: 200px;
  height: 150px;
  background: linear-gradient(135deg, #4a90e2, #7986cb);
  border-radius: 20px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const FormSection = styled.div`
  padding: 20px;
  background-color: white;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
  font-size: 14px;
`;

const FormInput = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${(props) => (props.hasError ? '#ff4444' : '#ddd')};
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.hasError ? '#ff4444' : '#4A90E2')};
  }
`;

const FormTextarea = styled.textarea<{ hasError?: boolean }>`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${(props) => (props.hasError ? '#ff4444' : '#ddd')};
  border-radius: 8px;
  font-size: 16px;
  min-height: 80px;
  resize: vertical;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.hasError ? '#ff4444' : '#4A90E2')};
  }
`;

const ErrorMessage = styled.div`
  color: #ff4444;
  font-size: 12px;
  margin-top: 4px;
`;

const HelperText = styled.div`
  font-size: 12px;
  color: #666;
  margin-top: 4px;
`;

const SectionTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
`;

const ProductInfo = styled.div`
  background-color: #f8f9fa;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 20px;
`;

const ProductItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProductImage = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #8b4513, #a0522d);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

const ProductDetails = styled.div`
  flex: 1;

  h3 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
    color: #333;
  }
`;

const ProductBrand = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
`;

const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #333;
`;

const OrderButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #ffd700;
  color: #333;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  position: sticky;
  bottom: 0;
  margin-top: auto;
  &:hover {
    background-color: #ffc107;
  }

  &:disabled {
    background-color: #ffd700;
    cursor: not-allowed;
  }
`;

export const OrderPage: React.FC = () => {
  // 쿼리스트링에서 productId 추출
  const searchParams = new URLSearchParams(location.search);
  const productIdParam = searchParams.get('productId');
  const productId = productIdParam ? parseInt(productIdParam, 10) : null;

  const selectedProduct = products.find((p) => p.id === productId) || products[0];
  const [selectedCard, setSelectedCard] = useState<number>(cardData[0].id);
  const [recipients, setRecipients] = useState<RecipientData[]>([]);
  const [isRecipientModalOpen, setIsRecipientModalOpen] = useState(false);

  const successModal = useModal();
  const selectedCardData = cardData.find((card) => card.id === selectedCard);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      message: selectedCardData?.defaultTextMessage || '축하해요.',
      senderName: '',
      recipients: [],
    },
  });

  // 카드 선택 시 기본 메시지 업데이트
  const handleCardSelect = (cardId: number) => {
    setSelectedCard(cardId);
    const card = cardData.find((c) => c.id === cardId);
    if (card && card.defaultTextMessage) {
      setValue('message', card.defaultTextMessage);
    }
  };

  // 받는 사람 모달 열기
  const handleOpenRecipientModal = () => {
    setIsRecipientModalOpen(true);
  };

  // 받는 사람 모달 닫기
  const handleCloseRecipientModal = () => {
    setIsRecipientModalOpen(false);
  };

  // 받는 사람 저장
  const handleSaveRecipients = (newRecipients: RecipientData[]) => {
    setRecipients(newRecipients);
    setValue('recipients', newRecipients);
  };

  // 폼 제출
  const onSubmit = (data: OrderFormData) => {
    const submitData = {
      ...data,
      recipients: recipients,
    };
    console.log('주문 데이터:', submitData);
    successModal.openModal();
  };

  return (
    <Container>
      <Header title="선물하기" />

      <CharacterSection>
        <CharacterGrid>
          {cardData.map((card) => (
            <CharacterItem
              key={card.id}
              selected={selectedCard === card.id}
              characterId={card.id}
              onClick={() => handleCardSelect(card.id)}
            >
              <img
                src={card.thumbUrl}
                alt={card.defaultTextMessage || '카드'}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
              />
            </CharacterItem>
          ))}
        </CharacterGrid>

        <MainCharacter>
          {selectedCardData && (
            <img
              src={selectedCardData.imageUrl}
              alt={selectedCardData.defaultTextMessage || '선택된 카드'}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}
            />
          )}
        </MainCharacter>
      </CharacterSection>

      <form onSubmit={handleSubmit(onSubmit)} id="order-form">
        <FormSection>
          <FormGroup>
            <FormLabel>메시지</FormLabel>
            <FormTextarea
              {...register('message')}
              placeholder="축하해요."
              hasError={!!errors.message}
            />
            {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
          </FormGroup>

          <SectionTitle>보내는 사람</SectionTitle>
          <FormGroup>
            <FormInput
              {...register('senderName')}
              placeholder="이름을 입력하세요."
              hasError={!!errors.senderName}
            />
            {errors.senderName && <ErrorMessage>{errors.senderName.message}</ErrorMessage>}
            <HelperText>* 실제 선물 발송 시 발신자 이름으로 반영되는 정보입니다.</HelperText>
          </FormGroup>

          <RecipientList
            recipients={recipients}
            onAdd={handleOpenRecipientModal}
            onEdit={handleOpenRecipientModal}
          />

          <SectionTitle>상품 정보</SectionTitle>
          <ProductInfo>
            <ProductItem>
              <ProductImage>
                <img
                  src={selectedProduct.imageURL}
                  alt={selectedProduct.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }}
                />
              </ProductImage>
              <ProductDetails>
                <h3>{selectedProduct.name}</h3>
                <ProductBrand>{selectedProduct.brandInfo.name}</ProductBrand>
                <ProductPrice>
                  상품가 {selectedProduct.price.sellingPrice.toLocaleString()}원
                </ProductPrice>
              </ProductDetails>
            </ProductItem>
          </ProductInfo>
        </FormSection>
      </form>
      {/* 받는 사람 추가/수정 모달 */}
      <RecipientModal
        isOpen={isRecipientModalOpen}
        onClose={handleCloseRecipientModal}
        onSave={handleSaveRecipients}
        initialRecipients={recipients}
        maxCount={10}
      />

      <SuccessModal showSuccessModal={successModal.isOpen} onClose={successModal.closeModal} />

      <OrderButton form="order-form" type="submit" disabled={recipients.length === 0}>
        {(
          selectedProduct.price.sellingPrice * recipients.reduce((sum, r) => sum + r.quantity, 0)
        ).toLocaleString()}
        원 주문하기
      </OrderButton>
    </Container>
  );
};
