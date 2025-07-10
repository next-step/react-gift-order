import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Container, Title, Box, Image, Label, ProductName, ProductBrand, Price, PriceName, ProductPrice } from './styles';
import { FixedButton, Button } from '@/components/OrderForm/styles';
import OrderForm from '@/components/OrderForm';
import MessageCard from '@/components/MessageCard';
import ReceiverSelectBox from '@/components/RecieverSelectBox';
import ReceiverModal from '@/components/ReceiverModal';
import { mockItem } from '@/components/GiftRanking/mockItem';
import { ORDER_SUCCESS_MESSAGE, formatOrderButtonText } from '@/components/OrderForm/constants';
import type { IFormData } from '@/types/order.d';

interface ReceiverFormInput {
  name: string;
  phone: string;
  quantity: number;
}

function OrderPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = { ...mockItem, id: parseInt(productId || '1') };

  const [isReceiverModalOpen, setIsReceiverModalOpen] = useState(false);
  const [receivers, setReceivers] = useState<ReceiverFormInput[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: {
      senderName: '',
      message: '',
    },
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    if (receivers.length === 0) {
      alert('받는 사람을 1명 이상 추가해주세요.');
      return;
    }

    const totalQuantity = receivers.reduce((sum, r) => sum + r.quantity, 0);

    alert(
      ORDER_SUCCESS_MESSAGE(
        product.name,
        totalQuantity,
        data.senderName,
        data.message,
      ),
    );
    console.log('Final Order Data:', { ...data, receivers });
  };

  const handleReceiverModalComplete = (selectedReceivers: ReceiverFormInput[]) => {
    setReceivers(selectedReceivers);
  };

  const totalQuantity = receivers.reduce((sum, r) => sum + r.quantity, 0);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MessageCard register={register} setValue={setValue} />
      <OrderForm register={register} errors={errors} productPrice={product.price} />
      <ReceiverSelectBox onAddClick={() => setIsReceiverModalOpen(true)} recipients={receivers} />
      <ReceiverModal
        isOpen={isReceiverModalOpen}
        onClose={() => setIsReceiverModalOpen(false)}
        onComplete={handleReceiverModalComplete}
        initialReceivers={receivers}
      />
      <Container>
        <Title>주문 정보</Title>
        <Box>
          <Image src={product.imageURL} alt={product.name} width="100" />
          <Label>
            <ProductName>{product.name}</ProductName>
            <ProductBrand>{product.brand}</ProductBrand>
            <Price>
              <PriceName>상품가</PriceName>
              <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
            </Price>
          </Label>
        </Box>
      </Container>
      <FixedButton>
        <Button type="submit">
          {formatOrderButtonText(totalQuantity * product.price)}
        </Button>
      </FixedButton>
    </form>
  );
}

export default OrderPage;
