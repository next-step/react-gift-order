import { useEffect, useState } from 'react';
import { PriceButton } from '@/components/Order/OrderButton/OrderButton.style.ts';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function OrderButton({ id, count, message, setMessage, sender, setSender, receiverName, setReceiverName, receiverPhone, setReceiverPhone }) {
  const navigate = useNavigate();
  const item = JSON.parse(localStorage.getItem('expandedList'))[id - 1];
  const itemName = item.name;
  const itemPrice = item.price.sellingPrice;
  const [price, setPrice] = useState(itemPrice * count);
  const isValidPhone = (phone: string) => /^010\d{8}$/.test(phone);
  const isValidHypenPhone = (phone: string) => /^010-\d{4}-\d{4}$/.test(phone);

  useEffect(() => {
    setPrice(itemPrice * count);
  }, [count]);

  const handleClick = () => {
    let valid = true;

    if (!message.text) {
      setMessage(prev => ({ ...prev, check: true }));
      valid = false;
    }

    if (!sender.text) {
      setSender(prev => ({ ...prev, check: true }));
      valid = false;
    }

    if (!receiverName.text) {
      setReceiverName(prev => ({ ...prev, check: true }));
      valid = false;
    }

    if (!receiverPhone.text) {
      setReceiverPhone(prev => ({ ...prev, check: true }));
      valid = false;
    } else if (!isValidPhone(receiverPhone.text) && !isValidHypenPhone(receiverPhone.text)) {
      setReceiverPhone(prev => ({ ...prev, checkPhoneForm: true }));
      valid = false;
    }

    if (!valid) return;


    toast(
      <div>
        <div>주문이 완료되었습니다.</div>
        <div>상품명: {itemName}</div>
        <div>구매 수량: {count}</div>
        <div>발신자 이름: {sender.text}</div>
        <div>메시지: {message.text}</div>
      </div>,
      {
        type: 'success',
        autoClose: 3000,
        style: { width: '400px' },
      }
    );

    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <PriceButton onClick={handleClick}>{price}원 주문하기</PriceButton>
  )
}
