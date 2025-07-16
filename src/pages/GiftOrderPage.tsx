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
  FormProvider,
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
import { useState } from 'react';

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
  const methods = useForm<MultiOrderFormData>({
    resolver: zodResolver(multiOrderSchema),
    mode: 'onChange',
    defaultValues: {
      message: defaultCard.defaultTextMessage,
      sender: '',
      recipients: [],
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
    trigger,
    getValues,
  } = methods;
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

  const [prevRecipients, setPrevRecipients] = useState<
    MultiOrderFormData['recipients']
  >([]);
  const {
    isReceiveModalOpen,
    openReceiveModal: openModal,
    closeReceiveModal: closeModal,
  } = useModal();

  const openReceiveModal = () => {
    setPrevRecipients(watch('recipients') ?? []);
    openModal();
  };

  const closeReceiveModal = () => {
    setValue('recipients', prevRecipients);
    closeModal();
  };

  const handleComplete = async () => {
    const recipents = getValues('recipients') ?? [];
    if (recipents.length === 0) {
      closeModal();
      return;
    }

    const valid = await trigger('recipients'); //검증이 일어나지 않은 필드도 검사하기 위해 사용
    if (!valid) {
      alert('받는 사람 정보를 정확히 입력해주세요.');
      return;
    }

    const phones = recipents.map((recipent) => recipent.phone);
    const phoneSet = new Set(phones);
    if (phoneSet.size !== phones.length) {
      alert('전화번호가 중복된 사람이 있습니다.');
      return;
    }
    closeModal();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardSelector register={register} errors={errors} setValue={setValue} />
        <Divider />
        <SenderForm register={register} errors={errors} />
        <Divider />
        <ReceiveList onOpen={openReceiveModal} control={control} />
        <Divider />
        <ProductSummary />
        <OrderButton price={totalPrice} />
      </form>
      {isReceiveModalOpen && (
        <FormProvider {...methods}>
          <ReceiveModal
            register={register}
            errors={errors}
            fields={fields}
            append={append}
            remove={remove}
            onClose={closeReceiveModal}
            onComplete={handleComplete}
          />
        </FormProvider>
      )}
    </>
  );
};

export default GiftOrderPage;
