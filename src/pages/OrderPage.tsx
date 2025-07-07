import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation, useNavigate } from 'react-router';
import { cardData, products } from '@/mock/mockData';
import { Header } from '@/components/Header/Header';

interface FormData {
  message: string;
  senderName: string;
  receiverName: string;
  receiverPhone: string;
  quantity: number;
}

interface FormErrors {
  message?: string;
  senderName?: string;
  receiverName?: string;
  receiverPhone?: string;
  quantity?: string;
}

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  background-color: white;
  min-height: 100vh;
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

  &:focus {
    outline: none;
    border-color: ${(props) => (props.hasError ? '#ff4444' : '#4A90E2')};
  }
`;

const QuantityInput = styled(FormInput)`
  width: 80px;
  text-align: center;
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
  margin-top: 20px;

  &:hover {
    background-color: #ffc107;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Modal = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 16px;
  width: 280px;
  text-align: center;
`;

const ModalTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`;

const ModalButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  width: 100%;
  padding: 12px;
  background-color: ${(props) => (props.variant === 'secondary' ? '#f5f5f5' : '#4A90E2')};
  color: ${(props) => (props.variant === 'secondary' ? '#333' : 'white')};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: ${(props) => (props.variant === 'secondary' ? '0' : '10px')};

  &:hover {
    background-color: ${(props) => (props.variant === 'secondary' ? '#e0e0e0' : '#3A7BC8')};
  }
`;

const SuccessModalTitle = styled(ModalTitle)`
  color: #4a90e2;
`;

const SuccessMessage = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

export const OrderPage: React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // 쿼리스트링에서 productId 추출
  const searchParams = new URLSearchParams(location.search);
  const productIdParam = searchParams.get('productId');
  const productId = productIdParam ? parseInt(productIdParam, 10) : null;

  // 상품 정보 찾기 (없으면 첫 번째 상품)
  const selectedProduct = products.find((p) => p.id === productId) || products[0];
  console.log(selectedProduct);
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const [selectedCard, setSelectedCard] = useState<number>(cardData[0].id); // 첫 번째 카드 기본 선택

  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    message: '축하해요.',
    senderName: '',
    receiverName: '',
    receiverPhone: '',
    quantity: 1,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  // 선택된 카드의 기본 메시지로 초기화
  const selectedCardData = cardData.find((card) => card.id === selectedCard);

  // 카드 선택 시 기본 메시지 업데이트
  const handleCardSelect = (cardId: number) => {
    setSelectedCard(cardId);
    const card = cardData.find((c) => c.id === cardId);
    if (card && card.defaultTextMessage) {
      setFormData((prev) => ({
        ...prev,
        message: card.defaultTextMessage,
      }));
    }
  };

  const validatePhone = (phone: string): boolean => /^010\d{8}$/.test(phone);

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    let isValid = true;

    if (!formData.message.trim()) {
      errors.message = '메시지를 입력해주세요.';
      isValid = false;
    }

    if (!formData.senderName.trim()) {
      errors.senderName = '보내는 사람 이름을 입력해주세요.';
      isValid = false;
    }

    if (!formData.receiverName.trim()) {
      errors.receiverName = '받는 사람 이름을 입력해주세요.';
      isValid = false;
    }

    if (!formData.receiverPhone.trim() || !validatePhone(formData.receiverPhone)) {
      errors.receiverPhone = '올바른 전화번호를 입력해주세요. (예: 01012341234)';
      isValid = false;
    }

    if (!formData.quantity || formData.quantity < 1) {
      errors.quantity = '수량은 1개 이상이어야 합니다.';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleInputChange = (field: keyof FormData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleOrder = () => {
    if (validateForm()) {
      setShowSuccessModal(true);
    }
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

      <FormSection>
        <FormGroup>
          <FormLabel>메시지</FormLabel>
          <FormTextarea
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            placeholder="축하해요."
            hasError={!!formErrors.message}
          />
          {formErrors.message && <ErrorMessage>{formErrors.message}</ErrorMessage>}
        </FormGroup>

        <SectionTitle>보내는 사람</SectionTitle>
        <FormGroup>
          <FormInput
            type="text"
            value={formData.senderName}
            onChange={(e) => handleInputChange('senderName', e.target.value)}
            placeholder="이름을 입력하세요."
            hasError={!!formErrors.senderName}
          />
          {formErrors.senderName && <ErrorMessage>{formErrors.senderName}</ErrorMessage>}
          <HelperText>* 실제 선물 발송 시 발신자 이름으로 반영되는 정보입니다.</HelperText>
        </FormGroup>

        <SectionTitle>받는 사람</SectionTitle>
        <FormGroup>
          <FormLabel>이름</FormLabel>
          <FormInput
            type="text"
            value={formData.receiverName}
            onChange={(e) => handleInputChange('receiverName', e.target.value)}
            placeholder="이름을 입력하세요."
            hasError={!!formErrors.receiverName}
          />
          {formErrors.receiverName && <ErrorMessage>{formErrors.receiverName}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <FormLabel>전화번호</FormLabel>
          <FormInput
            type="tel"
            value={formData.receiverPhone}
            onChange={(e) => handleInputChange('receiverPhone', e.target.value)}
            placeholder="전화번호를 입력하세요."
            hasError={!!formErrors.receiverPhone}
          />
          {formErrors.receiverPhone && <ErrorMessage>{formErrors.receiverPhone}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <FormLabel>수량</FormLabel>
          <QuantityInput
            type="number"
            value={formData.quantity}
            onChange={(e) => handleInputChange('quantity', parseInt(e.target.value) || 1)}
            min="1"
            hasError={!!formErrors.quantity}
          />
          {formErrors.quantity && <ErrorMessage>{formErrors.quantity}</ErrorMessage>}
        </FormGroup>

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

        <OrderButton onClick={handleOrder}>
          {selectedProduct.price.sellingPrice.toLocaleString()}원 주문하기
        </OrderButton>
      </FormSection>

      {/* 주문 완료 모달 */}
      <Modal show={showSuccessModal}>
        <ModalContent>
          <SuccessModalTitle>주문이 완료되었습니다! 🎉</SuccessModalTitle>
          <SuccessMessage>선물이 성공적으로 주문되었습니다.</SuccessMessage>
          <ModalButton onClick={() => setShowSuccessModal(false)}>확인</ModalButton>
        </ModalContent>
      </Modal>
    </Container>
  );
};
