import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useOrderForm } from '../hooks/useOrderForm';

import CardSelect from '../components/CardSelect/CardSelect';
import CardPreview from '../components/CardPreview/CardPreview';
import MessageInput from '../components/MessageInput/MessageInput';
import SenderInput from '../components/SenderInput/SenderInput';
import ProductInfo from '../components/ProductInfo/ProductInfo';
import BottomPurchaseBar from '../components/BottomPurchaseBar/BottomPurchaseBar';
import ReceiverInput from '../components/ReceiverInput/ReceiverInput';

import { cards } from '@/data/cards';
import { products } from '@/data/product';

const OrderPage = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('productId');
  const product = products.find((p) => p.id === Number(productId));

  const [selectedCardId, setSelectedCardId] = useState<number>(904);
  const selectedCard = cards.find((card) => card.id === selectedCardId);
  const defaultMessage = selectedCard?.defaultTextMessage ?? '';

  const {
    register,
    onSubmit,
    errors,
    totalPrice,
    fields,
    append,
    remove,
    getValues,
  } = useOrderForm({
    defaultMessage,
    productName: product?.name ?? '',
    sellingPrice: product?.price.sellingPrice ?? 0,
    selectedCardId,
    selectedCardMessage: selectedCard?.defaultTextMessage ?? '',
  });

  if (!product) return <div>상품 정보를 찾을 수 없습니다.</div>;

  return (
    <form onSubmit={onSubmit}>
      <CardSelect
        selectedCardId={selectedCardId}
        setSelectedCardId={setSelectedCardId}
      />
      <CardPreview selectedCardId={selectedCardId} />

      <MessageInput
        register={register('message', { required: '메시지를 입력해주세요.' })}
        error={errors.message?.message}
      />

      <SenderInput
        register={register('sender', {
          required: '보내는 사람 이름을 입력해주세요.',
        })}
        error={errors.sender?.message}
      />

      {fields.map((field, index) => (
        <ReceiverInput
          key={field.id}
          index={index}
          register={register}
          error={errors.receivers?.[index]}
          onRemove={() => remove(index)}
          getValues={getValues}
        />
      ))}

      <button
        type="button"
        onClick={() => append({ receiver: '', phone: '', quantity: 1 })}
      >
        받는 사람 추가
      </button>

      <ProductInfo product={product} />
      <BottomPurchaseBar handlePurchase={onSubmit} totalPrice={totalPrice} />
    </form>
  );
};

export default OrderPage;
