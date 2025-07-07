import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.spacing5} 0;
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red[700]};
  ${({ theme }) => theme.typography.label2Regular};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
  display: block;
`;
