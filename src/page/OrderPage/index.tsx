import styled from '@emotion/styled';
import MessageCardSection from './components/MessageCardSection';
import MessageInput from './components/MessageInput';
import SenderInfo from './components/SenderInfo';
import ProductInfo from './components/ProductInfo';
import OrderButton from './components/OrderButton';
import useInput from './hooks/useInput';
import { useParams } from 'react-router-dom';
import ReceiverField from './components/ReceiverField';
import ReceiverModal from './components/ReceiverModal';
import { useState } from 'react';

const Section = styled.section`
  width: 100%;
  max-width: 720px;
  padding-bottom: 3.125rem;
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
`;

const OrderPage = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const { id } = useParams<{ id: string }>();
  const index = Number(id);

  const messageInputText = useInput<HTMLTextAreaElement>('textarea', '축하해요.');
  const senderName = useInput<HTMLInputElement>('text');

  const handleOrderClick = () => {
    const isTextAreaValid = messageInputText.validate();
    const isSenderValid = senderName.validate();
    if (isSenderValid && isTextAreaValid) {
      alert('주문 성공!');
    }
  };

  return (
    <>
      <Section>
        <MessageCardSection />
        <MessageInput hook={messageInputText} />
        <SenderInfo hook={senderName} />
        <ReceiverField onClick={handleClick} />
        <ProductInfo index={index} />
        <OrderButton onClick={handleOrderClick} index={index} />
      </Section>
      {clicked && <ReceiverModal onClick={handleClick} />}
    </>
  );
};

export default OrderPage;
