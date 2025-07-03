import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing1};
`;
export const LogoImg = styled.img`
  width: 180px;
  align-self: center;
`;
export const Input = styled.input`
  width: 400px;
  height: 60px;
  outline: none;
  border: none;
  font-size: ${({ theme }) => theme.typography.title2Regular.fontSize};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
  transition: border-color 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray600};
  }

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray600};
  }
`;
export const LoginButton = styled.button`
  background: ${({ theme }) => theme.colors.kakaoYellow};
  height: 48px;
  outline: none;
  border: none;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typography.title2Regular.fontSize};
  margin-top: ${({ theme }) => theme.spacing.spacing10};
  cursor: pointer;

  &:active {
    background: ${({ theme }) => theme.colors.kakaoYellowActive};
    transform: scale(0.98);
  }
`;
