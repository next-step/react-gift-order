import { useState } from 'react';
import { Header } from '../components/common/Header';
import MessageCard from '../components/MessageCard';
import OrderCustomerInfo from '../components/OrderCustomerInfo';

const Order = () => {
  const [selected, setSelected] = useState('');

  return (
    <>
      <Header></Header>
      <MessageCard
        selected={selected}
        onSelect={setSelected}
      ></MessageCard>
      <OrderCustomerInfo></OrderCustomerInfo>
    </>
  );
};

export default Order;
