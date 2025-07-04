import styled from '@emotion/styled';

export const Title = styled.div`
    font-weight: bold;
    margin: 10px 0;
`

export const Content = styled.div`
    margin: 10px 0;
`

export const LogoutBtn = styled.button`
    padding: 10px;
    width: 100px;
    height: 50px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.gray400};
    transition: 0.5s background-color;

    &:hover {
        background-color: ${({ theme }) => theme.colors.gray500};
    }
`