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
import { ERROR_MESSAGES } from '@/constants/validation';

const OrderPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = mockProducts[Number(id) - 1];
  if (!product) return <div>잘못된 접근입니다.</div>;

  const [selectedCardId, setSelectedCardId] = useState(messageCards[0].id);
  const selectedCard = messageCards.find(card => card.id === selectedCardId)!;

  const [textMessage, setTextMessage] = useState(
    selectedCard.defaultTextMessage
  );
  const [textMessageError, setTextMessageError] = useState('');

  useEffect(() => {
    setTextMessage(selectedCard.defaultTextMessage);
  }, [selectedCardId]);

  const {
    senderName,
    setSenderName,
    receiverName,
    setReceiverName,
    receiverPhone,
    setReceiverPhone,
    quantity,
    setQuantity,
    senderError,
    receiverNameError,
    receiverPhoneError,
    quantityError,
    validateSender,
    validateReceiverName,
    validateReceiverPhone,
    validateQuantity,
    validateForm,
    totalPrice,
  } = useOrderForm(product.price.sellingPrice);

  const validateTextMessage = () => {
    if (!textMessage.trim()) {
      setTextMessageError(ERROR_MESSAGES.EMPTY_MESSAGE);
      return false;
    }
    setTextMessageError('');
    return true;
  };

  const handleSubmit = () => {
    const isValid = validateForm() && validateTextMessage();
    if (!isValid) return;

    alert(
      `주문이 완료되었습니다.\n` +
        `상품명: ${product.name}\n` +
        `구매 수량: ${quantity}\n` +
        `발신자 이름: ${senderName}\n` +
        `메시지: ${textMessage}`
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
            value={textMessage}
            onChange={e => {
              setTextMessage(e.target.value);
              if (textMessageError) validateTextMessage();
            }}
            error={textMessageError}
          />
          <SenderForm
            value={senderName}
            onChange={e => {
              setSenderName(e.target.value);
              if (senderError) validateSender();
            }}
            error={senderError}
          />
          <ReceiverForm
            name={receiverName}
            phone={receiverPhone}
            quantity={quantity}
            onNameChange={e => {
              setReceiverName(e.target.value);
              if (receiverNameError) validateReceiverName();
            }}
            onPhoneChange={e => {
              setReceiverPhone(e.target.value);
              if (receiverPhoneError) validateReceiverPhone();
            }}
            onQuantityChange={e => {
              const value = Number(e.target.value);
              setQuantity(value);
              if (quantityError) validateQuantity();
            }}
            nameError={receiverNameError}
            phoneError={receiverPhoneError}
            quantityError={quantityError}
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
