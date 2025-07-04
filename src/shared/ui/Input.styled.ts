import { type InputFieldGroupProps, type InputProps } from "@/shared/ui/Input";

import styled from "@emotion/styled";

export const Input = styled.input<InputProps>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "40px"};

    border: 1px solid ${({ theme }) => theme.colors.gray.gray300};
    border-radius: 8px;

    padding: ${({ theme }) => theme.spacing.spacing3};

    outline: none;

    &:focus {
        outline: 1px solid ${({ theme }) => theme.colors.gray.gray900};
    }
`;

export const InputLabel = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;

    min-width: 70px;
`;

export const InputFieldGroupContainer = styled.div<Pick<InputFieldGroupProps, "align">>`
    display: flex;
    flex-direction: ${({ align }) => (align === "vertical" ? "column" : "row")};
`;

export const InputElementContainer = styled.div`
    width: 100%;
`;

export const Error = styled.p`
    width: 100%;

    margin: 8px 0px;
    margin-left: 8px;

    color: ${({ theme }) => theme.colors.red.red600};
    font-size: ${({ theme }) => theme.typography.label.label2Regular.size};
    font-weight: ${({ theme }) => theme.typography.label.label2Regular.weight};
`;
