import { MOCK_RANKING_PRODUCT_DATA } from '@/pages/Home/components/ProductRankingListSection/mock';
import { ROUTE_PATH } from '@/pages/Routes';
import type { OrderFormData } from '@/schemas/orderForm';

import styled from '@emotion/styled';
import type { UseFormReturn } from 'react-hook-form';

import { useNavigate } from 'react-router';

type Props = {
  productId: string;
  formHandler: UseFormReturn<OrderFormData>;
};

export const OrderFormSubmitButton = ({ formHandler }: Props) => {
  const { watch, handleSubmit } = formHandler;

  const receivers = watch('receivers');
  const totalQuantity = receivers.reduce((sum, receiver) => sum + receiver.quantity, 0);
  const productPrice = MOCK_RANKING_PRODUCT_DATA.price.sellingPrice * totalQuantity;

  const navigate = useNavigate();

  const handleSubmitForm = handleSubmit((data) => {
    alert(
      `주문이 완료되었습니다.\n상품명: ${MOCK_RANKING_PRODUCT_DATA.name}\n구매 수량: ${totalQuantity}\n발신자 이름: ${data.ordererName}\n메시지: ${data.message}`,
    );
    navigate(ROUTE_PATH.HOME);
  });

  return <Wrapper onClick={handleSubmitForm}>{productPrice}원 주문하기</Wrapper>;
};

const Wrapper = styled.button(({ theme }) => ({
  width: '100%',
  maxWidth: '720px',
  height: '3.125rem',
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: theme.colors.semantic.brand.kakaoYellow,
  color: theme.colors.scale.gray900,

  transition: 'background-color 200ms, color 200ms',

  '&:disabled': {
    backgroundColor: theme.colors.scale.gray300,
    color: theme.colors.scale.gray600,
    cursor: 'not-allowed',
  },

  ...theme.typography.title2Bold,
}));
