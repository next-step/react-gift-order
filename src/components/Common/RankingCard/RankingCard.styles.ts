import styled from '@emotion/styled';

export const Card = styled.div`
    background: #fff;
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 12px;
`;

export const ImageWrapper = styled.div`
    position: relative;
`

export const RankBadge = styled.div<{ rank: number }>`
    position: absolute;
    top: 8px;
    left: 8px;
    width: 24px;
    height: 24px;
    border-radius: 5px;
    font-size: 13px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.gray00};
    background-color: ${({ rank, theme }) =>
  rank <= 3 ? theme.colors.red600 : theme.colors.gray500};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

export const ProductImage = styled.img`
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    aspect-ratio: 1;
`;

export const BrandName = styled.div`
    margin-top: 8px;
    font-size: 13px;
    color: #888;
`;

export const ProductName = styled.div`
    margin-top: 4px;
    font-size: 15px;
    font-weight: 500;
    color: #333;
`;

export const Price = styled.div`
    margin-top: 6px;
    font-size: 15px;
    font-weight: bold;
    color: #000;
`;
