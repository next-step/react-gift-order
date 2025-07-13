import styled from '@emotion/styled';
import Card from '@/components/OrderForm/Card';
import { Sender } from '@/components/OrderForm/Sender';
import { Recipinet } from '@components/OrderForm/Recipient';
import { ProductInfo } from '@/components/OrderForm/ProductInfo';
import { useSearchParams } from 'react-router-dom';
import { OrderButton } from '@/components/OrderForm/OrderButton';
import productData from '@/data/productData';
import { useState } from 'react';
import { useOrderValidation } from '@/hooks/useOrderValidation';
import { MOCK_CARDFORM_LIST } from './mock';

const Wrapper = styled.section(({ theme }) => ({
  width: '100%',
  paddingBottom: '3.125rem',
  backgroundColor: theme.semanticColors.background.default,
}));

const Margin = styled.div<{ height: string }>`
  width: 100%;
  height: ${({ height }) => height};
  background-color: transparent;
`;

const OrderForm = () => {
  const defaultCard = MOCK_CARDFORM_LIST[0];
  const [message, setMessage] = useState(defaultCard.defaultTextMessage || '');
  const [senderValue, setSenderValue] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [recipientPhone, setRecipientPhone] = useState('');

  const { errors, validate } = useOrderValidation({
    message,
    sender: senderValue,
    recipientName,
    recipientPhone,
  });

  const handleOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    const ok = validate();
    if (ok) {
      alert('주문이 완료되었습니다.');
    }
  };
  const [searchParams] = useSearchParams();
  const productId = Number(searchParams.get('productId'));

  const selectedProduct = productId === productData.id ? productData : null;

  if (!selectedProduct) {
    return <div>존재하지 않는 상품입니다.</div>;
  }

  return (
    <Wrapper>
      <Card message={message} onMessageChange={setMessage} messageError={errors.message} />
      <Margin height={'8px'} />
      <Sender value={senderValue} onChange={setSenderValue} error={errors.sender} />
      <Margin height={'8px'} />
      <Recipinet
        name={recipientName}
        onChangeName={setRecipientName}
        phone={recipientPhone}
        onChangePhone={setRecipientPhone}
        errorName={errors.recipientName}
        errorPhone={errors.recipientPhone}
      />
      <Margin height={'8px'} />
      <ProductInfo product={selectedProduct} />
      <OrderButton onClick={handleOrder} />
    </Wrapper>
  );
};

export default OrderForm;
