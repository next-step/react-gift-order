import { useState } from 'react';
import { orders } from '@/mocks/mockorder';
import type { ordersType } from '@/mocks/mockorder';
import type { mockItemType } from '@/mocks/mockItem';

type RecieverType = {
  name: string;
  phone: string;
};

function useOrder(item: mockItemType) {
  const [currentId, setCurrentId] = useState(orders[0].id);
  const currentOrder: ordersType | undefined = orders.find((order) => order.id === currentId);

  const [text, setText] = useState<string>(orders[0].defaultTextMessage);
  const [sender, setSender] = useState<string>('');
  const [reciever, setReciever] = useState<RecieverType>({
    name: '',
    phone: '',
  });
  const [count, setCount] = useState<number>(1);
  const [cost, setCost] = useState<number>(count * item.price.basicPrice);

  function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }
  function handleThumbClick(id: number) {
    setCurrentId(id);
  }
  function handleSenderChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSender(e.target.value);
  }
  function handleCountChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCount(Number(e.target.value));
    setCost(count * item.price.basicPrice);
  }
  function handleRecieverNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setReciever((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  }
  function handleRecieverPhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    setReciever((prev) => ({
      ...prev,
      phone: e.target.value,
    }));
  }

  function handlecheckInput() {
    return;
  }

  return {
    currentId,
    currentOrder,
    text,
    sender,
    reciever,
    count,
    cost,
    handleTextChange,
    handleThumbClick,
    handleSenderChange,
    handleCountChange,
    handleRecieverNameChange,
    handleRecieverPhoneChange,
    handlecheckInput,
  };
}

export default useOrder;
