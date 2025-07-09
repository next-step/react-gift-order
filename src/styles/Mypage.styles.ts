import styled from '@emotion/styled';

export const MypageContainer = styled.div`
  display: flex;
  max-width: 720px;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  justify-content: left;
  background-color: white;
  padding: 20px;
  padding-top: 80px;
`;

export const MypageTitle = styled.div`
  ${({ theme }) => `
    font-size: ${theme.typography.title2Bold.fontSize};
    font-weight: ${theme.typography.title2Bold.fontWeight};

  `}
  padding-bottom: 10px;
`;

export const MypageContent = styled.div`
  padding-bottom: 5px;
`;

export const MypageLogoutBtn = styled.button`
  width: 80px;
  height: 40px;
  margin-top: 30px;
  border-radius: 5px;
  ${({ theme }) => `
    background-color: ${theme.colors.gray300};
  `}
`;
