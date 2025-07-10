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

const Margin = styled.div<{ height: string }>`
  width: 100%;
  height: ${({ height }) => height};
  background-color: transparent;
`;

const OrderForm = () => {
  const location = useLocation();
  const selectedProduct = location.state?.product;
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
