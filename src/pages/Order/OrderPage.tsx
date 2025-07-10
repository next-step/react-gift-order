import styled from "@emotion/styled";
import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import Order from "@/pages/Order/components/Order";
import { useFormContext } from "react-hook-form";

const OrderPage = () => {
  return (
    <Order>
      <OrderPageContent />
    </Order>
  );
};

const OrderPageContent = () => {
  const { handleSubmit } = useFormContext();
  const onSubmit = () => console.log("data submit");
  return (
    <Container>
      <Content onSubmit={handleSubmit(onSubmit)}>
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
      <Order.Modal />
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
