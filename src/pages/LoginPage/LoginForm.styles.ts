import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  margin: 240px auto;
  gap: ${({ theme }) => theme.spacing.spacing3};
`;

export const Logo = styled.img`
  width: 80px;
  height: auto;
  margin-bottom: 24px;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  padding: ${({ theme }) => theme.spacing.spacing3};
  border: none;
  border-bottom: 1px solid
    ${({ theme, hasError }) => (hasError ? theme.color.state.critical : theme.color.border.default)};
  width: 90%;
  font-size: 16px;
  outline: none;
  margin-bottom: ${({ theme, hasError }) => (hasError ? '0px' : theme.spacing.spacing2)};
  &::placeholder {
    color: ${({ theme }) => theme.color.text.placeholder};
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.color.state.critical};
  font-size: 12px;
  margin: 0 0 12px;
  margin-right: auto;
  margin-left: ${({ theme }) => theme.spacing.spacing3};
`;

export const LoginButton = styled.button`
  padding: ${({ theme }) => theme.spacing.spacing4};
  width: 95%;
  border-radius: 5px;
  margin-top: ${({ theme }) => theme.spacing.spacing7};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.background.disabled : theme.color.kakaoYellow};
  color: ${({ disabled }) => (disabled ? '#888' : '#000')};
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;
