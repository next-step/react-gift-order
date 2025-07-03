import { useEffect, useState } from 'react';
import { PriceButton } from '@/components/Order/OrderButton/OrderButton.style.ts';
import { useNavigate } from 'react-router-dom';

export default function OrderButton({ id, count }) {
  const navigate = useNavigate();
  const itemPrice = JSON.parse(localStorage.getItem('expandedList'))[id - 1].price.sellingPrice;
  const [price, setPrice] = useState(itemPrice * count);

  useEffect(() => {
    setPrice(itemPrice * count);
  }, [count]);

  const handleClick = () => {
    navigate('/');
  }

  return (
    <PriceButton onClick={handleClick}>{price} 주문하기</PriceButton>
  )
}