import type { TextAreaProps } from "@/shared/ui/TextArea";

import styled from "@emotion/styled";

export const TextAreaElement = styled.textarea<TextAreaProps>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};

    border: 1px solid;
    border-color: ${({ theme, error }) => {
        if (error) return theme.colors.red.red600;
        return theme.colors.gray.gray300;
    }};

    border-radius: 8px;

    padding: ${({ theme }) => theme.spacing.spacing3};

    outline: none;

    &:focus {
        outline: 1px solid ${({ theme }) => theme.colors.gray.gray900};
    }
`;

export const Error = styled.p`
    width: 100%;

    margin: 8px 0px;
    margin-left: 8px;

    color: ${({ theme }) => theme.colors.red.red600};
    font-size: ${({ theme }) => theme.typography.label.label2Regular.size};
    font-weight: ${({ theme }) => theme.typography.label.label2Regular.weight};
`;
