import { useParams } from 'react-router-dom';
import { orders } from '@/data/orders';
import { rankingItems} from '@/data/ranking';
import { useOrderForm } from '@/hooks/useOrderForm';
import OrderTemplate from './template';

const Order = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId 
    ? rankingItems.find(item => item.id === parseInt(productId)) 
    : undefined;

  const {
    cardState,
    formData,
    errors,
    selectedCard,
    handleCardClick,
    handleMessageChange,
    handleSenderNameChange,
    handleOrder,
  } = useOrderForm({ product });

  return (
    <OrderTemplate
      orders={orders}
      cardState={cardState}
      selectedCard={selectedCard}
      onCardClick={handleCardClick}
      onMessageChange={handleMessageChange}
      formData={formData}
      onSenderNameChange={handleSenderNameChange}
      errors={errors}
      product={product}
      onSubmit={handleOrder}
    />
  );
};

export default Order;
