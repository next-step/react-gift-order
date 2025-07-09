/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { orderFormSchema } from "@/validations/orderSchema";
import type { OrderFormValues } from "@/validations/orderSchema";

import { PageLayout } from "@/components/layout/PageLayout";
import { PageContainer } from "@/components/layout/PageContainer";
import { Navigation } from "@/components/header/Navigation";
import MessageCardSection from "@/components/order/MessageCardSection";
import SenderInfoSection from "@/components/order/SenderInfoSection";
import ReceiverModal from "@/components/order/ReceiverModal";
import OrderSummary from "@/components/order/OrderSummary";
import OrderButton from "@/components/order/OrderButton";

import { rankingList } from "@/mock/rankingList";

const OrderPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = rankingList.find((item) => item.id === Number(id));

  const methods = useForm<OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      senderName: "",
      message: "",
      selectedCardId: null,
      receivers: [], 
    },
    mode: "onBlur",
  });

  const { handleSubmit, watch, setValue } = methods;

  const [isReceiverModalOpen, setReceiverModalOpen] = useState(false);

  const onValid = (data: OrderFormValues) => {
    const totalQuantity = data.receivers.reduce(
      (sum, r) => sum + r.quantity,
      0
    );
    alert(
      `🎉 주문 완료!\n상품명: ${product?.name}\n수량: ${totalQuantity}개\n보낸 사람: ${data.senderName}\n메시지: ${data.message}`
    );
    navigate("/", { replace: true });
  };
  if (!product) return null;

  const totalQuantity =
    watch("receivers")?.reduce((sum, r) => sum + r.quantity, 0) || 0;
  const totalAmount = product!.price.sellingPrice * totalQuantity;

  const onReceiverComplete = (data: OrderFormValues["receivers"]) => {
    setValue("receivers", data);
  };

  useEffect(() => {
    if (!product) {
      navigate("/not-found", { replace: true });
    }
  }, [product, navigate]);

  if (!product) return null;

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
                <AddReceiverButton
                  type="button"
                  onClick={() => setReceiverModalOpen(true)}
                >
                  + 받는 사람 추가
                </AddReceiverButton>

                {watch("receivers")?.length > 0 && (
                  <ReceiverCount>
                    총 {watch("receivers").length}명 등록됨 / 총 수량{" "}
                    {totalQuantity}개
                  </ReceiverCount>
                )}
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

        <ReceiverModal
          isOpen={isReceiverModalOpen}
          onClose={() => setReceiverModalOpen(false)}
          onComplete={onReceiverComplete}
        />
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

const AddReceiverButton = styled.button`
  margin-top: 12px;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.yellow500};
  color: black;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

const ReceiverCount = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray700};
`;
