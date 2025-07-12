import styled from '@emotion/styled';

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.semantic.border.default};
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.semantic.background.default};
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.spacing4};
  padding: ${({ theme }) => theme.spacing.spacing3};
  background-color: ${({ theme }) => theme.colors.gray['100']};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray['300']};
`;

export const HeaderCell = styled.p`
  ${({ theme }) => theme.typography.label1Bold};
`;

export const Body = styled.div`
  > div:last-child {
    border-bottom: none;
  }
`; 