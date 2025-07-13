import styled from "@emotion/styled";

export const ProductSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.colors.background.default};
  padding: ${({ theme }) => theme.spacing[4]};
  padding-bottom: 4.7rem;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.title.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title2Bold.fontWeight};
  color: ${({ theme }) => theme.colors.text.default};
`;

export const ProductContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  align-items: flex-start;

  border: 0.9px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing[3]};
`;

export const ProductImage = styled.img`
  width: 68px;
  height: 68px;
  object-fit: cover;

  border-radius: ${({ theme }) => theme.borderRadius.xs};
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const ProductName = styled.h3`
  font-size: ${({ theme }) => theme.typography.body.body2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.body2Regular.fontWeight};
  color: ${({ theme }) => theme.colors.text.default};
  line-height: 1.4;
`;

export const BrandName = styled.p`
  font-size: ${({ theme }) => theme.typography.label.label2Regular.fontSize};
  font-weight: ${({ theme }) =>
    theme.typography.label.label2Regular.fontWeight};
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const PriceContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[1]};
  margin-top: ${({ theme }) => theme.spacing[2]};
`;

export const PriceLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.body.body2Regular.fontSize};
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Price = styled.span`
  font-size: ${({ theme }) => theme.typography.title.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title2Bold.fontWeight};
  color: ${({ theme }) => theme.colors.text.default};
`;

export const OrderButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 720px;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  background-color: transparent;
`;

export const OrderButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.brand.kakaoYellow};
  border: none;
  border-radius: 0;

  font-size: ${({ theme }) => theme.typography.body.body1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.body1Bold.fontWeight};
  color: ${({ theme }) => theme.colors.text.default};
  cursor: pointer;
`;
