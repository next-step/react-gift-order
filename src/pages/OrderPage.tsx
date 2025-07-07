import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { messageCards } from '@/data/messageCards';
import { mockProducts } from '@/data/products';
import Navigation from '@/components/Navigation';
import { useState } from 'react';
import CardSelector from '@/components/OrderSection/CardSelector';
import MessageInput from '@/components/OrderSection/MessageInput';
import SenderForm from '@/components/OrderSection/SenderForm';
import ReceiverForm from '@/components/OrderSection/ReceiverForm';
import ProductInfo from '@/components/OrderSection/ProductInfo';
import OrderSubmitButton from '@/components/OrderSection/OrderSubmitButton';

const OrderPage = () => {
  const { id } = useParams();
  const product = mockProducts[Number(id) - 1];

  const [selectedCardId, setSelectedCardId] = useState(messageCards[0].id);
  const selectedCard = messageCards.find(card => card.id === selectedCardId)!;

  const [senderName, setSenderName] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [receiverPhone, setReceiverPhone] = useState('');
  const [quantity, setQuantity] = useState(1);

  const [senderError, setSenderError] = useState('');
  const [receiverNameError, setReceiverNameError] = useState('');
  const [receiverPhoneError, setReceiverPhoneError] = useState('');
  const [quantityError, setQuantityError] = useState('');

  const totalPrice = product.price.sellingPrice * quantity;

  const validateSender = () => {
    if (!senderName.trim()) {
      setSenderError('이름을 입력해주세요.');
      return false;
    }
    setSenderError('');
    return true;
  };

  const validateReceiverName = () => {
    if (!receiverName.trim()) {
      setReceiverNameError('이름을 입력해주세요.');
      return false;
    }
    setReceiverNameError('');
    return true;
  };

  const validateReceiverPhone = () => {
    const phoneRegex = /^01[0-9]{8,9}$/;
    if (!receiverPhone.trim()) {
      setReceiverPhoneError('전화번호를 입력해주세요.');
      return false;
    } else if (!phoneRegex.test(receiverPhone)) {
      setReceiverPhoneError('올바른 전화번호 형식이 아닙니다.');
      return false;
    }
    setReceiverPhoneError('');
    return true;
  };

  const validateQuantity = () => {
    if (quantity < 1) {
      setQuantityError('구매 수량은 1개 이상이어야 합니다.');
      return false;
    }
    setQuantityError('');
    return true;
  };

  const handleSubmit = () => {
    const senderValid = validateSender();
    const nameValid = validateReceiverName();
    const phoneValid = validateReceiverPhone();
    const quantityValid = validateQuantity();

    const isValid = senderValid && nameValid && phoneValid && quantityValid;

    if (!isValid) return;
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

          <MessageInput value={selectedCard.defaultTextMessage} />

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
