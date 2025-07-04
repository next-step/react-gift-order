import { useOrder } from "@/contexts/OrderContext";
import { orderSubmitBarStyle } from "./styles";
import { useOrderForm } from "@/contexts/OrderFormContext";

function OrderSubmitBar() {
  const { triggerValidation } = useOrderForm();
  const { totalPrice } = useOrder();
  const handleClick = () => {
    triggerValidation();
  };
  return (
    <div css={orderSubmitBarStyle} onClick={handleClick}>
      {totalPrice}원 주문하기
    </div>
  );
}

export default OrderSubmitBar;
