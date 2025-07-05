import styled from "@emotion/styled";
import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import { orderCardMock } from "@/assets/orderCardMock";
import { useEffect, useState } from "react";
import useInput from "@/hooks/useInput";
import { rankingItemMock } from "@/assets/rankingItemMock";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTE_PATH } from "@/components/routes/Routes";

const Order = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const product = rankingItemMock.find((item) => item.id === Number(productId));
  if (!product) navigate(ROUTE_PATH.HOME);

  const [selectedCardId, setSelectedCardId] = useState(orderCardMock[0].id);
  const currentSelectedCardData = orderCardMock.find((card) => card.id === selectedCardId) ?? orderCardMock[0];

  const messageInput = useInput();
  const senderInput = useInput();
  const recipientNameInput = useInput();
  const recipientPhoneInput = useInput();
  const recipientCountInput = useInput();

  const totalPrice = (product?.price.sellingPrice as number) * Number(recipientCountInput.value);
  useEffect(() => {
    messageInput.setValue(currentSelectedCardData.defaultTextMessage);
  }, [selectedCardId]);
  return (
    <Container>
      <Content>
        <Divider spacing="0.75rem" />
        <CardList>
          {orderCardMock.map((card) => (
            <CardListItem
              key={card.id}
              selected={card.id === selectedCardId}
              alt={`${card.id}번 메시지 카드`}
              src={card.thumbUrl}
              onClick={() => setSelectedCardId(card.id)}
            ></CardListItem>
          ))}
        </CardList>
        <Divider spacing="0.75rem" />
        <SelectedCardWrapper>
          {currentSelectedCardData && (
            <SelectedCard alt={`${currentSelectedCardData.id}번 메시지 카드`} src={currentSelectedCardData.imageUrl} />
          )}
        </SelectedCardWrapper>
        <Divider spacing="2.5rem" />
        <CardMsgInputWrapper>
          <CardMsgInput value={messageInput.value} onChange={messageInput.onChange} />
        </CardMsgInputWrapper>
        <Divider spacing="2rem" />
        <Divider spacing="0.5rem" fill={false} />
        <InfoWrapper>
          <Divider spacing="1rem" />
          <InfoTitle>보내는 사람</InfoTitle>
          <Divider spacing="1rem" />
          <SenderInfoInput placeholder="이름을 입력하세요." onChange={senderInput.onChange} value={senderInput.value} />
          <SenderInfoMsg>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</SenderInfoMsg>
          <Divider spacing="1.5rem" />
        </InfoWrapper>
        <Divider spacing="0.5rem" fill={false} />
        <InfoWrapper>
          <Divider spacing="1rem" />
          <InfoTitle>받는 사람</InfoTitle>
          <Divider spacing="1rem" />
          <RecipientInfoInputWrapper>
            <RecipientInfoTitle>이름</RecipientInfoTitle>
            <RecipientInfoInput
              placeholder="이름을 입력하세요."
              onChange={recipientNameInput.onChange}
              value={recipientNameInput.value}
            />
          </RecipientInfoInputWrapper>
          <Divider spacing="0.5rem" />
          <RecipientInfoInputWrapper>
            <RecipientInfoTitle>전화번호</RecipientInfoTitle>
            <RecipientInfoInput
              placeholder="전화번호를 입력하세요."
              onChange={recipientPhoneInput.onChange}
              value={recipientPhoneInput.value}
            />
          </RecipientInfoInputWrapper>
          <Divider spacing="0.5rem" />
          <RecipientInfoInputWrapper>
            <RecipientInfoTitle>수량</RecipientInfoTitle>
            <RecipientInfoInput
              placeholder="여긴 임시 수량"
              onChange={recipientCountInput.onChange}
              value={recipientCountInput.value}
            />
          </RecipientInfoInputWrapper>
          <Divider spacing="1.5rem" />
        </InfoWrapper>
        <Divider spacing="0.5rem" fill={false} />
        <InfoWrapper>
          <Divider spacing="1rem" />
          <InfoTitle>상품 정보</InfoTitle>
          <Divider spacing="1rem" />
          <ProductInfoWrapper>
            <ProductInfoImg alt="product" src={product?.imageURL} />
            <div>
              <ProductInfoContentTitle>{product?.name}</ProductInfoContentTitle>
              <ProductInfoContentBrand>{product?.brandInfo.name}</ProductInfoContentBrand>
              <ProductInfoContentPrice>
                <ProductInfoContentPriceInfo>상품가 </ProductInfoContentPriceInfo>
                {product?.price.sellingPrice}원
              </ProductInfoContentPrice>
            </div>
          </ProductInfoWrapper>
          <Divider spacing="1.5rem" />
        </InfoWrapper>
        <Divider spacing="3.125rem" />
        <OrderBtn>{totalPrice}원 주문하기</OrderBtn>
      </Content>
    </Container>
  );
};

