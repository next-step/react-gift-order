import {
  CardSelectorBar,
  OrderButton,
  OrderLayout,
  OrderProductInfoSection,
  ReceiverInfoSection,
  SelectedCardView,
  SenderInfoSection,
} from "@/components/order";
import styled from "@emotion/styled";
import { useOrder } from "@/hooks/order/useOrder";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { generateMockArray } from "@/__mock__/generate-mock-array";
import { useRouter } from "@/hooks/common/useRouter";
import type { Order } from "@/types";

const BlankSpace = styled.div(({ theme }) => ({
  display: "flex",
  width: "100%",
  padding: theme.spacing1,
  backgroundColor: theme.color.gray[100],
}));

export const OrderPage = () => {
  const { goHomePage } = useRouter();
  const { order, setOrder, resetOrder, validateAllFields, isOrderComplete } =
    useOrder();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      const foundProduct = generateMockArray().find(
        item => item.id.toString() === id,
      );
      if (foundProduct) {
        setOrder((prev: Order) => ({ ...prev, product: foundProduct }));
      } else {
        goHomePage();
      }
    }
  }, [id, goHomePage, setOrder]);

  const handleOrderSubmit = () => {
    const isValidOrder = validateAllFields();
    if (!isValidOrder) return;
    if (!isOrderComplete()) {
      alert("필수 정보를 모두 입력해주세요.");
      return;
    }
    alert(
      `주문이 완료되었습니다.\n상품명: ${order.product?.name}\n구매 수량: ${order.quantity}\n발신자 이름 : ${order.senderName}\n메시지: ${order.message}`,
    );
    resetOrder();
    goHomePage();
  };

  return (
    <OrderLayout>
      <CardSelectorBar />
      <SelectedCardView />
      <BlankSpace />
      <SenderInfoSection />
      <BlankSpace />
      <ReceiverInfoSection />
      <BlankSpace />
      <OrderProductInfoSection product={order.product} />
      <OrderButton onClick={handleOrderSubmit} />
    </OrderLayout>
  );
};
