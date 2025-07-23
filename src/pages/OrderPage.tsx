import { useMemo, useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';

import { LetterCardSelector } from '@/components/LetterCardSelector';
import { OrderForm } from '@/components/OrderForm';
import { ProductInfo } from '@/components/ProductInfo';
import { cardTemplates } from '@/data/cardTemplateMock';
import { productListMock } from '@/data/productListMock';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { Button } from '@/components/common/Button';
import { useOrderStore } from '@/stores/orderStore';
import { FieldSet, Legend } from '@/components/common/FieldSet';
import { VerticalSpacing } from '@/components/common/VerticalSpacing';

export default function OrderPage() {
  const { productId } = useParams();
  const product = productListMock.find(p => p.id === Number(productId));

  const [selectedCardId, setSelectedCardId] = useState(cardTemplates[0].id);
  const selectedCard = useMemo(
    () => cardTemplates.find(card => card.id === selectedCardId),
    [selectedCardId]
  );

  const formRef = useRef<HTMLFormElement>(null);
  const { setReceivers } = useOrderStore();

  useEffect(() => {
    return () => {
      setReceivers([]);
    };
  }, [setReceivers]);

  if (!product) {
    return <NotFoundPage />;
  }

  const handleSelectCard = (id: number) => {
    setSelectedCardId(id);
  };

  const handleOrderSubmit = () => {
    formRef.current?.requestSubmit();
  };

  return (
    <Container>
      <LetterCardContainer>
        <LetterCardSelector
          templates={cardTemplates}
          selectedId={selectedCardId}
          onSelect={handleSelectCard}
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

      <OrderButton onClick={handleOrderSubmit}>주문하기</OrderButton>
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