export default Order;

const Content = styled.div`
  background-color: ${({ theme }) => theme.color.backgroundColor.default};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;
const CardList = styled.div`
  width: 100%;
  overflow: auto scroll;
  display: flex;
  flex-wrap: nowrap;
  gap: ${({ theme }) => theme.spacing.spacing3};
  padding: ${({ theme }) => theme.spacing.spacing4};
`;
const CardListItem = styled.img<{ selected: boolean }>`
  width: 5.125rem;
  height: 3.5rem;
  border-radius: 0.5rem;
  border: 3px solid ${({ selected, theme }) => (selected ? `${theme.color.kakaoBrownPressed}` : "transparent")};
`;
const SelectedCardWrapper = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.spacing4};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SelectedCard = styled.img`
  max-width: 22.5rem;
  width: 100%;
  height: 100%;
  border-radius: 0.75rem;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.2) 0 2.5rem 1.25rem -1.875rem;
`;
const CardMsgInputWrapper = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.spacing4};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardMsgInput = styled.textarea`
  width: 100%;
  max-width: 42.5rem;
  height: 5rem;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.spacing4};
  font: ${({ theme }) => theme.typography.body1Regular};
  border: 1px solid ${({ theme }) => theme.color.gray600};
  border-radius: 0.5rem;
  outline: none;
  resize: none;
  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.gray900};
  }
`;
const InfoWrapper = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.spacing4};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InfoTitle = styled.p`
  width: 100%;
  font: ${({ theme }) => theme.typography.title2Bold};
  text-align: left;
`;
const SenderInfoInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  min-height: 2.75rem;
  border: 1px solid ${({ theme }) => theme.color.gray600};
  border-radius: 0.5rem;
  font: ${({ theme }) => theme.typography.body1Regular};
  padding: ${({ theme }) => `${theme.spacing.spacing1} ${theme.spacing.spacing3}`};
  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.gray900};
  }
`;
const SenderInfoMsg = styled.p`
  width: 100%;
  font: ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.color.gray600};
  padding: ${({ theme }) => theme.spacing.spacing1};
  text-align: left;
`;
const RecipientInfoInputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing3};
`;
const RecipientInfoTitle = styled.p`
  min-width: 3.75rem;
  font: ${({ theme }) => theme.typography.body1Regular};
`;
const RecipientInfoInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  min-height: 2.75rem;
  border: 1px solid ${({ theme }) => theme.color.gray600};
  border-radius: 0.5rem;
  font: ${({ theme }) => theme.typography.body1Regular};
  padding: ${({ theme }) => `${theme.spacing.spacing1} ${theme.spacing.spacing3}`};
  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.gray900};
  }
`;
const ProductInfoWrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing3};
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.gray600};
  border-radius: 0.5rem;
  gap: ${({ theme }) => theme.spacing.spacing3};
`;
const ProductInfoImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  object-fit: cover;
`;
const ProductInfoContentTitle = styled.p`
  font: ${({ theme }) => theme.typography.body2Regular};
  text-align: left;
`;
const ProductInfoContentBrand = styled.p`
  font: ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.color.gray600};
  text-align: left;
`;
const ProductInfoContentPriceInfo = styled.span`
  font: ${({ theme }) => theme.typography.label1Regular};
  color: ${({ theme }) => theme.color.gray600};
`;
const ProductInfoContentPrice = styled.p`
  font: ${({ theme }) => theme.typography.label2Bold};
  text-align: left;
`;
const OrderBtn = styled.button`
  background-color: ${({ theme }) => theme.color.kakaoYellow};
  font: ${({ theme }) => theme.typography.label2Bold};
  border: none;
  width: 100%;
  max-width: 720px;
  height: 3.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.color.kakaoYellowHover};
  }
  &:active:not(:disabled) {
    background-color: ${({ theme }) => theme.color.kakaoYellowActive};
  }
`;
