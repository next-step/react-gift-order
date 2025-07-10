import styled from "@emotion/styled";
import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import Order from "@/pages/Order/components/Order";
import { useOrderContext } from "@/contexts/orderContext";

const OrderPage = () => {
  return (
    <Order>
      <OrderPageContent />
    </Order>
  );
};

const OrderPageContent = () => {
  const { submit } = useOrderContext();
  return (
    <Container>
      <Content onSubmit={submit}>
        <Order.Card />
        <Divider spacing="0.5rem" fill={false} />
        <Order.Sender />
        <Divider spacing="0.5rem" fill={false} />
        <Order.Recipient />
        <Divider spacing="0.5rem" fill={false} />
        <Order.Product />
        <Divider spacing="3.125rem" />
        <Order.Btn />
      </Content>
    </Container>
  );
};

export default OrderPage;

const Content = styled.form`
  background-color: ${({ theme }) => theme.color.backgroundColor.default};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;
