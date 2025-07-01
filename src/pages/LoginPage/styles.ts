import styled from '@emotion/styled';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
`;

export const Logo = styled.img`
    width: 120px;
    height: auto;
`;

export const Input = styled.input`
  width: 360px;
  padding: ${({ theme }) => theme.spacing.spacing3};
  margin-bottom: ${({ theme }) => theme.spacing.spacing6};
  font : ${({ theme }) => theme.typography.body2Regular};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.semantic.borderDefault};
  background: transparent;
  outline: none;
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  transition: all 0.2s ease;
  &::placeholder {
    color: ${({ theme }) => theme.colors.semantic.textPlaceholder};
  }
  &:focus::placeholder {
    opacity: 0;
  }
  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.semantic.textDefault};
    color: ${({ theme }) => theme.colors.semantic.textDefault};
  }
`;

export const LoginButton = styled.button`
  width: 360px;
  padding: ${({ theme }) => theme.spacing.spacing3};
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  font : ${({ theme }) => theme.typography.label2Regular};
  border-radius: ${({ theme }) => theme.spacing.spacing1};
  cursor: pointer;
  margin-top: ${({ theme }) => theme.spacing.spacing10};
`;
