import { rankingItemMock } from "@/assets/rankingItemMock";
import { useOrderContext } from "@/contexts/orderContext";
import styled from "@emotion/styled";

const OrderBtn = () => {
  const { formData } = useOrderContext();
  const product = rankingItemMock.find((item) => item.id === Number(formData.productId));
  const totalPrice = product ? product.price.sellingPrice * formData.recipients.quantity : 0;

  return <Button type="submit">{totalPrice}원 주문하기</Button>;
};

export default OrderBtn;

const Button = styled.button`
  background-color: ${({ theme }) => theme.color.kakaoYellow};
  font: ${({ theme }) => theme.typography.label2Bold};
  border: none;
  width: 100%;
  max-width: 720px;
  height: 3.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 999;
  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.color.kakaoYellowHover};
  }
  &:active:not(:disabled) {
    background-color: ${({ theme }) => theme.color.kakaoYellowActive};
  }
`;
