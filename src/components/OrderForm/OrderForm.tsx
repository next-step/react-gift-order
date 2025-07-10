import styled from '@emotion/styled';
import Card from '@/components/OrderForm/Card';
import { Sender } from '@/components/OrderForm/Sender';
import { Recipinet } from '@components/OrderForm/Recipient';
import { ProductInfo } from '@/components/OrderForm/ProductInfo';
import { useSearchParams } from 'react-router-dom';
import { OrderButton } from '@/components/OrderForm/OrderButton';
import productData from '@/data/productData';

const Wrapper = styled.section(({ theme }) => ({
  width: '100%',
  paddingBottom: '3.125rem',
  backgroundColor: theme.semanticColors.background.default,
}));

const Margin = styled.div<{ height: string }>`
  width: 100%;
  height: ${({ height }) => height};
  background-color: transparent;
`;

const OrderForm = () => {
  const [searchParams] = useSearchParams();
  const productId = Number(searchParams.get('productId'));

  const selectedProduct = productId === productData.id ? productData : null;

  if (!selectedProduct) {
    return <div>존재하지 않는 상품입니다.</div>;
  }

  return (
    <Wrapper>
      <Card />
      <Margin height={'8px'} />
      <Sender />
      <Margin height={'8px'} />
      <Recipinet />
      <Margin height={'8px'} />
      <ProductInfo product={selectedProduct} />
      <OrderButton />
    </Wrapper>
  );
};

export default OrderForm;
