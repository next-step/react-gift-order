import { useMemo, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';

import { LetterCardSelector } from '@/components/LetterCardSelector';
import { OrderForm } from '@/components/OrderForm';
import { ProductInfo } from '@/components/ProductInfo';
import { cardTemplates } from '@/data/cardTemplateMock';
import { productListMock } from '@/data/productListMock';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { useOrderStore } from '@/stores/orderStore';
import { Button } from '@/components/common/Button';

export default function OrderPage() {
  const { productId } = useParams();
  const product = productListMock.find(p => p.id === Number(productId));

  const [selectedCardId, setSelectedCardId] = useState(cardTemplates[0].id);
  const selectedCard = useMemo(
    () => cardTemplates.find(card => card.id === selectedCardId),
    [selectedCardId]
  );

  const { receivers } = useOrderStore();

  const totalQuantity = useMemo(() => {
    return receivers.reduce((total, receiver) => total + (receiver.quantity || 0), 0);
  }, [receivers]);

  const formRef = useRef<HTMLFormElement>(null);

  if (!product) {
    return <NotFoundPage />;
  }

  const totalPrice = product.price.sellingPrice * totalQuantity;

  const handleOrderSubmit = () => {
    formRef.current?.requestSubmit();
  };

  return (
    <Container>
      <LetterCardContainer>
        <LetterCardSelector
          templates={cardTemplates}
          selectedId={selectedCardId}
          onSelect={setSelectedCardId}
        />
      </LetterCardContainer>

      <VerticalSpacing size="12px" />

      {selectedCard && (
        <PreviewContainer>
          <Preview src={selectedCard.imageUrl} alt={`${selectedCard.id} preview`} />
        </PreviewContainer>
      )}

      <VerticalSpacing size="40px" />

      <OrderForm ref={formRef} selectedCard={selectedCard} />

      <VerticalSpacing size="8px" backgroundColor="#f3f4f5" />

      <FieldSet>
        <Legend>상품 정보</Legend>
        <ProductInfo product={product} />
      </FieldSet>

      <VerticalSpacing size="60px" />

      {createPortal(
        <OrderButton onClick={handleOrderSubmit}>
          {totalPrice.toLocaleString()}원 주문하기
        </OrderButton>,
        document.body as HTMLElement
      )}
    </Container>
  );
}

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding-bottom: 80px; /* 주문하기 버튼에 가려지지 않도록 */
`;

const LetterCardContainer = styled.header`
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  padding: 6px 8px;
  overflow-x: scroll;
`;

const PreviewContainer = styled.div`
  width: 100%;
  max-width: 360px;
  aspect-ratio: 3/2;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
`;

const Preview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

import { FieldSet, Legend } from '@/components/common/FieldSet';

const OrderButton = styled(Button)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 48px;
  border-radius: 0;
  font-size: ${({ theme }) => theme.typography.label.label1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label1Bold.fontWeight};
  background-color: ${({ theme }) => theme.semanticColors.brand.kakaoYellow};
`;

import { VerticalSpacing } from '@/components/common/VerticalSpacing';