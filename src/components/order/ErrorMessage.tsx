import styled from "@emotion/styled";

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.state.critical};
  ${({ theme }) => theme.typography.label2Regular};
`;

export default ErrorMessage;