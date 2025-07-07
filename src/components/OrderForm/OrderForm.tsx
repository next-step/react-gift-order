import styled from '@emotion/styled';
import CardSelector from './CardSelector';

const Wrapper = styled.section(({ theme }) => ({
  width: '100%',
  paddingBottom: '3.125rem',
  backgroundColor: theme.semanticColors.background.default,
}));

const OrderForm = () => {
  return (
    <Wrapper>
      <CardSelector />
    </Wrapper>
  );
};

export default OrderForm;
