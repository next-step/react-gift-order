import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import MobileLayout from '@/layouts/MobileLayout';
import NavBar from '@/components/NavBar';
import { products } from '@/mock/productsData';
import CardPicker from '@/components/order/CardPicker';
import { cardTemplates } from '@/mock/cardTemplates';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  background: ${({ theme }) => theme.colors.gray[200]};
`;

const Content = styled.section`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
`;

const BigImg = styled.img`
  width: 100%;
  max-width: 360px;
  aspect-ratio: 3 / 2;
  object-fit: contain;
  border-radius: 12px;
  margin-bottom: 40px;
`;

const TextArea = styled.textarea`
  width: 100%;
  max-width: 437px;
  min-height: 62px;
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  border-radius: 8px;
  padding: 8px 12px;
  box-sizing: border-box;
  resize: vertical;
  ${({ theme }) => theme.typography.body1Regular};
  margin-bottom: 22px;
`;

export default function OrderPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));
  const [tpl, setTpl] = useState(cardTemplates[0]);
  const [message, setMessage] = useState(tpl.defaultTextMessage);

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
        <Content>
          <BigImg src={tpl.imageUrl} alt="카드보기" />
          <TextArea value={message} onChange={(e) => setMessage(e.target.value)} />
        </Content>
      </Wrapper>
    </MobileLayout>
  );
}
