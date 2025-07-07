/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

type OrderButtonProps = {
  amount: number;
  onClick: () => void;
  size?: "large" | "small";
  color?: "yellow" | "gray";
};

const OrderButton = ({
  amount,
  onClick,
  size = "large",
  color = "yellow",
}: OrderButtonProps) => {
  const displayAmount = isNaN(amount) ? 0 : amount;

  return (
    <StyledButton $size={size} $color={color} onClick={onClick}>
      {`${displayAmount.toLocaleString()}원 주문하기`}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  $size: "large" | "small";
  $color: "yellow" | "gray";
}>`
  width: 100%;
  padding: ${({ $size }) => ($size === "large" ? "14px" : "8px 12px")};
  font-size: ${({ $size }) => ($size === "large" ? "16px" : "14px")};
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ theme, $color }) =>
    $color === "yellow" ? theme.colors.yellow500 : theme.colors.gray300};
  color: #000;
  transition: background-color 0.2s ease;
`;

export default OrderButton;
