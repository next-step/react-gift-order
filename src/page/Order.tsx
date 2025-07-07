import OrderCheck from '@/component/OrderCheck';
import PresentCardSelector from '@/component/PresentCardselector';
import Receiver from '@/component/Receiver';
import Sender from '@/component/sender';
import { DefaultDiv, EmptyDivGray8h } from '@/styles/Common.styled';

const Order = () => {
  //const [searchParams] = useSearchParams();
  //const id = searchParams.get('id');
  return (
  <DefaultDiv>
    <PresentCardSelector/>
    <EmptyDivGray8h/>
    <Sender/>
    <EmptyDivGray8h/>
    <Receiver/>
    <EmptyDivGray8h/>
    <OrderCheck/>
  </DefaultDiv>
  )
};

export default Order;
