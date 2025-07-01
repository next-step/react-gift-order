import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  align-items: center;
  max-width: 720px;
  width: 720px;
  height: 45px;
  margin: 0 auto;
  background-color: white;
  padding: 0 20px;
`;

export const BackButton = styled.div`
  cursor: pointer;
`;

//theme 가져오기에서 typograpy 없다고 뜸 -> styles/emotion.d.ts 파일에 theme 타입 정의 필요
export const Title = styled.div`
  ${({ theme }) => `
    font-size: ${theme.typography.title1Bold.fontSize};
    font-weight: ${theme.typography.title1Bold.fontWeight};
    line-height: ${theme.typography.title1Bold.lineHeight};
    color: black;
    text-align: center;
    flex-grow: 1;
  `}
`;

export const LoginIcon = styled.div`
  cursor: pointer;
`;
