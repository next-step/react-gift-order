import styled from "@emotion/styled";
import RoundButton from "@src/components/shared/RoundButton";
import theme from "@src/styles/kakaoTheme";
import type { TargetType } from "../enumerators";
import type { ReactNode } from "react";

type TargetButtonProps = {
  selected: boolean;
  target: TargetType;
  children: string | ReactNode;
  onClick: () => void;
};

function TargetButton({
  selected,
  target,
  children,
  onClick: onclick
}: TargetButtonProps) {
  return (
    <TargetButtonWrapper selected={selected} onClick={() => onclick()}>
      <RoundButton color={theme.colors.blue.blue100} children={children} />
      <Caption>{target.label}</Caption>
    </TargetButtonWrapper>
  );
}

const Caption = styled.p`
  margin: 0;
`;

const TargetButtonWrapper = styled.button<{ selected: boolean }>`
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: white;
  color: ${({ selected }) =>
    selected ? theme.colors.blue.blue600 : theme.colors.blue.blue300};
`;

export default TargetButton;
