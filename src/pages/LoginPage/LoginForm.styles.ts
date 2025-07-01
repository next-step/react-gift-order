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

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.spacing3};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.default};
  width: 90%;
  font-size: 16px;
  outline: none;
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};

  &::placeholder {
    color: ${({ theme }) => theme.color.text.placeholder};
  }
`;

export const LoginButton = styled.button`
  padding: ${({ theme }) => theme.spacing.spacing4};
  width: 95%;
  border-radius: 5px;
  margin-top: ${({ theme }) => theme.spacing.spacing7};
  background-color: ${({ theme }) => theme.color.kakaoYellow};
  color: #000;
  border: none;
  cursor: pointer;
`;
