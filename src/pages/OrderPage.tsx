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
import type { FormField } from '@/hooks/useOrderForm';
import { ROUTES } from '@/constants/routes';

const OrderPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = mockProducts[Number(id) - 1];

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

  const isFormField = (name: string): name is FormField => {
    return [
      'senderName',
      'receiverName',
      'receiverPhone',
      'quantity',
      'textMessage',
    ].includes(name);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;

    alert(
      `주문이 완료되었습니다.\n` +
        `상품명: ${product.name}\n` +
        `구매 수량: ${formValues.quantity}\n` +
        `발신자 이름: ${formValues.senderName}\n` +
        `메시지: ${formValues.textMessage}`
    );

    navigate(ROUTES.HOME);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (!isFormField(name)) return;

    const parsedValue = name === 'quantity' ? Number(value) : value;

    handleChange(name, parsedValue);

    if (formErrors[name]) {
      validateField(name);
    }
  };

  if (!product) return <div>잘못된 접근입니다.</div>;

  return (
    <>
      <Navigation />
      <Main>
        <Form onSubmit={handleSubmit}>
          <CardSelector
            selectedCardId={selectedCardId}
            onSelect={setSelectedCardId}
          />
          <MessageInput
            name="textMessage"
            value={String(formValues.textMessage)}
            onChange={handleInputChange}
            error={formErrors.textMessage}
          />
          <SenderForm
            name="senderName"
            value={String(formValues.senderName)}
            onChange={handleInputChange}
            error={formErrors.senderName}
          />
          <ReceiverForm
            values={{
              receiverName: String(formValues.receiverName),
              receiverPhone: String(formValues.receiverPhone),
              quantity: Number(formValues.quantity),
            }}
            errors={{
              receiverName: formErrors.receiverName,
              receiverPhone: formErrors.receiverPhone,
              quantity: formErrors.quantity,
            }}
            onChange={handleInputChange}
          />
          <ProductInfo product={product} />
          <OrderSubmitButton amount={totalPrice} />
        </Form>
      </Main>
    </>
  );
};

export default OrderPage;

const Main = styled.main`
  background-color: ${({ theme }) => theme.color.semantic.background.default};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
  margin-top: ${({ theme }) => theme.spacing[5]};
`;
