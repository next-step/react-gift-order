import styled from '@emotion/styled';

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing6} ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.semantic.background.default};
`;

export const SectionTitle = styled.p`
  ${({ theme }) => theme.typography.body1Bold};
  color: ${({ theme }) => theme.colors.gray[900]};
`;

export const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  margin: ${({ theme }) => theme.spacing.spacing4} 0;
`;

export const ProductContent = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing4};
  align-items: flex-start;
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
`;

export const ProductDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing2};
`;

export const ProductName = styled.p`
  ${({ theme }) => theme.typography.body1Bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin: 0;
  line-height: 1.4;
`;

export const BrandName = styled.p`
  ${({ theme }) => theme.typography.body2Regular};
  color: ${({ theme }) => theme.colors.gray[600]};
  margin: 0;
`;

export const PriceDivider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  margin: ${({ theme }) => theme.spacing.spacing3} 0;
`;

export const PriceContainer = styled.p`
  ${({ theme }) => theme.typography.body2Regular};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin: 0;
  display: flex;
  align-items: center;
`;

export const PriceLabel = styled.span`
  ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.colors.gray[500]};
  margin-right: ${({ theme }) => theme.spacing.spacing2};
`;

export const Price = styled.span`
  font-weight: 500;
`;

export const BottomDivider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  margin: ${({ theme }) => theme.spacing.spacing4} 0 0 0;
`; 