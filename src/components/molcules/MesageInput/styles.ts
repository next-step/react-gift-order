import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.spacing5} 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.spacing5};
`;
