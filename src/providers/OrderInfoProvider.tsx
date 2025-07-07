import { OrderInfoContext } from '@/contexts/OrderInfoContext';
import useValidateAmount from '@/hooks/useValidateAmount';
import useValidateGiftMessage from '@/hooks/useValidateGiftMessage';
import useValidatePhoneNumber from '@/hooks/useValidatePhoneNumber';
import useValidateSenderName from '@/hooks/useValidateSenderName';
import { useState, type ReactNode } from 'react';

export const OrderInfoProvider = ({ children }: { children: ReactNode }) => {
  const [isFirstTry, setIsFirstTry] = useState(true);
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [id, setId] = useState(0);
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [setTargetMessage, messageError] = useValidateGiftMessage();
  const [setTargetSenderName, senderNameError] = useValidateSenderName();
  const [setTargetRecipientName, recipientNameError] = useValidateSenderName();
  const [setTargetPhoneNumber, phoneNumberError] = useValidatePhoneNumber();
  const [setTargetAmount, amountError] = useValidateAmount();

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
