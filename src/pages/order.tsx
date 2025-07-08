import { useState } from 'react';
import { Header } from '../components/common/Header';
import MessageCard from '../components/MessageCard';
import styled from '@emotion/styled';
import { orderCardTemplates } from '../data/orderCardTemplateMock';
import { giftItem } from '../components/RankingGrid';
import { useInputWithValidation } from '../hooks/useInputValidation';

const MessaageWrapper = styled.div`
  padding: 8px 20px;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 720px;
`;
const MainImg = styled.img`
  width: 360px;
  height: 240px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const MessageInput = styled.textarea`
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  font-size: 16px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const SectionBox = styled.div`
  max-width: 720px;
  background-color: white;
  margin: 12px 20px;
  padding: 20px;
`;

const BottomOrderButton = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 720px;
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  text-align: center;
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
  color: black;
  cursor: pointer;
`;

const OrderInfoWrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

const Section = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  border-bottom: 8px solid #f1f1f1;
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 12px;
  color: #999;
  margin-top: 4px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const FieldLabel = styled.div`
  width: 80px;
  font-size: 14px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  flex: 1;
  padding: 12px 0px 12px 10px;
  border: 1px solid #dcdee3;
  border-radius: 8px;
  font-size: 14px;
  flex-direction: column;

  &::placeholder {
    color: #b0b0b0;
  }
  &:focus {
    border: 1px solid #dcdcdc;
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-left: 1px;
  margin-top: 5px;
`;

const ProductInfo = styled.div`
  width: 100%;
  padding: 12px 0px 12px 10px;
  border-radius: 0.5rem;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(238, 239, 241);
  display: flex;
  gap: 12px;
`;

const validateName = (value: string) => {
  if (!value.trim()) return '이름을 입력해주세요';

  return '';
};

const validatePhoneNum = (value: string) => {
  if (!value) return '전화번호를 입력해주세요';
  const phoneRegex = /^010[0-9]{8}$/;
  return phoneRegex.test(value)
    ? ''
    : '올바른 전화번호 형식이 아닙니다.';
};

const validateQuantity = (value: string) => {
  const num = Number(value);
  if (num < 1) return '구매 수량은 1개 이상이어야 합니다.';
  return '';
};

const Order = () => {
  const [selected, setSelected] = useState(
    orderCardTemplates[0].imageUrl
  );
  const product = giftItem;

  const [message, setMessage] = useState('축하해요.');

  const sendorNameInput = useInputWithValidation('', validateName);
  const receiverNameInput = useInputWithValidation('', validateName);
  const receiverPhoneInput = useInputWithValidation(
    '',
    validatePhoneNum
  );
  const quantityInput = useInputWithValidation('', validateQuantity);

  const priceSum =
    product.price.sellingPrice * Number(quantityInput.value);

  const isFormValid =
    sendorNameInput.isValid &&
    receiverNameInput.isValid &&
    receiverPhoneInput.isValid &&
    quantityInput.isValid;

  const handleOrder = () => {
    if (!isFormValid) return;

    alert(
      `주문이 완료되었습니다.\n 상품명: ${product.name}\n 구매 수량: ${quantityInput.value}\n 발신자 이름: ${sendorNameInput.value}\n 메시지: ${message}\n`
    );
  };

  return (
    <>
      <Header></Header>
      <MessaageWrapper>
        <SectionBox>
          {' '}
          <MessageCard
            selected={selected}
            onSelect={setSelected}
          ></MessageCard>
          <MainWrapper>
            <MainImg src={selected} />

            <MessageInput
              placeholder="메시지를 입력해주세요."
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </MainWrapper>
        </SectionBox>
      </MessaageWrapper>

      <OrderInfoWrapper>
        <Section>
          <Label>보내는 사람</Label>
          <Input
            type="text"
            placeholder="이름을 입력하세요."
            onChange={e => sendorNameInput.setValue(e.target.value)}
            onBlur={sendorNameInput.handleBlur}
          />
          {!sendorNameInput.isValid && (
            <ErrorText>{sendorNameInput.error}</ErrorText>
          )}
          <Description>
            * 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.
          </Description>
        </Section>

        <Section>
          <Label>받는 사람</Label>

          <Row>
            <FieldLabel>이름</FieldLabel>
            <div style={{ flex: 1 }}>
              <Input
                type="text"
                placeholder="이름을 입력하세요."
                onChange={e =>
                  receiverNameInput.setValue(e.target.value)
                }
                onBlur={receiverNameInput.handleBlur}
              />
              {!receiverNameInput.isValid && (
                <ErrorText>{receiverNameInput.error}</ErrorText>
              )}
            </div>
          </Row>

          <Row>
            <FieldLabel>전화번호</FieldLabel>
            <div style={{ flex: 1 }}>
              <Input
                type="tel"
                placeholder="전화번호를 입력하세요."
                onChange={e =>
                  receiverPhoneInput.setValue(e.target.value)
                }
                onBlur={receiverPhoneInput.handleBlur}
              />
              {!receiverPhoneInput.isValid && (
                <ErrorText>{receiverPhoneInput.error}</ErrorText>
              )}
            </div>
          </Row>

          <Row>
            <FieldLabel>수량</FieldLabel>
            <div style={{ flex: 1 }}>
              <Input
                type="number"
                onChange={e => quantityInput.setValue(e.target.value)}
              />
              {!quantityInput.isValid && (
                <ErrorText>{quantityInput.error}</ErrorText>
              )}{' '}
            </div>
          </Row>
          <Label>상품 정보</Label>
          <ProductInfo>
            <img
              src={product.imageURL}
              alt={product.name}
              width={80}
            />
            <div>
              <div style={{ fontWeight: 'bold' }}>{product.name}</div>
              <div style={{ color: '#888' }}>
                {product.brandInfo.name}
              </div>
              <div>
                상품가{' '}
                <strong>
                  {product.price.sellingPrice.toLocaleString()}원
                </strong>
              </div>
            </div>
          </ProductInfo>
        </Section>
      </OrderInfoWrapper>
      <BottomOrderButton onClick={handleOrder}>
        {priceSum}원 주문하기
      </BottomOrderButton>
    </>
  );
};

export default Order;
