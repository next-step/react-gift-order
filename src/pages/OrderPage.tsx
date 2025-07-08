import styled from '@emotion/styled';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { messageCards } from '@/data/messageCards';
import { mockProducts } from '@/data/products';
import Navigation from '@/components/Navigation';
import CardSelector from '@/components/OrderSection/CardSelector';
import MessageInput from '@/components/OrderSection/MessageInput';
import SenderForm from '@/components/OrderSection/SenderForm';
import ReceiverForm from '@/components/OrderSection/ReceiverForm';
import ProductInfo from '@/components/OrderSection/ProductInfo';
import OrderSubmitButton from '@/components/OrderSection/OrderSubmitButton';
import { useOrderForm } from '@/hooks/useOrderForm';

const OrderPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = mockProducts[Number(id) - 1];
  if (!product) return <div>잘못된 접근입니다.</div>;

  const {
    formValues,
    formErrors,
    handleChange,
    validateField,
    validateForm,
    totalPrice,
  } = useOrderForm(product.price.sellingPrice);

  const [selectedCardId, setSelectedCardId] = useState(messageCards[0].id);
  const selectedCard = messageCards.find(card => card.id === selectedCardId)!;

  useEffect(() => {
    handleChange('textMessage', selectedCard.defaultTextMessage);
  }, [selectedCardId]);

  const handleSubmit = () => {
    const isValid = validateForm();
    if (!isValid) return;

    alert(
      `주문이 완료되었습니다.\n` +
        `상품명: ${product.name}\n` +
        `구매 수량: ${formValues.quantity}\n` +
        `발신자 이름: ${formValues.senderName}\n` +
        `메시지: ${formValues.textMessage}`
    );

    navigate('/');
  };

  return (
    <>
      <Navigation />
      <Main>
        <Section>
          <CardSelector
            selectedCardId={selectedCardId}
            onSelect={setSelectedCardId}
          />
          <MessageInput
            value={String(formValues.textMessage)}
            onChange={e => {
              handleChange('textMessage', e.target.value);
              if (formErrors.textMessage) validateField('textMessage');
            }}
            error={formErrors.textMessage}
          />
          <SenderForm
            value={String(formValues.senderName)}
            onChange={e => {
              handleChange('senderName', e.target.value);
              if (formErrors.senderName) validateField('senderName');
            }}
            error={formErrors.senderName}
          />
          <ReceiverForm
            name={String(formValues.receiverName)}
            phone={String(formValues.receiverPhone)}
            quantity={Number(formValues.quantity)}
            onNameChange={e => {
              handleChange('receiverName', e.target.value);
              if (formErrors.receiverName) validateField('receiverName');
            }}
            onPhoneChange={e => {
              handleChange('receiverPhone', e.target.value);
              if (formErrors.receiverPhone) validateField('receiverPhone');
            }}
            onQuantityChange={e => {
              const value = Number(e.target.value);
              handleChange('quantity', value);
              if (formErrors.quantity) validateField('quantity');
            }}
            nameError={formErrors.receiverName}
            phoneError={formErrors.receiverPhone}
            quantityError={formErrors.quantity}
          />
          <ProductInfo product={product} />
          <OrderSubmitButton amount={totalPrice} onClick={handleSubmit} />
        </Section>
      </Main>
    </>
  );
};

export default OrderPage;

const Main = styled.main`
  padding: ${({ theme }) => theme.spacing[5]};
  background-color: ${({ theme }) => theme.color.semantic.background.default};
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
  margin-top: ${({ theme }) => theme.spacing[5]};
`;
