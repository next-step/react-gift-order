import { OrderInfoContext } from '@/contexts/OrderInfoContext';
import { useContext } from 'react';

const useOrderInfo = () => {
  const context = useContext(OrderInfoContext);

  if (!context) {
    throw Error('OrderInfoContext is null.');
  } else {
    return context;
  }
};

export default useOrderInfo;
