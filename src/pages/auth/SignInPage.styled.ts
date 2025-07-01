import styled from "@emotion/styled";

export const Container = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const KakaoLogo = styled.img`
    display: block;

    width: 88px;
    height: 88px;
    margin: 0 auto;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    padding: ${({ theme }) => theme.spacing.spacing4};
`;

export const FieldSet = styled.fieldset``;
