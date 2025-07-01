import styled from '@emotion/styled';

export const LoginContainer = styled.div`
  display: flex;
  max-width: 720px;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
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

export const LoginInput = styled.input`
  width: 70%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
`;
export const LoginPasswordInput = styled.input`
  width: 70%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
`;

export const LoginButton = styled.button`
  ${({ theme }) => `
    font-size: ${theme.typography.title1Bold.fontSize};
    width: 70%;
    font-weight: ${theme.typography.title1Bold.fontWeight};
    line-height: ${theme.typography.title1Bold.lineHeight};
    height: 50px;
    color: black;
    background-color: ${theme.colors.kakaoYellow};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
