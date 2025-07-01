import styled from '@emotion/styled';

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 12px;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing.spacing3};
  width: 42px;
  height: 42px;
  background-color: ${({ theme }) => theme.semantic.brand.kakaoYellow};
  border-radius: 18px;
`;

export const Text = styled.p`
  ${({ theme }) => theme.typography.subtitle1Bold}
  color: ${({ theme }) => theme.semantic.text.default};
`; 