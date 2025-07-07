import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Section } from '@/components/layout';
import Container from '@/components/layout/Container';
import { products } from '@/data/products';
import { cardTemplates } from '@/data/cardTemplates';

function formatPhoneNumber(input: string) {
  // 숫자만 남기고, 010-xxxx-xxxx 형태로 포맷팅
  const onlyNums = input.replace(/[^0-9]/g, '');
  if (onlyNums.length <= 3) return onlyNums;
  if (onlyNums.length <= 7)
    return onlyNums.replace(/(\d{3})(\d{1,4})/, '$1-$2');
  return onlyNums.replace(/(\d{3})(\d{4})(\d{1,4})/, '$1-$2-$3');
}

function isValidPhoneNumber(phone: string) {
  // 010-xxxx-xxxx
  return /^010-\d{4}-\d{4}$/.test(phone);
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
const MessageTextarea = styled.textarea`
  width: 100%;
  min-height: 48px;
  font-size: 16px;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 24px;
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

  // 상품 정보 찾기
  const product = products.find((p) => String(p.id) === String(productId));

  // 카드 템플릿 선택 상태
  const [selectedCardIdx, setSelectedCardIdx] = useState(0);
  const selectedCard = cardTemplates[selectedCardIdx];

  // 메시지, 폼 상태
  const [message, setMessage] = useState(selectedCard.defaultTextMessage || '');
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');
  const [receiverPhone, setReceiverPhone] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [phoneError, setPhoneError] = useState('');

  // 카드 선택 시 메시지도 default로 변경
  const handleSelectCard = (idx: number) => {
    setSelectedCardIdx(idx);
    setMessage(cardTemplates[idx].defaultTextMessage || '');
  };

  // 휴대폰 번호 입력 핸들러 (자동 포맷팅)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setReceiverPhone(formatted);
    if (phoneError) setPhoneError('');
  };

  // 주문하기 버튼 클릭 시 유효성 검사
  const handleOrder = () => {
    if (!isValidPhoneNumber(receiverPhone)) {
      setPhoneError('올바른 전화번호 형식이 아닙니다.');
      return;
    }
    // TODO: 실제 주문 처리 로직
    alert('주문이 완료되었습니다!');
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
        {/* 카드 템플릿 슬라이더 */}
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

        {/* 선택된 카드 큰 이미지 */}
        <CardImagePreview>
          <CardLargeImg src={selectedCard.imageUrl} alt="선택된 카드" />
        </CardImagePreview>

        {/* 메시지 입력 */}
        <MessageTextarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="메시지를 입력하세요."
        />

        {/* 보내는 사람 */}
        <FormSection>
          <FormLabel>보내는 사람</FormLabel>
          <Input
            type="text"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            placeholder="이름을 입력하세요."
          />
          <InputHelper>
            * 실제 선물 발송 시 발신자(보내는 사람) 이름으로 반영되는
            정보입니다.
          </InputHelper>
        </FormSection>

        {/* 받는 사람 */}
        <FormSection>
          <FormLabel>받는 사람</FormLabel>
          <Input
            type="text"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
            placeholder="이름을 입력하세요."
          />
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
          />
        </FormSection>

        {/* 상품 정보 */}
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

      {/* 하단 주문 버튼 (고정) */}
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
