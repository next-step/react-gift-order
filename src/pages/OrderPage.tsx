import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Section } from '@/components/layout';
import Container from '@/components/layout/Container';
import { products } from '@/data/products';
import { cardTemplates } from '@/data/cardTemplates';

function isValidPhoneNumber(phone: string) {
  return /^010-\d{4}-\d{4}$/.test(phone) || /^010\d{8}$/.test(phone);
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
const OrderButton = styled.div`
  background: #fee500;
  color: #222;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  padding: 18px 0;
  border-radius: 12px;
  box-shadow: 0 -2px 8px #0001;
  cursor: pointer;
`;

const OrderPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => String(p.id) === String(productId));
  const [selectedCardIdx, setSelectedCardIdx] = useState(0);
  const selectedCard = cardTemplates[selectedCardIdx];
  const [message, setMessage] = useState(selectedCard.defaultTextMessage || '');
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');
  const [receiverPhone, setReceiverPhone] = useState('');
  const [quantity, setQuantity] = useState(1);
  // 에러 상태
  const [messageError, setMessageError] = useState('');
  const [senderError, setSenderError] = useState('');
  const [receiverError, setReceiverError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [quantityError, setQuantityError] = useState('');

  const handleSelectCard = (idx: number) => {
    setSelectedCardIdx(idx);
    setMessage(cardTemplates[idx].defaultTextMessage || '');
  };

  // 전화번호 입력: 자동 포맷팅 없이, 사용자가 직접 입력
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReceiverPhone(e.target.value);
    if (phoneError) setPhoneError('');
  };

  const handleOrder = () => {
    if (!product) return;
    let valid = true;
    if (!message.trim()) {
      setMessageError('메시지를 입력해주세요.');
      valid = false;
    } else {
      setMessageError('');
    }
    if (!sender.trim()) {
      setSenderError('이름을 입력해주세요.');
      valid = false;
    } else {
      setSenderError('');
    }
    if (!receiver.trim()) {
      setReceiverError('이름을 입력해주세요.');
      valid = false;
    } else {
      setReceiverError('');
    }
    if (!isValidPhoneNumber(receiverPhone)) {
      setPhoneError('올바른 전화번호 형식이 아닙니다.');
      valid = false;
    } else {
      setPhoneError('');
    }
    if (quantity < 1) {
      setQuantityError('구매 수량은 1개 이상이어야 합니다.');
      valid = false;
    } else {
      setQuantityError('');
    }
    if (!valid) return;
    // 안내 메시지 구성
    const msg = `주문이 완료되었습니다.\n상품명: ${product.name}\n구매 수량: ${quantity}\n발신자 이름: ${sender}\n메시지: ${message}`;
    alert(msg);
    navigate('/');
  };

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
              selected={idx === selectedCardIdx}
              onClick={() => handleSelectCard(idx)}
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="메시지를 입력하세요."
          error={!!messageError}
        />
        {messageError && <ErrorText>{messageError}</ErrorText>}
        <FormSection>
          <FormLabel>보내는 사람</FormLabel>
          <Input
            type="text"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            placeholder="이름을 입력하세요."
            error={!!senderError}
          />
          {senderError && <ErrorText>{senderError}</ErrorText>}
          <InputHelper>
            * 실제 선물 발송 시 발신자(보내는 사람) 이름으로 반영되는
            정보입니다.
          </InputHelper>
        </FormSection>
        <FormSection>
          <FormLabel>받는 사람</FormLabel>
          <Input
            type="text"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
            placeholder="이름을 입력하세요."
            error={!!receiverError}
          />
          {receiverError && <ErrorText>{receiverError}</ErrorText>}
          <Input
            type="tel"
            value={receiverPhone}
            onChange={handlePhoneChange}
            placeholder="전화번호를 입력하세요."
            error={!!phoneError}
            maxLength={13}
          />
          {phoneError && <ErrorText>{phoneError}</ErrorText>}
          <Input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
            placeholder="수량"
            error={!!quantityError}
          />
          {quantityError && <ErrorText>{quantityError}</ErrorText>}
        </FormSection>
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
          <OrderButton onClick={handleOrder}>
            {product.price.sellingPrice.toLocaleString()}원 주문하기
          </OrderButton>
        </Container>
      </OrderButtonBar>
    </Section>
  );
};

export default OrderPage;
