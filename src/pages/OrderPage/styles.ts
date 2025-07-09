import styled from "@emotion/styled";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.semantic.backgroundDefault};;
    margin-top: ${({ theme }) => theme.spacing.spacing3};
    padding: ${({ theme }) => theme.spacing.spacing4};
`;
export const Title = styled.h1`
    font: ${({ theme }) => theme.typography.title2Bold};
`;
export const Box = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.semantic.borderDefault};;
    border-radius: ${({ theme }) => theme.spacing.spacing2};
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.spacing3};
    margin-top: ${({ theme }) => theme.spacing.spacing3};
    margin-bottom: ${({ theme }) => theme.spacing.spacing15};
`;
export const Image = styled.img`
    width: ${({ theme }) => theme.spacing.spacing16};
    border-radius: ${({ theme }) => theme.spacing.spacing1};
    height: auto;
`;
export const Label = styled.div`
    padding-left: ${({ theme }) => theme.spacing.spacing3};
`;
export const ProductName = styled.p`
    font: ${({ theme }) => theme.typography.body1Regular};
    font-size: 14px
`;
export const ProductBrand = styled.p`
    font: ${({ theme }) => theme.typography.label2Regular};
    color: ${({ theme }) => theme.colors.semantic.textSub};
`;
export const Price = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.spacing2};
`;
export const PriceName = styled.p`
    font: ${({ theme }) => theme.typography.label1Regular};
    color: ${({ theme }) => theme.colors.semantic.textSub};
`;
export const ProductPrice = styled.p`
    font: ${({ theme }) => theme.typography.title1Bold};
`;
