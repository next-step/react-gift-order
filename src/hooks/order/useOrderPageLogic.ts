import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { generateMockArray } from "@/__mock__/generate-mock-array";
import { useRouter } from "@/hooks/common/useRouter";
import type { Order } from "@/types";
import {
  useOrderState,
  useOrderForm,
  useOrderValidation,
  useOrderCalculation,
} from "@/contexts/order";

export const useOrderPageLogic = () => {
  const { goHomePage } = useRouter();
  const { order, setOrder, resetOrder } = useOrderState();
  const { validateAllFields } = useOrderForm();
  const { isOrderComplete, getValidationErrors } = useOrderValidation();
  const { totalQuantity } = useOrderCalculation();
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

  const handleOrderSubmit = async () => {
    try {
      const isValidForm = await validateAllFields();

      if (!isValidForm) {
        const errors = getValidationErrors();
        alert(`유효성 검사 오류:\n${errors.join("\n")}`);
        return;
      }

      if (!isOrderComplete()) {
        alert("필수 정보를 모두 입력해주세요.");
        return;
      }

      alert(
        `주문이 완료되었습니다.\n상품명: ${order.product?.name}\n구매 수량:${totalQuantity} \n발신자 이름: ${order.senderName}\n메시지: ${order.message}`,
      );

      resetOrder();
      goHomePage();
    } catch (error) {
      console.error("주문 처리 중 오류 발생:", error);
      alert("주문 처리 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return {
    order,
    handleOrderSubmit,
  };
};
