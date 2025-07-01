import styled from "@emotion/styled";

export const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px 8px;
`;

export const Wrapper = styled.article`
    position: relative;

    width: 100%;
`;

export const Container = styled.div``;

export const IndexLabel = styled.p<{ isHighlighted?: boolean }>`
    position: absolute;
    top: 4px;
    left: 4px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;
    border-radius: 4px;

    font-size: ${({ theme }) => {
        return theme.typography.label.label2Bold.size;
    }};

    font-weight: ${({ theme }) => {
        return theme.typography.label.label2Bold.weight;
    }};

    color: #fff;
    background-color: ${({ theme, isHighlighted }) => {
        if (isHighlighted) return theme.colors.red.red600;
        else return theme.colors.gray.gray600;
    }};
`;

export const Image = styled.img`
    width: 100%;
    border-radius: 4px;
    object-fit: cover;
`;

export const BrandLabel = styled.p`
    font-size: ${({ theme }) => {
        return theme.typography.label.label1Bold.size;
    }};

    color: ${({ theme }) => {
        return theme.colors.gray.gray600;
    }};
`;

export const MenuLabel = styled.p`
    color: #000;
    font-size: ${({ theme }) => {
        return theme.typography.label.label1Bold.size;
    }};
`;

export const PriceLabel = styled.h3`
    margin-top: 4px;

    font-size: ${({ theme }) => {
        return theme.typography.title.title2Bold.size;
    }};

    font-weight: ${({ theme }) => {
        return theme.typography.title.title2Bold.weight;
    }};
`;
