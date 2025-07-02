import styled from '@emotion/styled';

export const LoginContainer = styled.div`
  display: flex;
  max-width: 720px;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding: 20px;
  padding-top: 45px;
`;

export const LoginTitle = styled.div`
  ${({ theme }) => `
    font-size: ${theme.typography.title1Bold.fontSize};
    width: 100%;
    font-weight: ${theme.typography.title1Bold.fontWeight};
    line-height: ${theme.typography.title1Bold.lineHeight};
    min-height: 200px;
    color: black;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginInput = styled.input`
  width: 70%;
  padding: 10px;
  margin-bottom: 5px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  font-size: 16px;
`;
export const IDErrorContainer = styled.p`
  font-size: 14px;
  color: red;
`;
export const LoginPasswordInput = styled.input`
  width: 70%;
  padding: 10px;
  margin-bottom: 5px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  font-size: 16px;
`;
export const PWErrorContainer = styled.p`
  font-size: 14px;
  color: red;
`;

export const LoginButton = styled.button<{ active: boolean }>`
  ${({ theme, active }) => `
    font-size: ${theme.typography.title1Bold.fontSize};
    width: 70%;
    font-weight: ${theme.typography.title1Bold.fontWeight};
    line-height: ${theme.typography.title1Bold.lineHeight};
    height: 50px;
    margin-top: 15px;
    color: black;
    background-color: ${active ? theme.colors.kakaoYellow : 'rgb(185, 176, 92, 0.5)'};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
