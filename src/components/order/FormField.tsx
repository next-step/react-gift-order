import styled from "@emotion/styled";

type Props = {
  label: string;
  htmlFor?: string;
  error?: string | null;
  children: React.ReactNode;
};

export const FormField = ({ label, htmlFor, error, children }: Props) => (
  <Wrapper>
    <label htmlFor={htmlFor}>{label}</label>
    {children}
    {error && <ErrorText>{error}</ErrorText>}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    font-weight: 500;
  }

  input,
  textarea {
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.colors.borderDefault};
    border-radius: 6px;
    color: #000;
    font-size: 1rem;
    background-color: #fff;
  }
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.red700};
  font-size: 0.75rem;
`;
