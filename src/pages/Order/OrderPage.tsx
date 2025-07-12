import styled from "@emotion/styled";
import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import Order from "@/pages/Order/components/Order";
import { useFormContext } from "react-hook-form";
import { useState } from "react";

const OrderPage = () => {
  return (
    <Order>
      <OrderPageContent />
    </Order>
  );
};

const OrderPageContent = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { handleSubmit, getValues } = useFormContext();
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  const onSubmit = (data: any) => console.log(data);
  return (
    <Container>
      <Content onSubmit={handleSubmit(onSubmit)}>
        <Order.Card />
        <Divider spacing="0.5rem" fill={false} />
        <Order.Sender />
        <Divider spacing="0.5rem" fill={false} />
        <Order.Recipient onOpen={openModal} />
        <Divider spacing="0.5rem" fill={false} />
        <Order.Product />
        <Divider spacing="3.125rem" />
        <Order.Btn />
      </Content>
      {isModalOpen && (
        <Order.Modal onClose={closeModal} initialRecipients={JSON.parse(JSON.stringify(getValues("recipients")))} />
      )}
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
