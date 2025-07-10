/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { useForm, FormProvider} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { orderFormSchema } from "@/validations/orderSchema";
import type { OrderFormValues } from "@/validations/orderSchema";

import { PageLayout } from "@/components/layout/PageLayout";
import { PageContainer } from "@/components/layout/PageContainer";
import { Navigation } from "@/components/header/Navigation";
import MessageCardSection from "@/components/order/MessageCardSection";
import SenderInfoSection from "@/components/order/SenderInfoSection";
import ReceiverModal from "@/components/order/ReceiverModal";
import ReceiverTable from "@/components/order/ReceiverTable"; 
import OrderSummary from "@/components/order/OrderSummary";
import OrderButton from "@/components/order/OrderButton";

import { rankingList } from "@/mock/rankingList";

const OrderPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = rankingList.find((item) => item.id === Number(id));
  
  if (!product) 
    return <Navigate to="/not-found" replace />;

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


  const receivers = watch("receivers") ?? [];

  const [isReceiverModalOpen, setReceiverModalOpen] = useState(false);

  const totalQuantity = receivers.reduce((sum, r) => sum + r.quantity, 0);

  const totalAmount = product.price.sellingPrice * totalQuantity;

  const onReceiverComplete = (data: OrderFormValues["receivers"]) => {
    setValue("receivers", data);
  };

  const onValid = (data: OrderFormValues) => {
    const qty = data.receivers.reduce((sum, r) => sum + r.quantity, 0);
    alert(
      `주문 완료!\n상품명: ${product?.name}\n수량: ${qty}개\n보낸 사람: ${data.senderName}\n메시지: ${data.message}`
    );
    navigate("/", { replace: true });
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
                <SectionHeader>
                  <SectionTitle>받는 사람</SectionTitle>
                  <AddReceiverButton
                    type="button"
                    onClick={() => setReceiverModalOpen(true)}
                  >
                    {watch("receivers").length > 0 ? "수정" : "추가"}
                  </AddReceiverButton>
                </SectionHeader>

                {watch("receivers").length === 0 ? (
                  <EmptyBox>
                    <EmptyText>
                      받는 사람이 없습니다.
                      <br />
                      받는 사람을 추가해주세요.
                    </EmptyText>
                  </EmptyBox>
                ) : (
                  <ReceiverTable />
                )}
              </SectionCard>

              <SectionCard>
                <OrderSummary product={product} />
              </SectionCard>
            </Container>

            <StickyFooter>
              <StickyInner>
                <OrderButton amount={totalAmount} type="submit" />
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
  background-color: ${({ theme }) => theme.colors.gray00};
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

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const SectionTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray900};
  margin: 0;
`;

const AddReceiverButton = styled.button`
  font-size: 0.875rem;
  font-weight: 400;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray200};
  color: ${({ theme }) => theme.colors.gray900};
  border: none;
  cursor: pointer;
`;

const EmptyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 8px;
  margin-top: 12px;
`;

const EmptyText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray600};
  text-align: center;
  margin: 0;
`;
