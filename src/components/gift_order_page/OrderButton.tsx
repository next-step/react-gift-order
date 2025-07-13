import useProductInfo from '@/hooks/useProductInfo';
import type { FormValues } from '@/types/orderFormType';
import styled from '@emotion/styled';
import { useFormContext, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Container = styled.button`
  all: unset;
  cursor: pointer;
  position: fixed;
  bottom: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 720px;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.yellow600};
`;

const Text = styled.div`
  ${({ theme }) => theme.typography.title2Bold};
`;

export const OrderButton = () => {
  const navigate = useNavigate();
  const {
    control,
    watch,
    formState: { isValid },
  } = useFormContext<FormValues>();
  const { name, price } = useProductInfo();
  const message = watch('message');
  const senderName = watch('senderName');
  const recipientInfo = useWatch({ control, name: 'recipientInfo' });
  let totalAmount = 0;
  let totalPrice = 0;

  recipientInfo?.forEach((recipientForm) => {
    totalAmount = totalAmount + Number(recipientForm.amount);
  });
  totalPrice = price * totalAmount;

  return (
    <Container
      onClick={async () => {
        if (isValid) {
          alert(`
            주문이 완료되었습니다.
            상품명: ${name}
            구매 수량: ${totalAmount}
            발신자 이름: ${senderName}
            메시지: ${message}
          `);

          navigate('/');
        }
      }}
    >
      <Text>{totalPrice}원 주문하기</Text>
    </Container>
  );
};
