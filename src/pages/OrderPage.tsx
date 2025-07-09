/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { orderSchema } from "@/validations/orderSchema"; 
import type { OrderFormValues } from "@/validations/orderSchema";

import { PageLayout } from "@/components/layout/PageLayout";
import { PageContainer } from "@/components/layout/PageContainer";
import { Navigation } from "@/components/header/Navigation";
import MessageCardSection from "@/components/order/MessageCardSection";
import SenderInfoSection from "@/components/order/SenderInfoSection";
import ReceiverSection from "@/components/order/ReceiverSection";
import OrderSummary from "@/components/order/OrderSummary";
import OrderButton from "@/components/order/OrderButton";

import { rankingList } from "@/mock/rankingList";

const OrderPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = rankingList.find((item) => item.id === Number(id));

  const methods = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      senderName: "",
      receiverName: "",
      receiverPhone: "",
      quantity: 1,
      message: "",
      selectedCardId: null,
    },
    mode: "onBlur",
  });

  const { handleSubmit, watch } = methods;

  useEffect(() => {
    if (!product) {
      navigate("/not-found", { replace: true });
    }
  }, [product, navigate]);

  if (!product) return null;

  const totalAmount = product.price.sellingPrice * (watch("quantity") || 1);

  const onValid = (data: OrderFormValues) => {
    alert(
      `주문이 완료되었습니다!\n` +
        `상품명: ${product.name}\n` +
        `수량: ${data.quantity}\n` +
        `보낸 사람: ${data.senderName}\n` +
        `메시지: ${data.message}`
    );
    navigate("/", { replace: true });
  };

  return (
    <PageLayout>
      <PageContainer>
        <Navigation />
        <FormProvider {...methods}>
          <Form onSubmit={handleSubmit(onValid)}>
            <Container>
              <SectionCard>
                <MessageCardSection />
              </SectionCard>

              <SectionCard>
                <SenderInfoSection />
              </SectionCard>

              <SectionCard>
                <ReceiverSection />
              </SectionCard>

              <SectionCard>
                <OrderSummary product={product} />
              </SectionCard>
            </Container>

            <StickyFooter>
              <StickyInner>
                {Number.isFinite(totalAmount) && (
                  <OrderButton amount={totalAmount} type="submit" />
                )}
              </StickyInner>
            </StickyFooter>
          </Form>
        </FormProvider>
      </PageContainer>
    </PageLayout>
  );
};

export default OrderPage;


const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray100};
  padding: 16px 0 120px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
`;

const SectionCard = styled.section`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const StickyFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
`;

const StickyInner = styled.div`
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
