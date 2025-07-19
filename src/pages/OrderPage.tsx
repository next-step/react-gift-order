import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { cardTemplates } from '@/data/cardTemplateMock';
import { productListMock } from '@/data/productListMock';
import { LetterCardSelector } from '@/components/LetterCardSelector';
import { OrderForm } from '@/components/OrderForm';
import { ProductInfo } from '@/components/ProductInfo';
import { useOrderForm } from '@/hooks/useOrderForm';
import { NotFoundPage } from '@/pages/NotFoundPage';
import type { OrderForm as OrderFormType } from '@/types/order';

export default function OrderPage() {
  const { productId } = useParams();
  const product = productListMock.find(p => p.id === Number(productId));

  const [selectedCardId, setSelectedCardId] = useState(cardTemplates[0].id);
  const selectedCard = useMemo(
    () => cardTemplates.find(card => card.id === selectedCardId),
    [selectedCardId]
  );

  const initialOrderFormValues = useMemo(() => ({
    message: selectedCard?.defaultTextMessage || '',
    quantity: 1,
  }), [selectedCard]);

  const { form, errors, updateForm, handleSubmit } = useOrderForm(initialOrderFormValues);

  

  const handleOrderSubmit = (submittedForm: OrderFormType) => {
    // TODO: API 연동
    console.log('Form submitted successfully:', submittedForm);
    alert('주문이 완료되었습니다! (콘솔 확인)');
  };

  if (!product) {
    return <NotFoundPage />;
  }

  const totalPrice = product.price.sellingPrice * form.quantity;

  return (
    <Container>
      <ProductInfo product={product} />
      <LetterCardSelector
        templates={cardTemplates}
        selectedId={selectedCardId}
        onSelect={setSelectedCardId}
      />
      {selectedCard && (
        <Preview src={selectedCard.imageUrl} alt={`${selectedCard.id} preview`} />
      )}
      <OrderForm
        form={form}
        errors={errors}
        updateForm={updateForm}
        handleSubmit={e => handleSubmit(e, handleOrderSubmit)}
        totalPrice={totalPrice}
      />
    </Container>
  );
}

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding-bottom: 80px; /* 주문하기 버튼에 가려지지 않도록 */
`;

const Preview = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-top: 12px;
`;
