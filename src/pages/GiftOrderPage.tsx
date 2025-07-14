import Divider from '@components/common/Divider';
import CardSelector from '@components/GifrOrderPage/CardSelector';
import OrderButton from '@components/GifrOrderPage/OrderButton';
import ProductSummary from '@components/GifrOrderPage/ProductSummary';
import ReceiveForm from '@components/GifrOrderPage/ReceiveForm';
import SenderForm from '@components/GifrOrderPage/SenderForm';
import { useState } from 'react';

const GiftOrderPage = () => {
  const [sender, setSender] = useState('');
  const [price, setPrice] = useState(0);
  const handlePriceButton = () => {
    console.log('주문하기');
  };
  return (
    <>
      <CardSelector />
      <Divider />
      <SenderForm value={sender} onChange={setSender} />
      <Divider />
      <ReceiveForm />
      <Divider />
      <ProductSummary />
      <OrderButton price={price} onClick={handlePriceButton} />
    </>
  );
};

export default GiftOrderPage;
