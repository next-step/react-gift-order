import styled from '@emotion/styled';

interface StyledLoginInputProps {
  isError?: string;
}
export const StyeldLoginInput = styled.input<StyledLoginInputProps>`
  ${({ theme }) => theme.typography.body1Regular}
  border-style: solid;
  border-color: ${({ theme, isError }) => (isError ? theme.palette.red600 : theme.palette.gray400)};
  border-width: 0px 0px 1px;
  padding-top: ${({ theme }) => theme.spacing.spacing2};
  padding-bottom: ${({ theme }) => theme.spacing.spacing2};
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
  width: 100%;
  min-height: 20px;
`;
