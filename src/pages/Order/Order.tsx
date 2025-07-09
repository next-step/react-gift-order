import { useLocation, useParams } from 'react-router-dom';
import { OrderContainer } from '@/styles/Order/Order.styles';
import OrderBtn from '@/components/OrderBtn';
import Cards from '@/pages/Order/Cards';
import Sender from '@/pages/Order/Sender';
import Reciever from '@/pages/Order/Reciever';
import ItemInfo from '@/pages/Order/ItemInfo';
import { mockItemList } from '@/mocks/mockItem';
import useOrder from '@/hooks/useOrder';

function Order() {
  const location = useLocation();
  const { orderId } = useParams();
  const parsedItemId = Number(orderId);
  const item = location.state?.item || mockItemList.find((i) => i.id === parsedItemId);
  const order = useOrder(item);

  if (!item) return <div>상품 정보를 찾을 수 없습니다.</div>;

  const {
    currentId,
    currentOrder,
    text,
    count,
    cost,
    errors,
    handleTextChange,
    handleThumbClick,
    handleSenderChange,
    handleCountChange,
    handleRecieverNameChange,
    handleRecieverPhoneChange,
    validate,
    SubmitOrder,
  } = order;

  return (
    <OrderContainer>
      <Cards
        currentId={currentId}
        currentOrder={currentOrder}
        text={text}
        errors={errors}
        handleTextChange={handleTextChange}
        handleThumbClick={handleThumbClick}
      />
      <Sender errors={errors} handleSenderChange={handleSenderChange} />
      <Reciever
        count={count}
        errors={errors}
        handleCountChange={handleCountChange}
        handleRecieverNameChange={handleRecieverNameChange}
        handleRecieverPhoneChange={handleRecieverPhoneChange}
      />
      <ItemInfo item={item} />
      <OrderBtn cost={cost} handlecheckInput={validate} SubmitOrder={SubmitOrder} />
    </OrderContainer>
  );
}

export default Order;
