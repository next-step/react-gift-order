import styled from '@emotion/styled';
import Card from './Card';
import { Sender } from './Sender';

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
  return (
    <Wrapper>
      <Card />
      <Margin1 />
      <Sender />
      <Margin1 />
      받는사람
      <Margin1 />
      버튼
    </Wrapper>
  );
};

export default OrderForm;
