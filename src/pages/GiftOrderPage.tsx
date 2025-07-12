import Divider from '@components/common/Divider';
import CardSelector from '@components/GifrOrderPage/CardSelector';
import OrderButton from '@components/GifrOrderPage/OrderButton';
import ProductSummary from '@components/GifrOrderPage/ProductSummary';
import ReceiveForm from '@components/GifrOrderPage/ReceiveForm';
import SenderForm from '@components/GifrOrderPage/SenderForm';
import { useState } from 'react';

const GiftOrderPage = () => {
  const [sender, setSender] = useState('');
  return (
    <>
      <CardSelector />
      <Divider />
      <SenderForm value={sender} onChange={setSender} />
      <Divider />
      <ReceiveForm />
      <Divider />
      <ProductSummary />
      <OrderButton />
    </>
  );
};

export default GiftOrderPage;
