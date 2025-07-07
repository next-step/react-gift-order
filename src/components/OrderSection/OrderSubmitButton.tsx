import styled from '@emotion/styled';
import Button from '@/components/common/Button';

interface OrderSubmitButtonProps {
  amount: number;
  onClick?: () => void;
}

const OrderSubmitButton = ({ amount, onClick }: OrderSubmitButtonProps) => {
  return (
    <OrderSubmitButtonWrapper>
      <Button
        backgroundColor="#FFE812"
        height="56px"
        borderRadius="0"
        onClick={onClick}
      >
        {amount.toLocaleString()}원 주문하기
      </Button>
    </OrderSubmitButtonWrapper>
  );
};

export default OrderSubmitButton;

const OrderSubmitButtonWrapper = styled.div`
  width: 100%;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.color.semantic.background.default};
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.05);
  z-index: 100;
`;
