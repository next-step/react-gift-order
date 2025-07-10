import styled from '@emotion/styled';
import Card from '@/components/OrderForm/Card';
import { Sender } from '@/components/OrderForm/Sender';
import { Recipinet } from '@/components/OrderForm/Recipinet';
import { ProductInfo } from '@/components/OrderForm/ProductInfo';
import { useLocation } from 'react-router-dom';
import { OrderButton } from '@/components/OrderForm/OrderButton';

const Wrapper = styled.section(({ theme }) => ({
  width: '100%',
  paddingBottom: '3.125rem',
  backgroundColor: theme.semanticColors.background.default,
}));

const Margin1 = styled.div(({ theme }) => ({
  width: '100%',
  height: '8px',
  backgroundColor: theme.semanticColors.background.fill,
}));

const OrderForm = () => {
  const location = useLocation();
  const selectedProduct = location.state?.product;
  return (
    <Wrapper>
      <Card />
      <Margin1 />
      <Sender />
      <Margin1 />
      <Recipinet />
      <Margin1 />
      <ProductInfo product={selectedProduct} />
      <OrderButton />
    </Wrapper>
  );
};

export default OrderForm;
