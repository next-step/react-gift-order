import { Button } from "@/components/common";
import { useOrder } from "@/hooks/order/useOrder";
import styled from "@emotion/styled";

interface OrderButtonProps {
  onClick: () => void;
}

const OrderButtonContainer = styled.div({
  position: "fixed",
  bottom: 0,
  width: "100%",
  maxWidth: "720px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 100,
});

const OrderButtonText = styled.span(({ theme }) => ({
  fontSize: theme.typography.body1Bold.fontSize,
  fontWeight: theme.typography.body1Bold.fontWeight,
  lineHeight: theme.typography.body1Bold.lineHeight,
  color: theme.color.gray[900],
}));
export const OrderButton = ({ onClick }: OrderButtonProps) => {
  const { calculateTotalPrice } = useOrder();
  const totalPrice = calculateTotalPrice();
  return (
    <OrderButtonContainer>
      <Button variant="primary" size="large" width="100%" onClick={onClick}>
        <OrderButtonText>{totalPrice}원 주문하기</OrderButtonText>
      </Button>
    </OrderButtonContainer>
  );
};
