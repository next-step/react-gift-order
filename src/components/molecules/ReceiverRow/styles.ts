import styled from '@emotion/styled';

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.spacing4};
  padding: ${({ theme }) => theme.spacing.spacing3};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray['200']};
`;

export const Cell = styled.p`
  ${({ theme }) => theme.typography.label1Regular};
`; 