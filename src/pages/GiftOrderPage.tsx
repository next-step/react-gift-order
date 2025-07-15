import Divider from '@components/common/Divider';
import CardSelector from '@components/GifrOrderPage/CardSelector';
import OrderButton from '@components/GifrOrderPage/OrderButton';
import ProductSummary from '@components/GifrOrderPage/ProductSummary';
import ReceiveForm from '@components/GifrOrderPage/ReceiveForm';
import SenderForm from '@components/GifrOrderPage/SenderForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { type OrderFormData, orderSchema } from '@schemas/orderSchema';
import cardTemplate from '@data/cardTemplate.json';

import {
  useForm,
  type FieldErrors,
  type SubmitHandler,
  type UseFormRegister,
  type UseFormSetValue,
} from 'react-hook-form';
import ReceiveList from '@components/GifrOrderPage/ReceiveList';
import ReceiveModal from '@components/GifrOrderPage/ReceiveModal';
import { useModal } from '@contexts/ModalContext';

export interface FormSectionProps {
  register: UseFormRegister<OrderFormData>;
  errors: FieldErrors<OrderFormData>;
  setValue?: UseFormSetValue<OrderFormData>;
}
const defaultCard = cardTemplate[0];

const mockItems = {
  id: 123,
  name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
  imageURL:
    'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  price: {
    basicPrice: 29000,
    discountRate: 0,
    sellingPrice: 29000,
  },
  brandInfo: {
    id: 2088,
    name: 'BBQ',
    imageURL:
      'https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png',
  },
};

const GiftOrderPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: { message: defaultCard.defaultTextMessage, quantity: 1 },
  });

  const onSubmit: SubmitHandler<OrderFormData> = (data) => {
    console.log(data);
  };
  const quantity = watch('quantity') ?? 1;
  const totalPrice = mockItems.price.basicPrice * quantity;

  const { isReceiveModalOpen, openReceiveModal, closeReceiveModal } =
    useModal();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardSelector register={register} errors={errors} setValue={setValue} />
        <Divider />
        <SenderForm register={register} errors={errors} />
        <Divider />
        <ReceiveForm register={register} errors={errors} />
        <Divider />
        <ReceiveList onOpen={openReceiveModal} />
        <Divider />
        <ProductSummary />
        <OrderButton price={totalPrice} />
      </form>
      {isReceiveModalOpen && <ReceiveModal onClose={closeReceiveModal} />}
    </>
  );
};

export default GiftOrderPage;
