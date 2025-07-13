import styled from "@emotion/styled";

export const BackDrop = styled.div`
    position: fixed;
    z-index: 99999;
    inset: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    padding: 40px;

    background-color: #00000080;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 600px;
    height: 100%;

    border-radius: 8px;
    padding: 20px;

    background-color: #fff;
`;

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.typography.title.title1Bold.size};
    font-weight: ${({ theme }) => theme.typography.title.title1Bold.weight};
`;

export const Info = styled.p`
    margin: 8px 0px;

    font-size: ${({ theme }) => theme.typography.label.label2Regular.size};
    font-weight: ${({ theme }) => theme.typography.label.label2Regular.weight};

    color: ${({ theme }) => theme.colors.gray.gray800};
`;

export const Header = styled.header`
    margin: 8px 0px;
`;

export const Container = styled.ul`
    flex-grow: 1;

    overflow-y: scroll;
`;

export const Footer = styled.footer`
    display: flex;
    gap: 8px;

    margin-top: 14px;
`;
