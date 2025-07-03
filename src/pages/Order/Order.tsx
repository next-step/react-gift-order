import Receiver from '@/components/Order/Receiver/Receiver.tsx';
import ItemInfo from '@/components/Order/ItemInfo/ItemInfo.tsx';
import Message from '@/components/Order/Message/Message.tsx';
import Sender from '@/components/Order/Sender/Sender.tsx';
import Header from '@/components/Header/Header.tsx';
import OrderButton from '@/components/Order/OrderButton/OrderButton.tsx';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Order() {
  const { id } = useParams();
  const [count ,setCount] = useState(1);

  return (
    <>
      <Header />
      <Message />
      <Sender />
      <Receiver setCount={setCount}/>
      <ItemInfo id={id}/>
      <OrderButton id={id} count={count}/>
    </>
  )
}