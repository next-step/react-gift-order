import { useForm, useFieldArray } from 'react-hook-form';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { OrderContainer } from '@/styles/Order/Order.styles';
import OrderBtn from '@/components/OrderBtn';
import Cards from '@/pages/Order/Cards';
import Sender from '@/pages/Order/Sender';
import Reciever from '@/pages/Order/Reciever/Reciever';
import ItemInfo from '@/pages/Order/ItemInfo';
import { mockItemList } from '@/mocks/mockItem';
import type { ordersType } from '@/mocks/mockorder';
import { cards } from '@/mocks/mockorder';

export type RecieverType = {
  name: string;
  phone: string;
  count: number;
};
export type FormValues = {
  currentCardId: number;
  currentOrder: ordersType | undefined;
  text: string;
  sender: string;
  reciever: RecieverType[];
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
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      currentCardId: 904,
      currentOrder: cards.find((card) => card.id === 0),
      text: cards[0].defaultTextMessage,
      sender: '',
      reciever: [],
      count: 0,
      cost: 0,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'reciever',
  });

  const handleRecieverUpdate = (newList: RecieverType[]) => {
    const totalCount = newList.reduce((sum, r) => sum + (r.count || 0), 0);
    setValue('count', totalCount);
    setValue('cost', totalCount * item.price.basicPrice);
  };

  const currentCardId = watch('currentCardId');
  const cost = watch('cost');

  if (!item) return <div>상품 정보를 찾을 수 없습니다.</div>;

  return (
    <OrderContainer
      onSubmit={handleSubmit(
        (data) => {
          alert(
            `주문이 완료되었습니다.\n상품명: ${item.name}\n구매 수량: ${data.count}\n발신자 이름: ${data.sender}\n메시지: ${data.text}`,
          );
          navigate('/');
        },
        (errors) => {
          alert(`폼 에러 ${errors}`);
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
      <Reciever
        recievers={fields}
        append={append}
        remove={remove}
        onUpdate={handleRecieverUpdate}
      />
      <ItemInfo item={item} />
      <OrderBtn cost={cost} />
    </OrderContainer>
  );
}

export default Order;
