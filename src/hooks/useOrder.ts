import { useState } from 'react';
import { cards } from '@/mocks/mockorder';
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

function requiredField(value: string, message: string) {
  return value.length < 1 ? message : '';
}

function useOrder(item: mockItemType) {
  const [currentCardId, setCurrentCardId] = useState(cards[0].id);
  const currentOrder: ordersType | undefined = cards.find((card) => card.id === currentCardId);

  const [text, setText] = useState<string>(cards[0].defaultTextMessage);
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
    setCurrentCardId(id);
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

  const validators = {
    text: (value: string) => requiredField(value, '메시지를 입력하세요.'),
    sender: (value: string) => requiredField(value, '이름을 입력해주세요.'),
    recieverName: (value: string) => requiredField(value, '이름을 입력해주세요.'),
    recieverPhone: (value: string) => {
      if (value.length < 1) return '전화번호를 입력해주세요.';
      if (!/^01[016789][0-9]{3,4}[0-9]{4}$/.test(value.replace(/-/g, ''))) {
        return '올바른 전화번호 형식이 아닙니다.';
      }
      return '';
    },
    count: (value: number) => (value < 1 ? '구매 수량은 1개 이상이어야 합니다.' : ''),
  };

  function validate() {
    const newErrors: ErrorType = {
      text: validators.text(text),
      sender: validators.sender(sender),
      recieverName: validators.recieverName(reciever.name),
      recieverPhone: validators.recieverPhone(reciever.phone),
      count: validators.count(count),
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((msg) => !msg);
  }

  function SubmitOrder() {
    alert(`주문이 완료되었습니다.
상품명: ${item.name}
구매 수량: ${count}
발신자 이름: ${sender}
메시지: ${text}`);
  }

  return {
    currentCardId,
    currentOrder,
    text,
    sender,
    reciever,
    count,
    cost,
    errors,
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
