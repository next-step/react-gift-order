import styled from "@emotion/styled";

interface BaseButtonProps {
  label: string;
  icon?: string;
  isActive?: boolean;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  direction?: "vertical" | "horizontal";
  color?: "blue" | "yellow";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function BaseButton({
  label,
  icon,
  isActive = false,
  onClick,
  size = "medium",
  direction = "horizontal",
  color = "yellow",
  disabled = false,
  type = "button",
}: BaseButtonProps) {
  return (
    <Button
      isActive={isActive}
      size={size}
      direction={direction}
      color={color}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <Icon>{icon}</Icon>}
      <Label isActive={isActive} size={size}>
        {label}
      </Label>
    </Button>
  );
}

const Button = styled.button<{
  isActive: boolean;
  size: "small" | "medium" | "large";
  direction: "vertical" | "horizontal";
  color: "blue" | "yellow";
}>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "vertical" ? "column" : "row"};
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: ${({ size }) =>
    size === "small"
      ? "6px 10px"
      : size === "large"
        ? "12px 18px"
        : "8px 12px"};
  border-radius: 16px;
  border: none;
  background-color: ${({ isActive, color, theme }) => {
    if (color === "blue") {
      return isActive ? theme.colors.blue500 : theme.colors.blue200;
    } else {
      return theme.colors.kakaoYellow;
    }
  }};
  color: ${({ theme }) => theme.colors.gray1000};
  cursor: pointer;

  &:hover {
    background-color: ${({ color, theme }) => {
      if (color === "yellow") {
        return theme.colors.kakaoYellowHover;
      }
    }};
  }

  &:active {
    background-color: ${({ color, theme }) => {
      if (color === "yellow") {
        return theme.colors.kakaoYellowActive;
      }
    }};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Icon = styled.span`
  font-size: 20px;
`;

const Label = styled.span<{
  isActive: boolean;
  size: "small" | "medium" | "large";
}>`
  font-size: ${({ size, theme }) =>
    size === "small"
      ? theme.typography.body2Regular.fontSize
      : size === "large"
        ? theme.typography.title1Regular.fontSize
        : theme.typography.body2Regular.fontSize};
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
`;
