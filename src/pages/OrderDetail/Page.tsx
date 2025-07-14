import { useNavigate, useParams } from 'react-router';
import { OrderForm } from './components/Form';
import { useEffect } from 'react';
import { ROUTE_PATH } from '../Routes';

const OrderDetailPage = () => {
  const { productId = '' } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!productId || isNaN(Number(productId))) {
      navigate(ROUTE_PATH.HOME);
    }
  }, [productId, navigate]);

  return (
    <main>
      <OrderForm productId={productId} />
    </main>
  );
};

export default OrderDetailPage;
