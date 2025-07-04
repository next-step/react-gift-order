import styled from '@emotion/styled';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
    height: calc(100vh - ${({ theme }) => theme.spacing.spacing11});
    padding: ${({ theme }) => theme.spacing.spacing4};
`;

export const Title = styled.h1`
    font: ${({ theme }) => theme.typography.title2Bold};
`;
export const Msg = styled.p`
    font: ${({ theme }) => theme.typography.body1Regular};

`;
export const Button = styled.button`
  font: ${({ theme }) => theme.typography.body1Bold};
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
`;
