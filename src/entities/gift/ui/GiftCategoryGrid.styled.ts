import styled from "@emotion/styled";

export const GridWrapper = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px 4px;
`;

export const GridItem = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: ${({ theme }) => {
        return theme.spacing.spacing1;
    }};
`;

export const ItemImage = styled.img`
    width: 50px;
    height: 50px;
`;

export const ItemLabel = styled.p`
    font-size: ${({ theme }) => {
        return theme.typography.label.label2Bold.size;
    }};
`;
