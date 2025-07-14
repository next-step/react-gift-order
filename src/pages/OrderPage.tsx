import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';

import MobileLayout from '@/layouts/MobileLayout';
import NavBar from '@/components/NavBar';
import CardPicker from '@/components/order/CardPicker';
import CardMessage from '@/components/order/CardMessage';
import SenderInfo from '@/components/order/SenderInfo';
import ReceiverInfo from '@/components/order/ReceiverInfo';
import ProductInfo from '@/components/order/ProductInfo';
import OrderButton from '@/components/order/OrderButton';

import { isBlank } from '@/utils/validation';
import { products } from '@/mock/productsData';
import { cardTemplates } from '@/mock/cardTemplates';
import type { Receiver } from '@/types/order';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  background: ${({ theme }) => theme.colors.gray[200]};
`;

interface FormValues {
  message: string;
  sender: string;
  name: string;
  phone: string;
  qty: number;
}

export default function OrderPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));
  const defaultTpl = cardTemplates[0];
  const [receivers, setReceivers] = useState<Receiver[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      message: defaultTpl.defaultTextMessage,
      sender: '',
      name: '',
      phone: '',
      qty: 1,
    },
  });

  if (!product) return <div>상품을 찾을 수 없습니다.</div>;

  const onSubmit = (data: FormValues) => {
    window.alert(
      [
        '주문이 완료되었습니다.',
        `상품명: ${product.name}`,
        `구매 수량: ${data.qty}`,
        `발신자 이름: ${data.sender}`,
        `메시지: ${data.message || '(없음)'}`,
      ].join('\n'),
    );
    navigate('/');
  };

  const totalQty = receivers.reduce((sum, r) => sum + r.qty, 0);

  return (
    <MobileLayout>
      <Wrapper>
        <NavBar />

        {/* 카드 선택 */}
        <CardPicker
          selectedId={defaultTpl.id}
          onSelect={(tpl) => setValue('message', tpl.defaultTextMessage)}
        />
        {/* 카드 + 메세지 */}
        <CardMessage
          tpl={defaultTpl}
          register={register('message', {
            validate: (v) => !isBlank(v) || '메시지를 입력해주세요.',
          })}
          error={errors.message?.message}
        />

        {/* 보내는 사람 */}
        <SenderInfo
          register={register('sender', {
            validate: (v) => !isBlank(v) || '이름을 입력해주세요.',
          })}
          error={errors.sender?.message}
        />

        {/* 받는 사람 */}
        <ReceiverInfo receivers={receivers} setReceivers={setReceivers} />

        {/* 상품 정보 */}
        <ProductInfo product={product} />

        {/* 주문하기 버튼 */}
        <OrderButton
          priceSum={product.price.sellingPrice}
          qty={totalQty}
          onClick={handleSubmit(onSubmit)}
        />
      </Wrapper>
    </MobileLayout>
  );
}
