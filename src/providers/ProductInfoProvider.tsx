import { ProductInfoContext } from '@/contexts/ProductInfoContext';
import React, { useState } from 'react';

export const ProductInfoProvider = ({ children }: { children: React.ReactNode }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState('');

  return (
    <ProductInfoContext.Provider
      value={{
        id,
        setId,
        name,
        setName,
        price,
        setPrice,
        brand,
        setBrand,
      }}
    >
      {children}
    </ProductInfoContext.Provider>
  );
};
