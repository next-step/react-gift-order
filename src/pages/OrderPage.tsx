import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { NavBar } from '@/components/NavBar';
import type { GiftItem, MessageCard } from '@/types';
import { rankingAll } from '@/data/rankings';
import { messageCardTemplates } from '@/data/messageCards';

import * as S from '@/styles/OrderPage.styles';
import { MessageCardSection } from '@/components/order/MessageCardSection';
import { ProductInfoSection } from '@/components/order/ProductInfoSection';
import { OrderPageFooter } from '@/components/order/OrderPageFooter';
import { GiftingForm } from '@/components/order/GiftingForm';

const phoneRegex = /^010\d{8}$/;

const OrderPage = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const navigate = useNavigate();
  const item = rankingAll.find(it => it.id === Number(itemId));

  const [selectedCard, setSelectedCard] = useState<MessageCard>(messageCardTemplates[0]);
  const [formValues, setFormValues] = useState({
    message: '',
    senderName: '내 이름',
    recipientName: '',
    recipientPhone: '',
    quantity: 1,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (selectedCard) {
      setFormValues(v => ({ ...v, message: selectedCard.defaultTextMessage }));
    }
  }, [selectedCard]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: name === 'quantity' ? Number(value) : value,
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formValues.senderName.trim()) newErrors.senderName = '이름을 입력해주세요.';
    if (!formValues.recipientName.trim()) newErrors.recipientName = '이름을 입력해주세요.';
    if (!formValues.recipientPhone.trim()) {
      newErrors.recipientPhone = '전화번호를 입력해주세요.';
    } else if (!phoneRegex.test(formValues.recipientPhone)) {
      newErrors.recipientPhone = '올바른 전화번호 형식이 아닙니다';
    }
    if (formValues.quantity < 1) newErrors.quantity = '구매 수량은 1개 이상이어야 합니다.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert('주문 성공!');
      navigate('/');
    }
  };

  if (!item) {
    return (
      <Layout>
        <NavBar />
        <div css={S.pageWrapper}>상품 정보를 찾을 수 없습니다.</div>
      </Layout>
    );
  }

  const totalPrice = item.price.sellingPrice * formValues.quantity;

  return (
    <Layout>
      <NavBar />
      <div css={S.pageWrapper}>
        <MessageCardSection
          selectedCard={selectedCard}
          onCardSelect={setSelectedCard}
          message={formValues.message}
          onMessageChange={handleChange}
        />
        <hr css={S.divider} />
        <GiftingForm
          formValues={formValues}
          errors={errors}
          onFormChange={handleChange}
        />
        <hr css={S.divider} />
      </div>
      <div css={S.pageWrapper}>
        <ProductInfoSection item={item as GiftItem} />
      </div>
      <OrderPageFooter totalPrice={totalPrice} onSubmit={handleSubmit} />

    </Layout>
  );
};

export default OrderPage;
