import Header from '@/components/Common/Header';
import Divider from '@/components/Common/Divider';
import styled from '@emotion/styled';
import { SectionContainer, SectionTitle } from '@/components/Common/SectionLayout';
import CardList from '@/components/Order/CardList';
import { useCardSelection } from '@/hooks/useCardSelection';
import { useOrderForm } from '@/hooks/useOrderForm';
import BorderInputBox from '@/components/Common/BorderInputBox';
import { useParams, useNavigate } from 'react-router-dom';
import { mockGiftItems } from '@/mocks/itemListMock';
import { useEffect, useRef } from 'react';

const Order = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const id = Number(itemId);
  const item = mockGiftItems.find((item) => item.id === id);

  const { selectedCard, selectCard } = useCardSelection();
  const { message, senderName, receiverName, receiverPhoneNumber, itemCount } = useOrderForm();

  const hasUserEditedMessage = useRef(false);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    hasUserEditedMessage.current = true;
    message.onChange(e);
  };

  useEffect(() => {
    if (selectedCard?.defaultTextMessage && !hasUserEditedMessage.current && message.value === '') {
      message.onChange({
        target: { value: selectedCard.defaultTextMessage },
      } as React.ChangeEvent<HTMLTextAreaElement>);
    }
  }, [selectedCard, message]);

  const navigate = useNavigate();

  if (!item) return <p>상품 정보를 찾을 수 없습니다.</p>;

  const handleOrderSubmit = () => {
    const isMessageVaild = message.validate();
    const isSenderNameValid = senderName.validate();
    const isReceiverNameValid = receiverName.validate();
    const isPhoneValid = receiverPhoneNumber.validate();
    const isItemCountValid = itemCount.validate();

    const valid =
      isMessageVaild &&
      isSenderNameValid &&
      isReceiverNameValid &&
      isPhoneValid &&
      isItemCountValid;
    if (valid) {
      alert(
        `주문이 완료되었습니다.\n상품명: ${item?.name}\n구매 수량: ${itemCount.value}\n발신자 이름: ${senderName.value}\n메시지: ${message.value}`
      );
      navigate('/');
    }
  };

  return (
    <>
      <Header title="선물하기" />

      <OrderContainer>
        <SectionContainer>
          <CardList selectedCardId={selectedCard?.id} onSelectCard={selectCard} />

          {selectedCard && (
            <SelectedCardPreview>
              <CardImageWraaper>
                <CardImage src={selectedCard.imageUrl} />
              </CardImageWraaper>
              <CardMessageTextArea
                id="order-message"
                value={message.value}
                placeholder="메시지를 입력해주세요."
                isError={Boolean(message.error)}
                onChange={handleMessageChange}
              />
              <MessageTextAreaCaption isError={Boolean(message.error)}>
                {message.error || ' '}{' '}
              </MessageTextAreaCaption>
            </SelectedCardPreview>
          )}
        </SectionContainer>
        <Divider />
        <SectionContainer>
          <SectionTitle>보내는 사람</SectionTitle>
          <BorderInputBox
            id="sender-name"
            type="text"
            value={senderName.value}
            onChange={senderName.onChange}
            message={senderName.error || '* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.'}
            placeholder="이름을 입력하세요."
            isError={Boolean(senderName.error)}
          />
        </SectionContainer>
        <Divider />
        <SectionContainer>
          <SectionTitle>받는 사람</SectionTitle>
          <ReceiverInputWrapper>
            <InfoTitle>이름</InfoTitle>
            <BorderInputBox
              id="receiver-name"
              type="text"
              value={receiverName.value}
              onChange={receiverName.onChange}
              message={receiverName.error}
              placeholder="이름을 입력하세요."
              isError={Boolean(receiverName.error)}
            />
          </ReceiverInputWrapper>
          <ReceiverInputWrapper>
            <InfoTitle>전화번호</InfoTitle>
            <BorderInputBox
              id="phonenumber"
              type="text"
              value={receiverPhoneNumber.value}
              onChange={receiverPhoneNumber.onChange}
              message={receiverPhoneNumber.error}
              placeholder="전화번호를 입력하세요."
              isError={Boolean(receiverPhoneNumber.error)}
            />
          </ReceiverInputWrapper>
          <ReceiverInputWrapper>
            <InfoTitle>수량</InfoTitle>
            <BorderInputBox
              id="item-count"
              type="number"
              value={itemCount.value.toString()}
              onChange={itemCount.onChange}
              message={itemCount.error}
              isError={Boolean(itemCount.error)}
              placeholder="수량을 입력하세요"
            />
          </ReceiverInputWrapper>
        </SectionContainer>
        <Divider />
        <SectionContainer>
          <SectionTitle>상품 정보</SectionTitle>
          <ItemWrapper>
            <ItemImg src={item.imageURL} />
            <ItemTextInfoWrapper>
              <ItemBrand>{item.brandInfo.name}</ItemBrand>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>{item.price.sellingPrice.toLocaleString()}원</ItemPrice>
            </ItemTextInfoWrapper>
          </ItemWrapper>
        </SectionContainer>
        <OrderButton onClick={handleOrderSubmit}>
          {item.price.sellingPrice.toLocaleString()}원 주문하기
        </OrderButton>
      </OrderContainer>
    </>
  );
};

