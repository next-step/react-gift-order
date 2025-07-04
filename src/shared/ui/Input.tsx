import styled from "@emotion/styled";

export interface InputProps extends React.ComponentProps<"input"> {
    width?: SizeProp;
    height?: SizeProp;
}

export const Input = styled.input`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};

    border: 1px solid ${({ theme }) => theme.colors.gray.gray300};
    border-radius: 8px;

    padding: ${({ theme }) => theme.spacing.spacing3};

    outline: none;

    &:focus {
        outline: 1px solid ${({ theme }) => theme.colors.gray.gray900};
    }
`;
