import styled from "@emotion/styled";
import type { ComponentPropsWithoutRef } from "react";
import ErrorMsg from "@/pages/Order/components/ErrorMsg";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  errorMsg: string | null;
}

const Input = ({ type, placeholder, value, onChange, errorMsg }: InputProps) => {
  return (
    <Wrapper>
      <Content type={type} placeholder={placeholder} value={value} onChange={onChange} errorMsg={errorMsg} />
      {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Content = styled.input<InputProps>`
  box-sizing: border-box;
  width: 100%;
  min-height: 2.75rem;
  border: 1px solid ${({ theme, errorMsg }) => (!!errorMsg ? theme.color.stateColor.critical : theme.color.gray600)};
  border-radius: 0.5rem;
  font: ${({ theme }) => theme.typography.body1Regular};
  padding: ${({ theme }) => `${theme.spacing.spacing1} ${theme.spacing.spacing3}`};
  outline: none;
  &:focus {
    border: 1px solid ${({ theme }) => theme.color.gray900};
  }
`;
