import type { InputProps } from "@/shared/ui/Input";

import styled from "@emotion/styled";

export const InputElement = styled.input<InputProps>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};

    padding: 8px 0px;

    border: none;
    border-bottom: 1px solid;
    border-color: ${({ theme, error }) => {
        if (error) return theme.colors.red.red700;
        else return theme.colors.gray.gray400;
    }};

    font-size: 1rem;

    outline: none;

    transition: border-color 100ms ease-in-out;

    &:focus {
        border-color: ${({ theme }) => theme.colors.gray.gray900};
    }
`;

export const InputErrorMessage = styled.p`
    height: 4px;
    margin-top: 4px;

    color: ${({ theme }) => theme.colors.red.red700};
    font-size: ${({ theme }) => theme.typography.label.label2Bold.size};
`;
