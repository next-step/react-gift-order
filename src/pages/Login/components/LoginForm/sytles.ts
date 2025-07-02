import styled from '@emotion/styled';

export const LoginSection = styled.section`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing3};
`;

export const Spacer = styled.div`
  height: ${({ theme }) => theme.spacing.spacing2};
`;
