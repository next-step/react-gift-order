import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';

import MobileLayout from '@/layouts/MobileLayout';
import NavBar from '@/components/NavBar';
import CardPicker from '@/components/order/CardPicker';
import CardMessage from '@/components/order/CardMessage';
import SenderInfo from '@/components/order/SenderInfo';
import ReceiverInfo from '@/components/order/ReceiverInfo';

import { products } from '@/mock/productsData';
import { cardTemplates } from '@/mock/cardTemplates';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  background: ${({ theme }) => theme.colors.gray[200]};
`;

export default function OrderPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));
  const [tpl, setTpl] = useState(cardTemplates[0]);
  const [message, setMessage] = useState(tpl.defaultTextMessage);
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState({ name: '', phone: '', qty: 1 });

  if (!product) return <div>상품을 찾을 수 없습니다.</div>;

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
        <CardMessage tpl={tpl} message={message} onMessageChange={setMessage} />

        {/* 보내는 사람 */}
        <SenderInfo sender={sender} onChange={setSender} />

        {/* 받는 사람 */}
        <ReceiverInfo value={receiver} onChange={setReceiver} />

        {/* 상품 정보 */}
      </Wrapper>
    </MobileLayout>
  );
}
