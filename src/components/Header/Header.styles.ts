import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${({ theme }) => theme.spacing.spacing4};
    height: 56px;
    background-color: ${({ theme }) => theme.colors.gray00};
`;

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    cursor: pointer;
`;

export const Title = styled.h1`
    margin: 0;
    font-size: ${({ theme }) => theme.typography.title.title1Bold};
    font-weight: ${({ theme }) => theme.typography.title.title1Bold.fontWeight};
    flex-grow: 1;
    text-align: center;
    user-select: none;
    color: ${({ theme }) => theme.colors.gray900};
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;