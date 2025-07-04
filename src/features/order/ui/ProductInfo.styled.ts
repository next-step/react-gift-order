import styled from "@emotion/styled";

export const Container = styled.div`
    width: 100%;
    height: 90px;

    display: flex;
    gap: 12px;

    padding: 12px 16px;
    border: 1px solid ${({ theme }) => theme.colors.gray.gray300};
    border-radius: 8px;
`;

export const Image = styled.img`
    display: block;

    height: 100%;
    aspect-ratio: 1/1;

    border-radius: 8px;
`;

export const InfoContainer = styled.div`
    h1,
    h2,
    p {
        margin: 2px 0px;
    }
`;

export const ProductName = styled.h1`
    font-size: 14px;
`;

export const BrandName = styled.p`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray.gray600};
`;

export const Price = styled.h2`
    span:first-of-type {
        font-size: 14px;
        font-weight: normal;
        color: ${({ theme }) => theme.colors.gray.gray600};
    }
    span:last-of-type {
        font-size: 16px;
        font-weight: bold;
    }
`;
