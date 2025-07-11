import { useForm } from 'react-hook-form';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { OrderContainer } from '@/styles/Order/Order.styles';
import OrderBtn from '@/components/OrderBtn';
import Cards from '@/pages/Order/Cards';
import Sender from '@/pages/Order/Sender';
import Reciever from '@/pages/Order/Reciever';
import ItemInfo from '@/pages/Order/ItemInfo';
import { mockItemList } from '@/mocks/mockItem';
// import useOrder from '@/hooks/useOrder';
import type { ordersType } from '@/mocks/mockorder';
import { cards } from '@/mocks/mockorder';

export type FormValues = {
  currentCardId: number;
  currentOrder: ordersType | undefined;
  text: string;
  sender: string;
  reciever: {
    name: string;
    phone: string;
  };
  count: number;
  cost: number;
};

function Order() {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderId } = useParams();
  const parsedItemId = Number(orderId);
  const item = location.state?.item || mockItemList.find((i) => i.id === parsedItemId);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      currentCardId: 904, //cards 의 첫 id
      currentOrder: cards.find((card) => card.id === 0),
      text: cards[0].defaultTextMessage,
      sender: '',
      reciever: {
        name: '',
        phone: '',
      },
      count: 0,
      cost: 0,
    },
  });

  const currentCardId = watch('currentCardId');

  if (!item) return <div>상품 정보를 찾을 수 없습니다.</div>;

  return (
    <OrderContainer
      onSubmit={handleSubmit(
        (data) => {
          console.log('주문 데이터:', data);
          alert(`주문이 완료되었습니다.
                상품명: ${item.name}
구매 수량: ${data.count}
발신자 이름: ${data.sender}
메시지: ${data.text}`);
          navigate('/');
        },
        (errors) => {
          console.log('폼 에러:', errors);
        },
      )}
    >
      <Cards
        currentOrder={cards.find((card) => card.id === currentCardId)}
        register={register}
        setValue={setValue}
        currentCardId={currentCardId}
        errors={errors}
      />
      <Sender register={register} errors={errors} />
      <Reciever register={register} errors={errors} />
      <ItemInfo item={item} />
      <OrderBtn cost={item.price.basicPrice} />
    </OrderContainer>
  );
}

export default Order;
