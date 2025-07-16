import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from '@emotion/styled';

import { messageCards } from '@/mock/cards';
import { giftItems } from '@/mock/giftItems';
import OrderForm, { OrderFormData } from '@/components/order/OrderForm';

const OrderPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = giftItems.find((item) => item.id === Number(id));
  const navigate = useNavigate();

  const [selectedCardId, setSelectedCardId] = useState<number>(
    messageCards[0].id
  );
  const selectedCard = messageCards.find(
    (c) => c.id === selectedCardId
  )!;

  const handleOrderSubmit = (form: OrderFormData) => {
    alert(
      `주문이 완료되었습니다.\n` +
        `상품명: ${product!.name}\n` +
        `발신자 이름: ${form.sender}\n` +
        `메시지: ${form.message}\n\n` +
        `[받는 사람 목록]\n` +
        form.recipients
          .map(
            (r, i) => `${i + 1}. ${r.name} / ${r.phone} / 수량 ${r.quantity}개`
          )
          .join('\n')
    );
    navigate('/');
  };

  if (!product) return <div>상품을 찾을 수 없습니다.</div>;

  return (
    <Container>
      <Section>
        <SectionTitle>메시지 카드 선택</SectionTitle>
        <CardSelector>
          {messageCards.map((card) => (
            <MessageCardThumb
              key={card.id}
              src={card.thumbUrl}
              alt={card.defaultTextMessage}
              isSelected={card.id === selectedCardId}
              onClick={() => setSelectedCardId(card.id)}
            />
          ))}
        </CardSelector>
      </Section>

      <Section>
        <SelectedCardSection>
          <SelectedImage
            src={selectedCard.imageUrl}
            alt={selectedCard.defaultTextMessage}
          />
        </SelectedCardSection>
      </Section>

      <Section>
        <FormSection>
          <OrderForm
            onSubmit={handleOrderSubmit}
            product={product}
            defaultMessage={selectedCard.defaultTextMessage}
          />
        </FormSection>
      </Section>
    </Container>
  );
};

export default OrderPage;


const Container = styled.div`
  padding-bottom: 100px;
`;

const Section = styled.section`
  max-width: 720px;
  margin: 0 auto;
  padding: 16px;
`;

const SectionTitle = styled.h2`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.textColors.default};
`;

const CardSelector = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 8px;
`;

const MessageCardThumb = styled.img<{ isSelected: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  border: 2px solid
    ${({ isSelected, theme }) =>
      isSelected ? theme.sementicColors.kakaoYellow : 'transparent'};
  cursor: pointer;
`;

const SelectedCardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectedImage = styled.img`
  width: 240px;
  border-radius: 16px;
`;


const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
