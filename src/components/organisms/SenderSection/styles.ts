import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.semantic.background.default};
  padding: ${({ theme }) => theme.spacing.spacing4};
  border: 1px solid ${({ theme }) => theme.semantic.background.fill};
`;

export const SectionTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-bottom: ${({ theme }) => theme.spacing.spacing3};
  ${({ theme }) => theme.typography.subtitle1Bold};
`;

export const FormContent = styled.div`
  width: 100%;
`; 