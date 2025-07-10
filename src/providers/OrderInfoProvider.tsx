import { OrderInfoContext } from '@/contexts/OrderInfoContext';
import { useState, type ReactNode } from 'react';
import useValidateOrderForm from '@/hooks/useValidateOrderForm';

export const OrderInfoProvider = ({ children }: { children: ReactNode }) => {
  const [isFirstTry, setIsFirstTry] = useState(true);
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [id, setId] = useState(0);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState('0');
  const [setTargetMessage, messageError] = useValidateOrderForm('message');
  const [setTargetSenderName, senderNameError] = useValidateOrderForm('name');
  const [setTargetRecipientName, recipientNameError] = useValidateOrderForm('name');
  const [setTargetPhoneNumber, phoneNumberError] = useValidateOrderForm('phoneNumber');
  const [setTargetAmount, amountError] = useValidateOrderForm('amount');

  return (
    <OrderInfoContext.Provider
      value={{
        isFirstTry: isFirstTry,
        setIsFirstTry: setIsFirstTry,
        message: message,
        setMessage: setMessage,
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
          name: productName,
          setName: setProductName,
          price: price,
          setPrice: setPrice,
          amount: amount,
          setAmount: setAmount,
        },
        error: {
          setTargetMessage: setTargetMessage,
          messageError: messageError,
          setTargetSenderName: setTargetSenderName,
          senderNameError: senderNameError,
          setTargetRecipientName: setTargetRecipientName,
          recipientNameError: recipientNameError,
          setTargetPhoneNumber: setTargetPhoneNumber,
          phoneNumberError: phoneNumberError,
          setTargetAmount: setTargetAmount,
          amountError: amountError,
        },
      }}
    >
      {children}
    </OrderInfoContext.Provider>
  );
};
