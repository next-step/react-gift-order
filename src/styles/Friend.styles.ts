import styled from '@emotion/styled';

export const FriendContainer = styled.div`
  ${({ theme }) => `
    background-color: ${theme.colors.gray300};
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const InnerContainer = styled.div`
  background-color: white;
  width: 95%;
  padding: 15px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: left;
`;

export const PlusIcon = styled.div`
  ${({ theme }) => `
    font-size: ${theme.typography.title1Regular.fontSize};
    font-weight: ${theme.typography.title1Regular.fontWeight};
    color: ${theme.colors.default};
    text-align: center;
    background-color: ${theme.colors.kakaoYellow};
    &:hover {
      background-color: ${theme.colors.kakaoYellowHover};
    }
  `}
  width: 50px;
  height: 50px;
  border-radius: 15px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const FriendText = styled.div`
  ${({ theme }) => `
    font-size: ${theme.typography.title2Bold.fontSize};
    font-weight: ${theme.typography.title1Bold.fontWeight};
    color: ${theme.colors.default};
  `}
  width: 70%;
  text-align: left;
`;
