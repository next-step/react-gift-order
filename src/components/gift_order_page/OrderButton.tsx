import useOrderInfo from '@/hooks/useOrderInfo';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
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
  const [isValid, setIsValid] = useState(false);
  const { isFirstTry, message, sender, recipient, product, error } = useOrderInfo();
  const totalPrice = product.price * product.amount;

  useEffect(() => {
    if (!isFirstTry) {
      setIsValid(
        !error.messageError &&
          !error.senderNameError &&
          !error.recipientNameError &&
          !error.phoneNumberError &&
          !error.amountError
      );
    }
  }, [error, isFirstTry]);

  return (
    <Container
      onClick={() => {
        error.setTargetMessage(message);
        error.setTargetSenderName(sender.name);
        error.setTargetRecipientName(recipient.name);
        error.setTargetPhoneNumber(recipient.phoneNumber);
        error.setTargetAmount(product.amount);

        if (isValid) {
          alert(`
            주문이 완료되었습니다.
            상품명: ${product.name}
            구매 수량: ${product.amount}
            발신자 이름: ${sender.name}
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
