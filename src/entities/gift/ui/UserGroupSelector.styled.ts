import styled from "@emotion/styled";

export const SelectorContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ItemContainer = styled.button`
    width: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;

    border: none;
    background: none;

    cursor: pointer;
`;

export const ItemIconText = styled.div<{ isActive?: boolean }>`
    width: 44px;
    height: 44px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 16px;

    color: ${({ theme }) => {
        return theme.colors.blue.blue400;
    }};

    background-color: ${({ theme, isActive }) => {
        if (isActive) return theme.colors.blue.blue700;
        else return theme.colors.blue.blue100;
    }};
`;

export const ItemLabel = styled.p<{ isActive?: boolean }>`
    font-weight: ${({ theme, isActive }) => {
        if (isActive) return theme.typography.body.body2Regular.weight;
        else return theme.typography.body.body1Regular.weight;
    }};

    color: ${({ theme, isActive }) => {
        if (isActive) return theme.colors.blue.blue700;
        else return theme.colors.gray.gray600;
    }};
`;
