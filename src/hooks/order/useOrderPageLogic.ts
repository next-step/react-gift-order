import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { generateMockArray } from "@/__mock__/generate-mock-array";
import { useRouter } from "@/hooks/common/useRouter";
import { useOrder } from "@/hooks/order/useOrder";
import type { Order } from "@/types";

export const useOrderPageLogic = () => {
  const { goHomePage } = useRouter();
  const {
    order,
    setOrder,
    resetOrder,
    validateAllFields,
    isOrderComplete,
    getValidationErrors,
  } = useOrder();
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
    if (!isValidOrder) {
      const errors = getValidationErrors();
      alert(`유효성 검사 오류:\n${errors.join("\n")}`);
      return;
    }
    if (!isOrderComplete()) {
      alert("필수 정보를 모두 입력해주세요.");
      return;
    }
    alert(
      `주문이 완료되었습니다.\n상품명: ${order.product?.name}\n구매 수량: ${order.quantity}\n발신자 이름: ${order.senderName}\n메시지: ${order.message}`,
    );
    resetOrder();
    goHomePage();
  };

  return {
    order,
    handleOrderSubmit,
  };
};
