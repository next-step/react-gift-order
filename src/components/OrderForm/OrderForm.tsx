import styled from '@emotion/styled';
import Card from './Card';
import { Sender } from './Sender';
import { Recipinet } from './Recipinet';
import { ProductInfo } from './ProductInfo';
import { useLocation } from 'react-router-dom';
import { OrderButton } from './OrderButton';

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
