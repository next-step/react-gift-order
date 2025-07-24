import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useOrderForm } from '../hooks/useOrderForm';

import BottomPurchaseBar from '../components/BottomPurchaseBar/BottomPurchaseBar';
import MessageInput from '../components/MessageInput/MessageInput';
import SenderInput from '../components/SenderInput/SenderInput';
import ReceiverInput from '../components/ReceiverInput/ReceiverInput';
import ProductInfo from '../components/ProductInfo/ProductInfo';
import CardSelect from '../components/CardSelect/CardSelect';
import CardPreview from '../components/CardPreview/CardPreview';

import { cards } from '@/data/cards';
import { products } from '@/data/product';

const OrderPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [selectedCardId, setSelectedCardId] = useState<number>(904);
  const selectedCard = cards.find((card) => card.id === selectedCardId);
  const defaultMessage = selectedCard?.defaultTextMessage || '';

  const productId = searchParams.get('productId');
  const product = products.find((p) => p.id === Number(productId));

  const { order, errors, setOrder, validate } = useOrderForm(defaultMessage);
  const totalPrice = product.price.sellingPrice * order.quantity;

  useEffect(() => {
    setOrder({ message: selectedCard?.defaultTextMessage || '' });
  }, [selectedCardId]);

  const handlePurchase = () => {
    if (validate() && product) {
      alert(`주문이 완료되었습니다.
상품명: ${product.name}
구매 수량: ${order.quantity}
발신자 이름: ${order.sender}
메시지: ${order.message}`);
      navigate('/');
    }
  };

  if (!product) return <div>상품 정보를 찾을 수 없습니다.</div>;

  return (
    <div>
      <CardSelect
        selectedCardId={selectedCardId}
        setSelectedCardId={setSelectedCardId}
      />
      <CardPreview selectedCardId={selectedCardId} />
      <MessageInput
        message={order.message}
        setMessage={(msg) => setOrder({ message: msg })}
        error={errors.message}
      />
      <SenderInput
        sender={order.sender}
        setSender={(name) => setOrder({ sender: name })}
        error={errors.sender || ''}
      />
      <ReceiverInput
        receiver={order.receiver}
        setReceiver={(name) => setOrder({ receiver: name })}
        phoneNumber={order.phone}
        setPhoneNumber={(phone) => setOrder({ phone })}
        quantity={order.quantity}
        setQuantity={(quantity) => setOrder({ quantity })}
        errors={{
          receiver: errors.receiver || '',
          phoneNumber: errors.phone || '',
          quantity: errors.quantity || '',
        }}
      />
      <ProductInfo product={product} />
      <BottomPurchaseBar
        handlePurchase={handlePurchase}
        totalPrice={totalPrice}
      />
    </div>
  );
};

export default OrderPage;
