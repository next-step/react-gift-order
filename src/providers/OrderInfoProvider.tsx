import { OrderInfoContext } from '@/contexts/OrderInfoContext';
import { useState, type ReactNode } from 'react';

export const OrderInfoProvider = ({ children }: { children: ReactNode }) => {
  const [senderName, setSenderName] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [id, setId] = useState(0);
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);

  return (
    <OrderInfoContext.Provider
      value={{
        sender: { name: senderName, setName: setSenderName },
        recipient: {
          name: recipientName,
          setName: setRecipientName,
          phoneNumber: phoneNumber,
          setPhoneNumber: setPhoneNumber,
        },
        product: {
          id: id,
          setId: setId,
          price: price,
          setPrice: setPrice,
          amount: amount,
          setAmount: setAmount,
        },
      }}
    >
      {children}
    </OrderInfoContext.Provider>
  );
};
