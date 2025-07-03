import Receiver from '@/components/Order/Receiver.tsx';
import ItemInfo from '@/components/Order/ItemInfo.tsx';
import Message from '@/components/Order/Message.tsx';
import Sender from '@/components/Order/Sender.tsx';
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