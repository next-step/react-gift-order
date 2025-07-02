import styled from "@emotion/styled";

export const Wrapper = styled.section`
    width: 100%;

    padding: ${({ theme }) => {
        return theme.spacing.spacing2;
    }};
`;

export const Title = styled.h2`
    padding: ${({ theme }) => {
        return `0px ${theme.spacing.spacing2} ${theme.spacing.spacing5}`;
    }};

    font-size: ${({ theme }) => {
        return theme.typography.title.title1Bold.size;
    }};
    font-weight: ${({ theme }) => {
        return theme.typography.title.title1Bold.weight;
    }};
`;

export const Container = styled.div`
    width: 100%;
`;
