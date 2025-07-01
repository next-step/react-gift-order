import styled from "@emotion/styled";
import type { ReactNode } from "react";

type RoundButtonProps = {
  color: string;
  children: ReactNode;
};

function RoundButton({ color, children }: RoundButtonProps) {
  return <RoundButtonWrapper color={color}>{children}</RoundButtonWrapper>;
}

const RoundButtonWrapper = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  width: 50px;
  height: 50px;
  border-radius: 20px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

export default RoundButton;
