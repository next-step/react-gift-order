import styled from '@emotion/styled';

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: white;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typography.title1Bold}
  color: ${({ theme }) => theme.semantic.text.default};
  margin-bottom: ${({ theme }) => theme.spacing.spacing5};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacing.spacing4};
  justify-items: center;
  align-items: center;
  margin: 0 auto;
`; 