import styled from '@emotion/styled';
import MessageCardSection from './components/MessageCardSection';
import MessageInput from './components/MessageInput';
import SenderInfo from './components/SenderInfo';
import ReceiverInfo from './components/ReceiverInfo';
import ProductInfo from './components/ProductInfo';
import OrderButton from './components/OrderButton';

const Section = styled.section`
  width: 100%;
  max-width: 720px;
  padding-bottom: 3.125rem;
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
`;

const OrderPage = () => {
  const handleSubmit = () => {};
  return (
    <Section>
      <form onSubmit={handleSubmit}>
        <MessageCardSection />
        <MessageInput />
        <SenderInfo />
        <ReceiverInfo />
        <ProductInfo />
        <OrderButton />
      </form>
    </Section>
  );
};

export default OrderPage;
