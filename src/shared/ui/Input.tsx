import styled from "@emotion/styled";

export type InputProps = React.ComponentProps<"input">;

export const Input = styled.input<InputProps>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};

    padding: 8px 0px;

    border: none;
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.colors.gray.gray400};

    font-size: 1rem;

    outline: none;

    transition: border-color 100ms ease-in-out;

    &:focus {
        border-color: ${({ theme }) => theme.colors.gray.gray900};
    }
`;
