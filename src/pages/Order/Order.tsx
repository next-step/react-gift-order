import Receiver from '@/components/Order/Receiver/Receiver.tsx';
import ItemInfo from '@/components/Order/ItemInfo/ItemInfo.tsx';
import Message from '@/components/Order/Message/Message.tsx';
import Sender from '@/components/Order/Sender/Sender.tsx';
import Header from '@/components/Header/Header.tsx';

export default function Order() {

  return (
    <>
      <Header />
      <Message />
      <Sender />
      <Receiver />
      <ItemInfo />
    </>
  )
}