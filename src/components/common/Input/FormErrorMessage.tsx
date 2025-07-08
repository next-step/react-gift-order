import styled from "@emotion/styled";

export const ErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.typography.label.label2Regular.fontSize};
  font-weight: ${({ theme }) =>
    theme.typography.label.label2Regular.fontWeight};
  color: ${({ theme }) => theme.colors.red[700]};
  margin-left: ${({ theme }) => theme.spacing[1]};
  margin-top: 2px;
`;
