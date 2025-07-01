import styled from '@emotion/styled';

export const Section = styled.section`
    padding: ${({ theme }) => theme.spacing.spacing4};
    background-color: ${({ theme }) => theme.colors.gray00};
`;

export const Title = styled.h2`
    font-size: 25px;
    font-weight: bold;
    margin: 20px 0 20px 12px;
    color: ${({ theme }) => theme.colors.gray900};
`;

export const ThemeListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: ${({ theme }) => theme.spacing.spacing3};
`;

export const YellowBox = styled.div`
    background-color: ${({ theme }) => theme.colors.semantic.brand.kakaoYellow};
    border-radius: 20px;
    padding: ${({ theme }) => theme.spacing.spacing4};
    margin-top: 30px;
    font-weight: 600;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.gray1000};
    line-height: 1.5;
`;
