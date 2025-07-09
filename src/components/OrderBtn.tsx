import { OrderBtnContainer } from '@/styles/Order/OrderBtn.styles';
import { useNavigate } from 'react-router-dom';

type OrderBtnProps = {
  cost: number;
  handlecheckInput: () => boolean;
  SubmitOrder: () => void;
};

function OrderBtn({ cost, handlecheckInput, SubmitOrder }: OrderBtnProps) {
  const navigate = useNavigate();
  function handleClick() {
    if (handlecheckInput()) {
      SubmitOrder();
      navigate('/');
    }
  }
  return <OrderBtnContainer onClick={handleClick}>{cost}원 주문하기</OrderBtnContainer>;
}
export default OrderBtn;
