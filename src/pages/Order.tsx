import Navbar from '@/components/navbar/Navbar';
import { PaddingLg, PaddingSm, PaddingGraySm, PaddingMd } from '../components/common/Padding';
import CardMessage from '@/components/common/cardmessage/CardMessage';
import SenderForm from '@/components/order/senderform/SenderForm';
import ProductInfo from '@/components/order/ProductInfo';
import OrderBtn from '@/components/order/OrderBtn';
import { useParams } from 'react-router-dom';
import { allProducts } from '@/mocks/product';

import CardSelector from './../components/order/CardSelector';
import ReceiverModal from '@/components/order/receivermodal/ReceiverModal';
import { useForm } from 'react-hook-form';
import type { OrderFormData } from '@/components/order/receiverlist/types';
import ReceiverList from '@/components/order/receiverlist/ReceiverList';
import { useState } from 'react';
const Order = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm<OrderFormData>({
    defaultValues: {
      senderName: '',
      cardMessage: '',
      receivers: [],
    },
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { productId } = useParams();
  const matchedProducts = allProducts.filter((item) => item.id === Number(productId));

  const product = matchedProducts[0];
  const productPrice = product.price.basicPrice;
  const receivers = watch('receivers');
  const receiversTotalQuantity = receivers.reduce((sum, receiver) => sum + receiver.quantity, 0);
  const totalPrice = productPrice * receiversTotalQuantity;
  const handleClickOrderBtn = () => {};

  return (
    <div>
      <Navbar />
      <PaddingSm />
      <CardSelector />
      <PaddingLg />
      <CardMessage register={register} error={errors.cardMessage?.message} />
      <PaddingMd />
      <PaddingGraySm />
      <SenderForm register={register} error={errors.senderName?.message} />
      <PaddingGraySm />
      <ReceiverList receivers={receivers} setIsVisible={setIsModalVisible} />
      <PaddingGraySm />
      <ProductInfo product={product} />
      <OrderBtn totalPrice={totalPrice} onClick={handleClickOrderBtn} />
      {isModalVisible && (
        <ReceiverModal
          setIsVisible={setIsModalVisible}
          handleSubmit={handleSubmit}
          register={register}
          control={control}
          error={errors.receivers}
        />
      )}
    </div>
  );
};

export default Order;
