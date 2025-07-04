import NavigationBar from '@/components/NavigationBar';
import OrderContainer from '@/components/OrderContainer';
import StyledTopestDiv from '@/styles/StyledTopesDiv';

const Order = () => {
  return (
    <StyledTopestDiv>
      <NavigationBar></NavigationBar>
      <OrderContainer></OrderContainer>
    </StyledTopestDiv>
  );
};

export default Order;
