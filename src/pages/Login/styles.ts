import styled from '@emotion/styled';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: white;
`;

export const Logo = styled.img`
  width: 90px;
  height: auto;
  margin-bottom: ${({ theme }) => theme.spacing.spacing8};
`;

export const LoginSection = styled.section`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing3};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing4};
  padding-left: 0;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[400]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[600]};
  }
  
  &:focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.colors.gray[600]};
  }
`;

export const Spacer = styled.div`
  height: ${({ theme }) => theme.spacing.spacing2};
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing3};
  background-color: ${({ theme }) => theme.semantic.brand.kakaoYellow};
  border: none;
  border-radius: 6px;
  ${({ theme }) => theme.typography.subtitle2Regular}
  cursor: pointer;
  margin-top: ${({ theme }) => theme.spacing.spacing10};
  
  &:hover {
    background-color: ${({ theme }) => theme.semantic.brand.kakaoYellowHover};
  }
  
  &:active {
    background-color: ${({ theme }) => theme.semantic.brand.kakaoYellowActive};
  }
`; 