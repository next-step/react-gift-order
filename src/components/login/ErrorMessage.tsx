import styled from "@emotion/styled";

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <>
      <Error>{message}</Error>
    </>
  );
};

export default ErrorMessage;

const Error = styled.p`
  color: ${({ theme }) => theme.colors.red.red700};
  font-size: ${({ theme }) => theme.typography.label2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label2Regular.lineHeight};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
`;
