import styled from '@emotion/styled';

interface OrderSubmitButtonProps {
  amount: number;
}

const OrderSubmitButton = ({ amount }: OrderSubmitButtonProps) => {
  return <Button type="button">{amount.toLocaleString()}원 주문하기</Button>;
};

export default OrderSubmitButton;

const Button = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[8]};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.semantic.kakaoYellow};
  color: ${({ theme }) => theme.color.semantic.text.default};
  ${({ theme }) => theme.typography.title.title2Bold};
  border: none;
  cursor: pointer;
`;
