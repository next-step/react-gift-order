import styled from '@emotion/styled';
import Card from './Card';

const Wrapper = styled.section(({ theme }) => ({
  width: '100%',
  paddingBottom: '3.125rem',
  backgroundColor: theme.semanticColors.background.default,
}));

const OrderForm = () => {
  return (
    <Wrapper>
      <Card />
    </Wrapper>
  );
};

export default OrderForm;
