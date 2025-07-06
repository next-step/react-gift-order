import React from "react";
import styled from "@emotion/styled";

const Button = styled.button<{active?: boolean}>`
  flex: 1;
  height: 100%;
  background: ${({active, theme}) => active ? theme.colors.blue.blue200 : 'transparent'};
  color: ${({active, theme}) => active ? theme.colors.blue.blue700 : theme.colors.gray.gray600};
  border: none;
  font-size: 1.08rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
`;

interface TabButtonProps {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const TabButton = ({ active, onClick, children }: TabButtonProps) => (
  <Button active={active} onClick={onClick}>
    {children}
  </Button>
);

export default TabButton; 