import styled from '@emotion/styled';

export const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: white;
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
`;

export const ItemInfoTitle = styled.div`
  ${({ theme }) => `
    font-size : ${theme.typography.title2Bold.fontSize};
    font-weight : ${theme.typography.title2Bold.fontWeight};
    `}
`;

export const ItemContainer = styled.div`
  ${({ theme }) => `
        border : 2px solid ${theme.colors.gray300};
    `}
  border-radius: 10px;
  display: flex;
  padding: 10px;
`;

export const ItemImg = styled.img`
  width: 10%;
  border-radius: 5px;
`;

export const DetailContainer = styled.div`
  width: 80%;
  margin-left: 10px;
`;

export const DeatilTitle = styled.div`
  ${({ theme }) => `
    font-size : ${theme.typography.body2Regular.fontSize};
    font-weight : ${theme.typography.body2Regular.fontWeight};
    `}
  margin-bottom: 10px;
`;

export const DetailCompany = styled.div`
  ${({ theme }) => `
    font-size : ${theme.typography.body2Regular.fontSize};
    font-weight : ${theme.typography.body2Regular.fontWeight};
    color : ${theme.colors.gray700}
  `}
`;

export const DetailPriceContainer = styled.div`
  display: flex;
  gap: 10px;
  ${({ theme }) => `
    font-size : ${theme.typography.body2Regular.fontSize};
    font-weight : ${theme.typography.body2Regular.fontWeight};
    color : ${theme.colors.gray700}
  `}
`;

export const DetailPrice = styled.div`
  ${({ theme }) => `
    font-size : ${theme.typography.title2Bold.fontSize};
    font-weight : ${theme.typography.title2Bold.fontWeight};
    color: black;
  `}
`;
