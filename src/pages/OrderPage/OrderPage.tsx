import Layout from "@/layout";
import { orderCardMockData } from "@/data/orderCardMockData";
import styled from "@emotion/styled";
import CardSelection from "./components/CardSelection/CardSelection";
import { useCardSelection } from "./hooks/useCardSelection";
import SenderSectionComponent from "./components/SenderSection/SenderSection";
import ReceiverSectionComponent from "./components/ReceiverSection/ReceiverSection";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import { useProductInfo } from "./hooks/useProductInfo";
import { ROUTES } from "@/constants/routes";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export interface SenderFormData {
  senderName: string;
}

const OrderPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.disabled};
  gap: ${({ theme }) => theme.spacing[2]};
`;

function OrderPage() {
  const navigate = useNavigate();

  const cardSelection = useCardSelection(orderCardMockData);

  const {
    control: senderControl,
    handleSubmit: senderHandleSubmit,
    formState: { errors: senderErrors },
  } = useForm<SenderFormData>({
    defaultValues: {
      senderName: "",
    },
  });

  const onSubmit = () => {};
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    senderHandleSubmit(onSubmit)(e);
  };

  const product = useProductInfo();

  if (!product) {
    navigate(ROUTES.NOT_FOUND);
    return;
  }

  return (
    <Layout>
      <form onSubmit={onSubmitHandler}>
        <OrderPageContainer>
          <CardSelection cards={orderCardMockData} {...cardSelection} />
          <SenderSectionComponent
            control={senderControl}
            errors={senderErrors}
          />
          <ReceiverSectionComponent />
          <ProductInfo product={product} quantity="1" />
        </OrderPageContainer>
      </form>
    </Layout>
  );
}

export default OrderPage;
