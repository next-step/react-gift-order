import styled from "@emotion/styled";

export const Wrapper = styled.div`
    padding: ${({ theme }) => {
        return `0px ${theme.spacing.spacing4}`;
    }};
`;

export const Container = styled.section`
    border-radius: 16px;

    padding: ${({ theme }) => {
        return theme.spacing.spacing4;
    }};

    background-color: ${({ theme }) => {
        return theme.colors.yellow.yellow600;
    }};
`;

export const SubTitle = styled.h2`
    font-size: ${({ theme }) => theme.typography.label.label2Bold.size};
    color: ${({ theme }) => theme.colors.gray.gray700};
`;

export const Title = styled.h3`
    font-size: ${({ theme }) => theme.typography.label.label1Bold.size};
    font-weight: ${({ theme }) => theme.typography.label.label1Bold.weight};
`;
