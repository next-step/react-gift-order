import React from "react";
import styled from "@emotion/styled";

const Button = styled.button<{active?: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({active, theme}) => active ? theme.colors.blue.blue700 : theme.colors.gray.gray100};
  color: ${({active, theme}) => active ? theme.colors.gray.gray00 : theme.colors.gray.gray900};
  border: none;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 4px;
  transition: background 0.2s;
`;

const Label = styled.span`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.gray.gray900};
  margin-top: 2px;
`;

interface FilterButtonProps {
  active?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  label: string;
}

const FilterButton = ({ active, onClick, icon, label }: FilterButtonProps) => (
  <Button active={active} onClick={onClick}>
    {icon}
    <Label>{label}</Label>
  </Button>
);

export default FilterButton; 