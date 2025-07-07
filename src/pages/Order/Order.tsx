import { useLocation } from 'react-router-dom';
import { OrderContainer } from '@/styles/Order/Order.styles';
import OrderBtn from '@/components/OrderBtn';
import Cards from '@/pages/Order/Cards';
import Sender from '@/pages/Order/Sender';
import Reciever from '@/pages/Order/Reciever';
import ItemInfo from '@/pages/Order/ItemInfo';
import type { mockItemType } from '@/mocks/mockItem';
import useOrder from '@/hooks/useOrder';

function Order() {
  const location = useLocation();
  const item: mockItemType = location.state?.item;
  const {
    currentId,
    currentOrder,
    text,
    sender,
    reciever,
    count,
    cost,
    handleTextChange,
    handleThumbClick,
    handleSenderChange,
    handleCountChange,
    handleRecieverNameChange,
    handleRecieverPhoneChange,
    handlecheckInput,
  } = useOrder(item);

  return (
    <OrderContainer>
      <Cards
        currentId={currentId}
        currentOrder={currentOrder}
        text={text}
        handleTextChange={handleTextChange}
        handleThumbClick={handleThumbClick}
      />
      <Sender sender={sender} handleSenderChange={handleSenderChange} />
      <Reciever
        count={count}
        handleCountChange={handleCountChange}
        handleRecieverNameChange={handleRecieverNameChange}
        handleRecieverPhoneChange={handleRecieverPhoneChange}
      />
      <ItemInfo item={item} />
      <OrderBtn cost={cost} handlecheckInput={handlecheckInput} />
    </OrderContainer>
  );
}

export default Order;
