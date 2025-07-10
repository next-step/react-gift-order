/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import type { Theme } from "@emotion/react";

type OrderButtonProps = {
  amount: number;
  onClick?: () => void;
  type?: "button" | "submit";
  size?: "large" | "small";
  color?: keyof Theme["colors"];
};

const OrderButton = ({
  amount,
  onClick,
  type = "button",
  size = "large",
  color = "yellow500", 
}: OrderButtonProps) => {
  const displayAmount = isNaN(amount) ? 0 : amount;

  return (
    <StyledButton
      type={type}
      onClick={onClick}
      $size={size}
      $color={color}
    >
      {`${displayAmount.toLocaleString()}원 주문하기`}
    </StyledButton>
  );
};

export default OrderButton;

const StyledButton = styled.button<{
  $size: "large" | "small";
  $color: keyof Theme["colors"];
}>`
  width: 100%;
  padding: ${({ $size }) => ($size === "large" ? "14px" : "8px 12px")};
  font-size: ${({ $size }) => ($size === "large" ? "16px" : "14px")};
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ theme, $color }) => theme.colors[$color]};
  color: #000;
  transition: background-color 0.2s ease;
`;
