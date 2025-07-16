import Divider from '@components/common/Divider';
import CardSelector from '@components/GifrOrderPage/CardSelector';
import OrderButton from '@components/GifrOrderPage/OrderButton';
import ProductSummary from '@components/GifrOrderPage/ProductSummary';
import SenderForm from '@components/GifrOrderPage/SenderForm';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  type MultiOrderFormData,
  multiOrderSchema,
} from '@schemas/orderSchema';
import cardTemplate from '@data/cardTemplate.json';

import {
  useFieldArray,
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
  register: UseFormRegister<MultiOrderFormData>;
  errors: FieldErrors<MultiOrderFormData>;
  setValue?: UseFormSetValue<MultiOrderFormData>;
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
    control,
    formState: { errors },
  } = useForm<MultiOrderFormData>({
    resolver: zodResolver(multiOrderSchema),
    defaultValues: {
      message: defaultCard.defaultTextMessage,
      sender: '',
      recipients: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'recipients',
  });

  const onSubmit: SubmitHandler<MultiOrderFormData> = (data) => {
    console.log(data);
  };
  const recipients = watch('recipients') ?? [];
  const totalQuantity = recipients.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );
  const totalPrice = mockItems.price.basicPrice * totalQuantity;

  const { isReceiveModalOpen, openReceiveModal, closeReceiveModal } =
    useModal();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardSelector register={register} errors={errors} setValue={setValue} />
        <Divider />
        <SenderForm register={register} errors={errors} />
        <Divider />
        <ReceiveList onOpen={openReceiveModal} fields={fields} />
        <Divider />
        <ProductSummary />
        <OrderButton price={totalPrice} />
      </form>
      {isReceiveModalOpen && (
        <ReceiveModal
          register={register}
          errors={errors}
          fields={fields}
          append={append}
          remove={remove}
          onClose={closeReceiveModal}
        />
      )}
    </>
  );
};

export default GiftOrderPage;
