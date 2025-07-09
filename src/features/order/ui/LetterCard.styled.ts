import styled from "@emotion/styled";

export const Container = styled.div<{ isSelected: boolean }>`
    flex-shrink: 0;

    width: 76px;
    height: 50px;

    border-radius: 8px;
    outline: ${({ isSelected, theme }) =>
        isSelected ? `3px solid ${theme.colors.gray.gray800}` : "none"};

    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;
`;
