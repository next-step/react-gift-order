import { useState } from 'react';
import { orders } from '@/mocks/mockorder';
import type { ordersType } from '@/mocks/mockorder';
import type { mockItemType } from '@/mocks/mockItem';

type RecieverType = {
  name: string;
  phone: string;
};

export type ErrorType = {
  text: string;
  sender: string;
  recieverName: string;
  recieverPhone: string;
  count: string;
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

  const [errors, setErrors] = useState<ErrorType>({
    text: '',
    sender: '',
    recieverName: '',
    recieverPhone: '',
    count: '',
  });

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
    setCost(Number(e.target.value) * item.price.basicPrice);
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

  const isValid =
    text.length > 0 &&
    sender.length > 0 &&
    reciever.name.length > 0 &&
    reciever.phone.length > 0 &&
    /^01[016789][0-9]{3,4}[0-9]{4}$/.test(reciever.phone.replace(/-/g, '')) &&
    count > 0;

  function validate() {
    const newErrors: ErrorType = {
      text: '',
      sender: '',
      recieverName: '',
      recieverPhone: '',
      count: '',
    };
    let isValid = true;

    if (text.length < 1) {
      newErrors.text = '메시지를 입력하세요.';
      isValid = false;
    }
    if (sender.length < 1) {
      newErrors.sender = '이름을 입력해주세요.';
      isValid = false;
    }
    if (reciever.name.length < 1) {
      newErrors.recieverName = '이름을 입력해주세요.';
      isValid = false;
    }
    if (reciever.phone.length < 1) {
      newErrors.recieverPhone = '전화번호를 입력해주세요.';
      isValid = false;
    } else if (!/^01[016789][0-9]{3,4}[0-9]{4}$/.test(reciever.phone.replace(/-/g, ''))) {
      newErrors.recieverPhone = '올바른 전화번호 형식이 아닙니다.';
      isValid = false;
    }
    if (count < 1) {
      newErrors.count = '구매 수량은 1개 이상이어야 합니다.';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  }

  function SubmitOrder() {
    alert(`주문이 완료되었습니다.
상품명: ${item.name}
구매 수량: ${count}
발신자 이름: ${sender}
메시지: ${text}`);
  }

  return {
    currentId,
    currentOrder,
    text,
    sender,
    reciever,
    count,
    cost,
    errors,
    isValid,
    handleTextChange,
    handleThumbClick,
    handleSenderChange,
    handleCountChange,
    handleRecieverNameChange,
    handleRecieverPhoneChange,
    validate,
    SubmitOrder,
  };
}

export default useOrder;
