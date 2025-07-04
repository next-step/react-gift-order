import { JSX, useEffect, useState } from 'react';
import { PriceButton } from '@/components/Order/OrderButton/OrderButton.style.ts';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import OrderSuccessToast from '@/components/Common/OrderSuccessToast/OrderSuccessToast.tsx';
import { validateOrderForm } from '@/utils/validateOrderForm.ts';

export default function OrderButton({ id, count, message, setMessage, sender, setSender, receiverName, setReceiverName, receiverPhone, setReceiverPhone }) {
  const navigate = useNavigate();
  const item = JSON.parse(localStorage.getItem('expandedList'))[id - 1];
  const itemName = item.name;
  const itemPrice = item.price.sellingPrice;
  const [price, setPrice] = useState(itemPrice * count);

  useEffect(() => {
    setPrice(itemPrice * count);
  }, [count]);

  const handleClick = () => {
    const isValid = validateOrderForm({
      message, setMessage,
      sender, setSender,
      receiverName, setReceiverName,
      receiverPhone, setReceiverPhone,
    })

    if (!isValid) return;

    toast<JSX.Element>(
      <OrderSuccessToast
        itemName={itemName}
        count={count}
        sender={sender.text}
        message={message.text}
      />,
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
