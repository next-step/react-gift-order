import styled from "@emotion/styled";
import type { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {}

const Input = ({ value, onChange, children }: InputProps) => {
  return (
    <Content value={value} onChange={onChange}>
      {children}
    </Content>
  );
};

export default Input;

const Content = styled.input`
  box-sizing: border-box;
  width: 100%;
  min-height: 2.75rem;
  border: 1px solid ${({ theme }) => theme.color.gray600};
  border-radius: 0.5rem;
  font: ${({ theme }) => theme.typography.body1Regular};
  padding: ${({ theme }) => `${theme.spacing.spacing1} ${theme.spacing.spacing3}`};
  z-index: 1;
  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.gray900};
  }
`;
