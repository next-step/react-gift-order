import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

import MobileLayout from '@/layouts/MobileLayout';
import NavBar from '@/components/NavBar';
import CardPicker from '@/components/order/CardPicker';
import CardMessage from '@/components/order/CardMessage';
import SenderInfo from '@/components/order/SenderInfo';
import ReceiverInfo from '@/components/order/ReceiverInfo';
import ProductInfo from '@/components/order/ProductInfo';
import OrderButton from '@/components/order/OrderButton';

import { validateOrder, validateField } from '@/utils/validation';
import type { OrderErrors } from '@/utils/validation';

import { products } from '@/mock/productsData';
import { cardTemplates } from '@/mock/cardTemplates';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  background: ${({ theme }) => theme.colors.gray[200]};
`;

export default function OrderPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));
  const [tpl, setTpl] = useState(cardTemplates[0]);
  const [message, setMessage] = useState(tpl.defaultTextMessage);
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState({ name: '', phone: '', qty: 1 });
  const [errors, setErrors] = useState<OrderErrors>({});

  if (!product) return <div>상품을 찾을 수 없습니다.</div>;

  const handleMessage = (msg: string) => {
    setMessage(msg);
    setErrors((prev) => ({
      ...prev,
      message: validateField('message', msg),
    }));
  };

  const handleSender = (name: string) => {
    setSender(name);
    setErrors((prev) => ({
      ...prev,
      sender: validateField('sender', name),
    }));
  };

  const handleReceiver = (next: typeof receiver) => {
    setReceiver(next);
    setErrors((prev) => ({
      ...prev,
      recvName: validateField('recvName', next.name),
      recvPhone: validateField('recvPhone', next.phone),
      qty: validateField('qty', next.qty),
    }));
  };

  const handleOrder = () => {
    const newErr = validateOrder({
      message,
      sender,
      recvName: receiver.name,
      recvPhone: receiver.phone,
      qty: receiver.qty,
    });
    setErrors(newErr);

    if (Object.keys(newErr).length) return;

    window.alert(
      [
        '주문이 완료되었습니다.',
        `상품명: ${product.name}`,
        `구매 수량: ${receiver.qty}`,
        `발신자 이름: ${sender}`,
        `메시지: ${message || '(없음)'}`,
      ].join('\n'),
    );

    navigate('/');
  };

  return (
    <MobileLayout>
      <Wrapper>
        <NavBar />

        {/* 카드 선택 */}
        <CardPicker
          selectedId={tpl.id}
          onSelect={(t) => {
            setTpl(t);
            setMessage(t.defaultTextMessage);
          }}
        />
        {/* 카드 + 메세지 */}
        <CardMessage
          tpl={tpl}
          message={message}
          onMessageChange={handleMessage}
          error={errors.message}
        />

        {/* 보내는 사람 */}
        <SenderInfo sender={sender} onChange={handleSender} error={errors.sender} />

        {/* 받는 사람 */}
        <ReceiverInfo
          value={receiver}
          onChange={handleReceiver}
          errors={{
            name: errors.recvName,
            phone: errors.recvPhone,
            qty: errors.qty,
          }}
        />

        {/* 상품 정보 */}
        <ProductInfo product={product} />

        {/* 주문하기 버튼 */}
        <OrderButton
          priceSum={product.price.sellingPrice}
          qty={receiver.qty}
          onClick={handleOrder}
        />
      </Wrapper>
    </MobileLayout>
  );
}
