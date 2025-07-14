import OrderCheck from '@/component/OrderCheck';
import PresentCardSelector from '@/component/PresentCardSelector';
import Receiver from '@/component/Receiver';
import Sender from '@/component/Sender';
import { DefaultDiv, EmptyDivGray8h } from '@/styles/Common.styled';
const Order = () => {

  return (
    <DefaultDiv>
      <PresentCardSelector/>
      <EmptyDivGray8h />

      <Sender/>

      <EmptyDivGray8h />
        <Receiver />

      <EmptyDivGray8h />
      <OrderCheck/>
    </DefaultDiv>
  );
};

export default Order;