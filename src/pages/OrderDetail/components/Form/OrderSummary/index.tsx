import { HorizontalSpacing } from '@/components/common/Spacing/HorizontalSpacing';
import { Typography } from '@/components/common/Typography';
import { MOCK_RANKING_PRODUCT_DATA } from '@/pages/Home/components/ProductRankingListSection/mock';
import { theme } from '@/styles/theme';
import styled from '@emotion/styled';

type Props = {
  productId: string;
};

export const OrderFormOrderSummary = ({ productId }: Props) => {
  console.log(productId);
  const productItem = MOCK_RANKING_PRODUCT_DATA;

  return (
    <Wrapper>
      <HorizontalSpacing size='spacing3' />
      <Typography variant='title2Bold' color='gray900'>
        상품 정보
      </Typography>
      <HorizontalSpacing size='spacing3' />
      <OrderSummaryWrapper>
        <ProductImage src={productItem.imageURL} alt='product' />
        <div>
          <Typography variant='label1Regular' color='gray900'>
            {productItem.name}
          </Typography>
          <Typography variant='label2Regular' color='gray700'>
            {productItem.brandInfo.name}
          </Typography>
          <HorizontalSpacing size='spacing1' />
          <Typography variant='body1Bold' color='gray900'>
            <span style={{ ...theme.typography.body2Regular, color: theme.colors.scale.gray700 }}>
              상품가{' '}
            </span>
            {productItem.price.sellingPrice}원
          </Typography>
        </div>
      </OrderSummaryWrapper>
      <HorizontalSpacing size='spacing6' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

const OrderSummaryWrapper = styled.div(({ theme }) => ({
  width: '100%',
  padding: `${theme.spacing.spacing3} ${theme.spacing.spacing4}`,
  borderRadius: '0.5rem',
  backgroundColor: theme.colors.semantic.background.default,
  border: `1px solid ${theme.colors.scale.gray300}`,

  display: 'flex',
  gap: theme.spacing.spacing3,
}));

const ProductImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 4px;
  object-fit: cover;
  object-position: center;
  aspect-ratio: 1/1;
`;
