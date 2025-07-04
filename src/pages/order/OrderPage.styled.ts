import styled from "@emotion/styled";

export const Container = styled.div``;

export const LetterCardContainer = styled.header`
    display: flex;
    flex-wrap: nowrap;
    gap: 8px;

    padding: 6px 8px;

    overflow-x: scroll;
`;

export const PreviewContainer = styled.div`
    width: 100%;
    max-width: 360px;
    aspect-ratio: 3/2;

    margin: 0px auto;
    border-radius: 12px;

    overflow: hidden;
`;

export const Preview = styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;
`;

export const FieldSet = styled.fieldset`
    padding: 0px ${({ theme }) => theme.spacing.spacing4};

    font-size: ${({ theme }) => theme.typography.body.body1Regular.size};
`;

export const Legend = styled.h1`
    display: block;

    padding: 12px 0px;

    font-size: ${({ theme }) => theme.typography.subtitle.subtitle1Bold};
    font-weight: ${({ theme }) => theme.typography.subtitle.subtitle1Bold.weight};
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;

    min-width: 64px;
`;

export const FieldGroup = styled.div`
    display: flex;
`;
