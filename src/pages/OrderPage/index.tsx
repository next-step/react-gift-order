import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Container, Title, Box, Image, Label, ProductName, ProductBrand, Price, PriceName, ProductPrice } from './styles';
import { FixedButton, Button } from '@/components/SenderForm/styles';
import SenderForm from '@/components/SenderForm';
import MessageCard from '@/components/MessageCard';
import ReceiverSelectBox from '@/components/ReceiverSelectBox';
import ReceiverModal from '@/components/ReceiverModal';
import { mockItem } from '@/components/GiftRanking/mockItem';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ORDER_SUCCESS_MESSAGE, formatOrderButtonText, SENDER_NAME_ERROR } from '@/components/SenderForm/constants';
import {
  RECEIVER_REQUIRED_MESSAGE,
  FINAL_ORDER_DATA_LOG,
  ORDER_INFO_TITLE,
  PRODUCT_PRICE_LABEL,
  CURRENCY_UNIT,
} from './constants';

interface ReceiverFormInput {
  name: string;
  phone: string;
  quantity: number;
}

const OrderFormSchema = z.object({
  senderName: z.string().nonempty(SENDER_NAME_ERROR),
  message: z.string().optional(),
});

type OrderFormValues = z.infer<typeof OrderFormSchema>;
type Receivers = ReceiverFormInput[];

function OrderPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = { ...mockItem, id: parseInt(productId || '1') };

  const [isReceiverModalOpen, setIsReceiverModalOpen] = useState(false);
  const [receivers, setReceivers] = useState<Receivers>([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<OrderFormValues>({
    resolver: zodResolver(OrderFormSchema),
    defaultValues: { senderName: '', message: '' },
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<OrderFormValues> = (data) => {
    if (receivers.length === 0) {
      alert(RECEIVER_REQUIRED_MESSAGE);
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
  };

  const handleReceiverModalComplete = (selectedReceivers: ReceiverFormInput[]) => {
    setReceivers(selectedReceivers);
  };

  const totalQuantity = receivers.reduce((sum, r) => sum + r.quantity, 0);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MessageCard register={register} setValue={setValue} />
      <SenderForm register={register} errors={errors} productPrice={product.price} />
      <ReceiverSelectBox onAddClick={() => setIsReceiverModalOpen(true)} recipients={receivers} />
      <ReceiverModal
        isOpen={isReceiverModalOpen}
        onClose={() => setIsReceiverModalOpen(false)}
        onComplete={handleReceiverModalComplete}
        initialReceivers={receivers}
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
