import Receiver from '@/components/Order/Receiver/Receiver.tsx';
import ItemInfo from '@/components/Order/ItemInfo/ItemInfo.tsx';
import Message from '@/components/Order/Message/Message.tsx';
import Sender from '@/components/Order/Sender/Sender.tsx';
import Header from '@/components/Header/Header.tsx';
import OrderButton from '@/components/Order/OrderButton/OrderButton.tsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { orderMessage } from '@/data/orderMessage.ts';

export default function Order() {
  const { id } = useParams();
  const [count ,setCount] = useState(1);

  const [message, setMessage] = useState({ text: orderMessage[0].defaultTextMessage, check: false });
  const [sender, setSender] = useState({ text: '', check: false });
  const [receiverName ,setReceiverName] = useState( { text: '', check: false });
  const [receiverPhone, setReceiverPhone] = useState({ text: '', check: false, checkPhoneForm: false });

  useEffect(() => {
    // 컴포넌트가 마운트(처음 렌더링) 될 때 스크롤을 맨 위로 이동
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Header />
      <Message message={message} setMessage={setMessage} />
      <Sender sender={sender} setSender={setSender}/>
      <Receiver setCount={setCount} receiverName={receiverName} setReceiverName={setReceiverName} receiverPhone={receiverPhone} setReceiverPhone={setReceiverPhone} />
      <ItemInfo id={id}/>
      <OrderButton id={id} count={count} message={message} setMessage={setMessage} sender={sender} setSender={setSender} receiverName={receiverName} setReceiverName={setReceiverName} receiverPhone={receiverPhone} setReceiverPhone={setReceiverPhone}/>
    </>
  )
}
