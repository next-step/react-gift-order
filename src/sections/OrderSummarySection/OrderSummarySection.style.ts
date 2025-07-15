import styled from "@emotion/styled";

export const ProductInfoSection = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

export const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
`;

export const ProductCard = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 16px;
  padding: 12px 24px;
  margin-top: ${({ theme }) => theme.spacing.spacing3};
  margin-bottom: ${({ theme }) => theme.spacing.spacing16};
`;
export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  margin-right: ${({ theme }) => theme.spacing.spacing5};
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProductTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.body1Bold.fontSize};
  margin-bottom: 0;
`;

export const ProductBrand = styled.p`
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  color: ${({ theme }) => theme.colors.gray600};
  margin-bottom: 0;
`;

export const ProductPrice = styled.p`
  font-size: ${({ theme }) => theme.typography.body1Bold.fontSize};
  b {
    font-weight: ${({ theme }) => theme.typography.body2Bold.fontWeight};
  }
`;

export const FixedOrderButton = styled.button`
  position: fixed;
  bottom: 0;
  min-width: 720px;
  height: 64px;
  background: ${({ theme }) => theme.colors.kakaoYellow};
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title1Bold.fontWeight};
  border: none;
  outline: none;
  z-index: 1000;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.kakaoYellowHover};
  }
`;

export const SectionDivider = styled.hr`
  border: none;
  width: 100%;
  height: 12px;
  background-color: ${({ theme }) => theme.colors.gray100};
`;
