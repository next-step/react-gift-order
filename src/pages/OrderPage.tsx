/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { PageLayout } from "@/components/layout/PageLayout";
import { PageContainer } from "@/components/layout/PageContainer";

import { Navigation } from "@/components/header/Navigation";
import MessageCardSection from "@/components/order/MessageCardSection";
import SenderInfoSection from "@/components/order/SenderInfoSection";
import ReceiverSection from "@/components/order/ReceiverSection";
import OrderSummary from "@/components/order/OrderSummary";
import OrderButton from "@/components/order/OrderButton";
import { useOrderForm } from "@/components/order/useOrderForm";

import { rankingList } from "@/mock/rankingList";

const Form = styled.div`
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

const OrderPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = rankingList.find((item) => item.id === Number(id));

  const { values, updateField, errors, isFormValid, resetForm } = useOrderForm();

  useEffect(() => {
    if (!product) {
      navigate("/not-found", { replace: true });
    }
  }, [product, navigate]);

  if (!product) return null;

  const totalAmount = product.price?.sellingPrice * values.quantity;

  const handleSubmit = () => {
    if (!isFormValid) {
      alert("모든 필드를 올바르게 입력해주세요.");
      return;
    }

    alert(
      `주문이 완료되었습니다!\n` +
        `상품명: ${product.name}\n` +
        `구매 수량: ${values.quantity}\n` +
        `발신자: ${values.senderName}\n` +
        `메시지: ${values.message}`
    );

    resetForm();
    navigate("/", { replace: true });
  };

  return (
    <PageLayout>
      <PageContainer>
        <Navigation />
        <Form>
          <Container>
            <SectionCard>
              <MessageCardSection
                selectedCardId={values.selectedCardId}
                message={values.message}
                onChange={updateField}
                error={errors.message}
              />
            </SectionCard>

            <SectionCard>
              <SenderInfoSection
                senderName={values.senderName}
                onChange={(value) => updateField("senderName", value)}
                error={errors.senderName}
              />
            </SectionCard>

            <SectionCard>
              <ReceiverSection
                receiverName={values.receiverName}
                phone={values.receiverPhone}
                quantity={values.quantity}
                onChange={updateField}
                errors={{
                  receiverName: errors.receiverName,
                  receiverPhone: errors.receiverPhone,
                  quantity: errors.quantity,
                }}
              />
            </SectionCard>

            <SectionCard>
              <OrderSummary product={product} />
            </SectionCard>
          </Container>

          {Number.isFinite(totalAmount) && (
            <OrderButton amount={totalAmount} onClick={handleSubmit} />
          )}
        </Form>
      </PageContainer>
    </PageLayout>
  );
};

export default OrderPage;
