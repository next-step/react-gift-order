import styled from '@emotion/styled';
import MessageCardSection from './components/MessageCardSection';
import MessageInput from './components/MessageInput';
import SenderInfo from './components/SenderInfo';
import ReceiverInfo from './components/ReceiverInfo';
import ProductInfo from './components/ProductInfo';
import OrderButton from './components/OrderButton';
import useCheckAmount from './hooks/useCheckAmount';
import useInput from './hooks/useInput';
import { useParams } from 'react-router-dom';

const Section = styled.section`
  width: 100%;
  max-width: 720px;
  padding-bottom: 3.125rem;
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
`;

const OrderPage = () => {
  const { id } = useParams<{ id: string }>();
  const index = Number(id);

  const messageInputText = useInput<HTMLTextAreaElement>('textarea', '축하해요.');
  const senderName = useInput<HTMLInputElement>('text');
  const receiverName = useInput<HTMLInputElement>('text');
  const receiverPhoneNumber = useInput<HTMLInputElement>('phoneNumber');
  const receiverAmount = useCheckAmount();

  const handleClick = () => {
    const isTextAreaValid = messageInputText.validate();
    const isSenderValid = senderName.validate();
    const isReceiverNameValid = receiverName.validate();
    const isReceiverPhoneNumberValid = receiverPhoneNumber.validate();
    const isReceiverAmountValid = receiverAmount.validate();

    if (
      isSenderValid &&
      isReceiverNameValid &&
      isReceiverPhoneNumberValid &&
      isReceiverAmountValid &&
      isTextAreaValid
    ) {
      alert('주문 성공!');
    }
  };

  return (
    <Section>
      <MessageCardSection />
      <MessageInput hook={messageInputText} />
      <SenderInfo hook={senderName} />
      <ReceiverInfo
        nameHook={receiverName}
        numberHook={receiverPhoneNumber}
        amountHook={receiverAmount}
      />
      <ProductInfo index={index} />
      <OrderButton onClick={handleClick} index={index} />
    </Section>
  );
};

export default OrderPage;
