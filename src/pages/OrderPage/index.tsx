import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Title, Box, Image, Label, ProductName, ProductBrand, Price, PriceName, ProductPrice } from './styles';
import { FixedButton, Button } from '@/components/SenderForm/styles';
import SenderForm from '@/components/SenderForm';
import MessageCard from '@/components/MessageCard';
import ReceiverSelectBox from '@/components/ReceiverSelectBox';
import ReceiverModal from '@/components/ReceiverModal';
import { mockItem } from '@/components/GiftRanking/mockItem';
import { formatOrderButtonText } from '@/components/SenderForm/constants';
import { ORDER_INFO_TITLE, PRODUCT_PRICE_LABEL, CURRENCY_UNIT } from './constants';
import { useOrderForm } from './useOrderForm';

function OrderPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = { ...mockItem, id: parseInt(productId || '1') };

  const {
    register,
    handleSubmit,
    setValue,
    errors,
    onSubmit,
    receivers,
    handleReceiverModalComplete,
    totalQuantity,
  } = useOrderForm(product);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MessageCard register={register} setValue={setValue} />
      <SenderForm register={register} errors={errors} productPrice={product.price} />
      <ReceiverModal
        onComplete={handleReceiverModalComplete}
        initialReceivers={receivers}
        Trigger={<ReceiverSelectBox recipients={receivers} />}
      />
      <Container>
        <Title>{ORDER_INFO_TITLE}</Title>
        <Box>
          <Image src={product.imageURL} alt={product.name} width="100" />
          <Label>
            <ProductName>{product.name}</ProductName>
            <ProductBrand>{product.brand}</ProductBrand>
            <Price>
              <PriceName>{PRODUCT_PRICE_LABEL}</PriceName>
              <ProductPrice>{product.price.toLocaleString()}{CURRENCY_UNIT}</ProductPrice>
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
