import styled from '@emotion/styled';

export const OrderBtnContainer = styled.button`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 720px;
  height: 50px;
  ${({ theme }) => `
    background-color : ${theme.colors.kakaoYellow};
    font-size : ${theme.typography.title2Bold.fontSize};
    font-weight : ${theme.typography.title2Bold.fontWeight}
  `}
`;
