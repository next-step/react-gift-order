import styled from '@emotion/styled';

export const ItemWrapper = styled.div`
    margin: 10px 0;
    padding: 15px 15px 20px 15px;
    background-color: ${({ theme }) => theme.colors.gray00};
`

export const ItemTitle = styled.div`
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 15px;
`

export const Item = styled.div`
    display: flex;
    border: 1px solid ${({ theme }) => theme.colors.gray500};
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 50px;
`

export const ItemImage = styled.div`
    img {
        height: 70px;
        margin-right: 20px;
    }
`

export const ItemName = styled.div`
    font-size: 15px;
    margin-bottom: 1px;
`

export const ItemBrand = styled.div`
    font-size: 13px;
    color: gray;
    margin-bottom: 10px;
`

export const ItemPrice = styled.div`
    font-weight: bold;
    
    span {
        color: gray;
        font-weight: normal;
    }
`