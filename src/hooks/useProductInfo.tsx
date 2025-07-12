import { ProductInfoContext } from '@/contexts/ProductInfoContext';
import { useContext } from 'react';

const useProductInfo = () => {
  const context = useContext(ProductInfoContext);

  if (!context) {
    throw Error('OrderInfoContext is null.');
  } else {
    return context;
  }
};

export default useProductInfo;
