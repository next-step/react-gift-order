import useOrderInfo from '@/hooks/useOrderInfo';
import styled from '@emotion/styled';

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
  const { product } = useOrderInfo();
  const totalPrice = product.price * product.amount;

  return (
    <Container>
      <Text>{totalPrice}원 주문하기</Text>
    </Container>
  );
};
