import styled from "@emotion/styled";

export const SelectorContainer = styled.div`
    width: 100%;
    height: 45px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border: 1px solid rgba(70, 132, 233, 0.1);
    border-radius: 8px;
    padding: ${({ theme }) => {
        return `${theme.spacing.spacing3} ${theme.spacing.spacing4}`;
    }};

    background-color: ${({ theme }) => {
        return theme.colors.blue.blue100;
    }};
`;

export const ItemLabel = styled.p<{ isActive?: boolean }>`
    flex-grow: 1;
    text-align: center;

    font-size: ${({ theme }) => {
        return theme.typography.label.label1Bold.size;
    }};

    font-weight: ${({ theme, isActive }) => {
        if (isActive) return theme.typography.label.label1Bold.weight;
        else return theme.typography.label.label1Regular.weight;
    }};

    color: ${({ theme, isActive }) => {
        if (isActive) return theme.colors.blue.blue700;
        else return theme.colors.gray.gray600;
    }};
`;
