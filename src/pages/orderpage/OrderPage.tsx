/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MessageCardSection from "./MessageCardSection";
import SenderInfoSection from "./SenderInfoSection";
import ReceiverInfoSection from "./RecieverSection";
import ProductSummarySection from "./ProductSummarySection";

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  useEffect(() => {
    if (!product) {
      navigate("/notfound", { replace: true });
    }
  }, [product, navigate]);

  if (!product) return null;

  return (
    <Form>
      <MessageCardSection />
      <SenderInfoSection />
      <ReceiverInfoSection />
      <ProductSummarySection product={product} />
    </Form>
  );
};

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 10px;
`;

export default OrderPage;
