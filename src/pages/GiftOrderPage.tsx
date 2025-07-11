import CardSelector from '@components/GifrOrderPage/CardSelector';
import MessageInput from '@components/GifrOrderPage/MessageInput';
import OrderButton from '@components/GifrOrderPage/OrderButton';
import ProductSummary from '@components/GifrOrderPage/ProductSummary';
import ReceiveForm from '@components/GifrOrderPage/ReceiveForm';
import SenderForm from '@components/GifrOrderPage/SenderForm';
import React from 'react';

const GiftOrderPage = () => {
  return (
    <>
      <CardSelector />
      <MessageInput />
      <SenderForm />
      <ReceiveForm />
      <ProductSummary />
      <OrderButton />
    </>
  );
};

export default GiftOrderPage;
