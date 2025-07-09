import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Container, Title, Box, Image, Label, ProductName, ProductBrand, Price, PriceName, ProductPrice } from './styles';
import { FixedButton, Button } from '@/components/OrderForm/styles';
import OrderForm from '@/components/OrderForm';
import MessageCard from '@/components/MessageCard';
import { mockItem } from '@/components/GiftRanking/mockItem';
import { ORDER_SUCCESS_MESSAGE, formatOrderButtonText } from '@/components/OrderForm/constants';
import type { IFormData } from '@/types/order.d';

function OrderPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = { ...mockItem, id: parseInt(productId || '1') };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: {
      senderName: '',
      receiverName: '',
      receiverPhone: '',
      quantity: 1,
      message: '',
    },
    mode: 'onChange',
  });

  const quantity = watch('quantity');

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    alert(
      ORDER_SUCCESS_MESSAGE(
        product.name,
        data.quantity,
        data.senderName,
        data.message,
      ),
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MessageCard register={register} setValue={setValue} />
      <OrderForm register={register} errors={errors} watch={watch} productPrice={product.price} />
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
          {formatOrderButtonText(quantity * product.price)}
        </Button>
      </FixedButton>
    </form>
  );
}

export default OrderPage;
