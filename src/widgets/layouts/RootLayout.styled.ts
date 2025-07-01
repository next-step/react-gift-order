import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100dvh;

    background-color: ${({ theme }) => theme.colors.gray.gray100};
`;

export const Container = styled.main`
    width: 100%;
    max-width: 720px;

    margin: 0px auto;
`;
