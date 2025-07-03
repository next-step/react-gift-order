import styled from '@emotion/styled';
import { Link } from "react-router-dom";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.gray200};
    text-align: center;
    padding: ${({ theme }) => theme.spacing.spacing5};
    
    h1, p {
        margin: ${({ theme }) => `${theme.spacing.spacing5} ${theme.spacing.spacing0} ${theme.spacing.spacing5} ${theme.spacing.spacing0}`};
    }
`;

export const StyledLink = styled(Link)`
    margin-top: ${({ theme }) => theme.spacing.spacing5};
    padding: ${({ theme }) => `${theme.spacing.spacing3} ${theme.spacing.spacing5}`};
    background-color: ${({ theme }) => theme.colors.yellow600};
    border-radius: ${({ theme }) => theme.spacing.spacing2};
    color: ${({ theme }) => theme.colors.gray1000};
    font-weight: bold;
    text-decoration: none;
    transition: background-color 0.2s ease;
    width: ${({ theme }) => theme.spacing.spacing23};
    height: ${({ theme }) => theme.spacing.spacing10};

    &:hover {
        background-color: ${({ theme }) => theme.colors.yellow400};
    }
`
