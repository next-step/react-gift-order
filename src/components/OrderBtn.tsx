import { OrderBtnContainer } from '@/styles/Order/OrderBtn.styles';

type OrderBtnProps = {
  cost: number;
  handlecheckInput: () => void;
};

function OrderBtn({ cost, handlecheckInput }: OrderBtnProps) {
  return <OrderBtnContainer onClick={handlecheckInput}>{cost}원 주문하기</OrderBtnContainer>;
}
export default OrderBtn;
