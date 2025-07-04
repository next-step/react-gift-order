import styled from '@emotion/styled';

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
