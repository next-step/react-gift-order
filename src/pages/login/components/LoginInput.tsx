import styled from "@emotion/styled";
import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export default function LoginInput({
  type = "text",
  value,
  placeholder,
  onChange,
  onBlur,
  error,
}: Props) {
  return (
    <InputWrapper>
      <StyledInput
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.semantic.border.default};
  padding: 12px 0;
  font-size: 1rem;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.semantic.text.placeholder};
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.75rem;
  margin-top: 4px;
`;
