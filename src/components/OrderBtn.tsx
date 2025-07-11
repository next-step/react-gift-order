import { OrderBtnContainer } from '@/styles/Order/OrderBtn.styles';

type OrderBtnProps = {
  cost:number;
};

function OrderBtn({ cost }: OrderBtnProps) {
  return <OrderBtnContainer type="submit">{cost}원 주문하기</OrderBtnContainer>;
}
export default OrderBtn;
