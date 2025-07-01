import styled from "@emotion/styled";

export const Button = styled.button`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({ theme }) => {
        return theme.spacing.spacing3;
    }};

    width: 100%;
    height: 100%;

    border: none;
    border-radius: 18px;
    padding: ${({ theme }) => {
        return `${theme.spacing.spacing4}`;
    }};

    background-color: #fff;
`;

export const ButtonIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => {
        return theme.spacing.spacing3;
    }};

    height: 100%;
    aspect-ratio: 1/1;

    border-radius: 16px;

    background-color: ${({ theme }) => {
        return theme.colors.yellow.yellow600;
    }};

    & svg {
        display: block;
    }
`;

export const ButtonLabel = styled.label`
    flex-grow: 1;

    text-align: left;

    font-size: ${({ theme }) => {
        return theme.typography.body.body1Bold.size;
    }};
    font-weight: ${({ theme }) => {
        return theme.typography.body.body1Bold.weight;
    }};
    color: ${({ theme }) => {
        return theme.colors.gray.gray900;
    }};
`;
