import { useLocation } from 'react-router-dom';
import { orders } from '@/data/orders';
import { type RankingItem } from '@/data/ranking';
import { useOrderForm } from '@/hooks/useOrderForm';
import OrderTemplate from './template';

const Order = () => {
  const location = useLocation();
  const product = location.state?.product as RankingItem | undefined;

  const {
    cardState,
    formData,
    errors,
    selectedCard,
    handleCardClick,
    handleMessageChange,
    handleSenderNameChange,
    handleReceiverNameChange,
    handleReceiverPhoneChange,
    handleQuantityChange,
    handleOrder,
  } = useOrderForm({ product });

  const formHandlers = {
    onSenderNameChange: handleSenderNameChange,
    onReceiverNameChange: handleReceiverNameChange,
    onReceiverPhoneChange: handleReceiverPhoneChange,
    onQuantityChange: handleQuantityChange,
  };

  return (
    <OrderTemplate
      orders={orders}
      cardState={cardState}
      selectedCard={selectedCard}
      onCardClick={handleCardClick}
      onMessageChange={handleMessageChange}
      formData={formData}
      formHandlers={formHandlers}
      errors={errors}
      product={product}
      onSubmit={handleOrder}
    />
  );
};

export default Order;
