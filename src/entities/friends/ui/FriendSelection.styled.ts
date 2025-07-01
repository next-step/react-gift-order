import styled from "@emotion/styled";

export const Wrapper = styled.section`
    width: 100%;
    height: 106px;

    padding: ${({ theme }) => {
        return `${theme.spacing.spacing4} ${theme.spacing.spacing3}`;
    }};

    background-color: ${({ theme }) => {
        return theme.colors.gray.gray200;
    }};
`;
