import styled from "@emotion/styled";

export const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 4px;

    margin: 4px 0px;
`;

export const Title = styled.h2`
    font-size: ${({ theme }) => theme.typography.title.title2Bold.size};
    font-weight: ${({ theme }) => theme.typography.title.title2Bold.weight};
`;

//////////////////////////////////////////////////////////////////////

export const Container = styled.li`
    display: flex;
    flex-direction: column;
    gap: 12px;

    padding: 16px;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.gray.gray100};
`;

export const Wrapper = styled.div`
    padding: 16px 0px;

    &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray.gray500};
    }
`;
