import styled from '@emotion/styled';
import { useOrderForm } from '@/hooks/useOrderForm';
import { GiftList } from '@/mock-data/GiftList';
import { useLocation, useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px 0;
  border-radius: 8px;
`;

const Section = styled.div`
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledInput = styled.input<{ error?: boolean }>`
  width: 100%;
  height: 44px;
  padding: 0 12px;
  font-size: 14px;
  border: 1px solid ${({ error, theme }) => (error ? 'red' : theme.color.semantic.border.default)};
  border-radius: 8px;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.color.semantic.text.placeholder};
  }
`;

const ErrorMsg = styled.p`
  color: ${({ theme }) => theme.color.semantic.status.critical};
  font-size: 12px;
  margin: 0;
`;

const HelperText = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.color.semantic.text.placeholder};
`;

const ProductInfo = styled.div`
  padding: 20px 16px;
  border-radius: 8px;
  display: flex;
  gap: 12px;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 4px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & > strong {
    font-size: 14px;
  }

  & > span {
    font-size: 12px;
    color: ${({ theme }) => theme.color.semantic.text.placeholder};
  }

  & > b {
    font-weight: bold;
  }
`;

const OrderButton = styled.button`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.color.semantic.brand.kakaoYellow};
  border: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
`;

const GiftForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const giftId = location.state?.id;

  const selectedGift = GiftList.find((gift) => gift.id === giftId);

  const { values, errors, handleChange, validate } = useOrderForm({
    sender: '',
    receiver: '',
    phone: '',
    quantity: 1,
    message: '',
  });

  const handleSubmit = () => {
    if (!validate()) return;
    
    alert(
      `주문이 완료되었습니다.
      상품명: ${selectedGift.name}
      구매 수량: ${values.quantity}
      발신자 이름: ${values.sender}
      메시지: ${values.message}`
    );
    navigate('/');
  };

  return (
    <Wrapper>
      <Section>
        <Label>보내는 사람</Label>
        <InputBox>
          <StyledInput
            type="text"
            placeholder="이름을 입력하세요."
            value={values.sender}
            onChange={(e) => handleChange('sender', e.target.value)}
            error={!!errors.sender}
          />
          {errors.sender && <ErrorMsg>{errors.sender}</ErrorMsg>}
          <HelperText>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</HelperText>
        </InputBox>
      </Section>

      <Section>
        <Label>받는 사람</Label>
        <InputBox>
          <StyledInput
            type="text"
            placeholder="이름을 입력하세요."
            value={values.receiver}
            onChange={(e) => handleChange('receiver', e.target.value)}
            error={!!errors.receiver}
          />
          {errors.receiver && <ErrorMsg>{errors.receiver}</ErrorMsg>}

          <StyledInput
            type="tel"
            placeholder="전화번호를 입력하세요."
            value={values.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            error={!!errors.phone}
          />
          {errors.phone && <ErrorMsg>{errors.phone}</ErrorMsg>}

          <StyledInput
            type="number"
            min={1}
            value={values.quantity}
            onChange={(e) => handleChange('quantity', e.target.value)}
            error={!!errors.quantity}
          />
          {errors.quantity && <ErrorMsg>{errors.quantity}</ErrorMsg>}
        </InputBox>
      </Section>

      <Section>
        <Label>메시지</Label>
        <InputBox>
          <StyledInput
            type="text"
            placeholder="메시지를 입력하세요."
            value={values.message}
            onChange={(e) => handleChange('message', e.target.value)}
            error={!!errors.message}
          />
          {errors.message && <ErrorMsg>{errors.message}</ErrorMsg>}
        </InputBox>
      </Section>

      <Section>
        <Label>상품 정보</Label>
        <ProductInfo>
          <ProductImage
            src={selectedGift.imageURL}
            alt={selectedGift.name}
          />
          <ProductDetails>
            <strong>{selectedGift.name}</strong>
            <span>{selectedGift.brandInfo.name}</span>
            <b>상품가 {selectedGift.price.sellingPrice.toLocaleString()}원</b>
          </ProductDetails>
        </ProductInfo>
      </Section>

      <OrderButton onClick={handleSubmit}>29000원 주문하기</OrderButton>
    </Wrapper>
  );
};

export default GiftForm;