export default Order;

const OrderContainer = styled.main`
  width: 100%;
  max-width: 720px;
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
  overflow-y: auto;
  margin: 0 auto;
  padding-bottom: 60px;
`;

const SelectedCardPreview = styled.div`
  margin-top: ${({ theme }) => theme.spacing.spacing4};
  display: flex;
  flex-direction: column;
`;

const CardImageWraaper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardImage = styled.img`
  width: 100%;
  max-width: 360px;
  border-radius: 12px;
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

const CardMessageTextArea = styled.textarea<{ isError: boolean }>`
  width: 100%;
  border-radius: 4px;
  border: 1px solid
    ${({ isError, theme }) => (isError ? theme.colors.critical : theme.colors.gray400)};
  min-height: 100px;
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const MessageTextAreaCaption = styled.span<{ isError: boolean }>`
  color: ${({ isError, theme }) => (isError ? theme.colors.critical : theme.colors.gray600)};
  font-size: ${({ theme }) => theme.font.label2Regular.size};
  margin-top: 4px;
`;

const ReceiverInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const InfoTitle = styled.p`
  min-width: 3.5rem;
`;

const ItemWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing4};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const ItemImg = styled.img`
  object-fit: cover;
  height: 80px;
  width: 80px;
`;

const ItemTextInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemBrand = styled.p`
  ${({ theme }) => `
    font-size: ${theme.font.body2Regular.size};
    font-weight: ${theme.font.body2Regular.weight};
    line-height: ${theme.font.body2Regular.lineHeight};
  `}
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.gray600};
`;

const ItemName = styled.p`
  ${({ theme }) => `
    font-size: ${theme.font.body2Regular.size};
    font-weight: ${theme.font.body2Regular.weight};
    line-height: ${theme.font.body2Regular.lineHeight};
  `}
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ItemPrice = styled.p`
  ${({ theme }) => `
    font-size: ${theme.font.subtitle1Bold.size};
    font-weight: ${theme.font.subtitle1Bold.weight};
    line-height: ${theme.font.subtitle1Bold.lineHeight};
  `}
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const OrderButton = styled.button`
  position: fixed;
  bottom: 0;
  margin-top: ${({ theme }) => theme.spacing.spacing4};
  width: 100%;
  max-width: 720px;
  ${({ theme }) => `
    font-size: ${theme.font.subtitle1Bold.size};
    font-weight: ${theme.font.subtitle1Bold.weight};
    line-height: ${theme.font.subtitle1Bold.lineHeight};
  `}
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  border-radius: 0;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    outline: none;
  }
`;
