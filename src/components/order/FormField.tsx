import styled from "@emotion/styled";
import type { ReactNode } from "react";

type Props = {
  label: string;
  htmlFor?: string;
  error?: string;
  children: ReactNode;
};

export const FormField = ({ label, htmlFor, error, children }: Props) => (
  <Wrapper>
    <Label htmlFor={htmlFor}>{label}</Label>
    {children}
    {error && <ErrorText>{error}</ErrorText>}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;

  input,
  textarea {
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.gray300};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.textDefault};
    font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
    background-color: ${({ theme }) => theme.colors.backgroundDefault};

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.gray500};
    }
  }
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.body1Bold.fontSize};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textDefault};
`;

const ErrorText = styled.p`
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.red700};
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
`;
