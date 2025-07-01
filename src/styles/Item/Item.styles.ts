import styled from '@emotion/styled';

export const ItemContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  position: relative;
`;

export const ItemImageWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const ItemIndex = styled.p<{ index: number }>`
  ${({ theme }) => `
    font-size: ${theme.typography.subtitle1Regular.fontSize};
    font-weight: ${theme.typography.subtitle1Regular.fontWeight}; 
    color: ${theme.colors.gray900};
    
  `}
  position: absolute;
  top: 0;
  background-color: ${({ index }) => (index <= 2 ? '#fa342c' : 'lightgray')};
  left: 0;
  z-index: 1;
  margin: 0;
  padding: 4px 8px;
  border-radius: 4px;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const ItemName = styled.div`
  ${({ theme }) => `
    font-size: ${theme.typography.subtitle1Regular.fontSize};
    font-weight: ${theme.typography.subtitle1Regular.fontWeight};
    color: ${theme.colors.gray900};
  `}
  width: 100%;
`;
export const ItemPrice = styled.div`
  ${({ theme }) => `
    font-size: ${theme.typography.title2Bold.fontSize};
    font-weight: ${theme.typography.title2Bold.fontWeight};
    color: ${theme.colors.gray900};
  `}
  width: 100%;
`;
export const ItemBrand = styled.div`
  width: 100%;
`;
