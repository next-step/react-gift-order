import styled from '@emotion/styled';

export const Section = styled.section`
    padding: ${({ theme }) => theme.spacing.spacing5};
    background-color: ${({ theme }) => theme.colors.gray00};
`;

export const Title = styled.h2`
    margin: 20px 0 20px 12px;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 16px;
`;

export const CategoryFilter = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 12px 20px 12px;
`;

export const SortOptions = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0;
    margin: 0 auto 20px;
    background-color: #f2f7ff;
    padding: 10px 0;
    border-radius: 12px;
    max-width: 688px;
    height: 50px;
    text-align: center;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
`;

export const MoreButton = styled.button`
    width: 480px;
    height: 45px;
    display: block;
    margin: 20px auto 0;
    padding: ${({ theme }) => `${theme.spacing.spacing2} ${theme.spacing.spacing6}`};
    background-color: ${({ theme }) => theme.colors.gray00};
    border: 1px solid ${({ theme }) => theme.colors.gray500};
    border-radius: 12px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
`;
