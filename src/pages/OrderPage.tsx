/** @jsxImportSource @emotion/react */
import * as S from "@/styles/OrderPageStyles";
import { useEffect, useState } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
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
import ReceiverTable from "@/components/order/ReceiverTable";
import OrderSummary from "@/components/order/OrderSummary";
import OrderButton from "@/components/order/OrderButton";

import { rankingList } from "@/mock/rankingList";

const OrderPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = rankingList.find((item) => item.id === Number(id));

  if (!product) return <Navigate to="/not-found" replace />;

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
          <S.Form onSubmit={handleSubmit(onValid)}>
            <S.Container>
              <S.SectionCard>
                <MessageCardSection />
              </S.SectionCard>

              <S.SectionCard>
                <SenderInfoSection />
              </S.SectionCard>

              <S.SectionCard>
                <S.SectionHeader>
                  <S.SectionTitle>받는 사람</S.SectionTitle>
                  <S.AddReceiverButton
                    type="button"
                    onClick={() => setReceiverModalOpen(true)}
                  >
                    {watch("receivers").length > 0 ? "수정" : "추가"}
                  </S.AddReceiverButton>
                </S.SectionHeader>

                {watch("receivers").length === 0 ? (
                  <S.EmptyBox>
                    <S.EmptyText>
                      받는 사람이 없습니다.
                      <br />
                      받는 사람을 추가해주세요.
                    </S.EmptyText>
                  </S.EmptyBox>
                ) : (
                  <ReceiverTable />
                )}
              </S.SectionCard>

              <S.SectionCard>
                <OrderSummary product={product} />
              </S.SectionCard>
            </S.Container>

            <S.StickyFooter>
              <S.StickyInner>
                <OrderButton amount={totalAmount} type="submit" />
              </S.StickyInner>
            </S.StickyFooter>
          </S.Form>
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

