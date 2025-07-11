import { OrderInfoContext } from '@/contexts/OrderInfoContext';
import { useEffect, useState, type ReactNode } from 'react';
import useValidateOrderForm from '@/hooks/useValidateOrderForm';
import { useFieldArray, useForm } from 'react-hook-form';

interface RecipientForm {
  recipientName: string;
  phoneNumber: string;
}

type FormValues = {
  recipientInfo: RecipientForm[];
};

export const OrderInfoProvider = ({ children }: { children: ReactNode }) => {
  const [isFirstTry, setIsFirstTry] = useState(true);
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  // recipientForm 수정 중..
  const [id, setId] = useState(0);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState('0');
  const [setTargetMessage, messageError] = useValidateOrderForm('message');
  const [setTargetSenderName, senderNameError] = useValidateOrderForm('name');
  const [setTargetRecipientName, recipientNameError] = useValidateOrderForm('name');
  const [recipientNameErrorArr, setRecipientNameErrorArr] = useState<string[]>([]);
  const [setTargetPhoneNumber, phoneNumberError] = useValidateOrderForm('phoneNumber');
  const [phoneNumberErrorArr, setPhoneNumberErrorArr] = useState<string[]>([]);
  const [setTargetAmount, amountError] = useValidateOrderForm('amount');

  const form = useForm<FormValues>({
    defaultValues: {
      recipientInfo: [{ recipientName: '', phoneNumber: '' }],
    },
  });

  const {
    fields: recipientFields,
    append: appendRecipient,
    remove: removeRecipient,
  } = useFieldArray({
    control: form.control,
    name: 'recipientInfo',
  });

  useEffect(() => {
    setRecipientNameErrorArr([...recipientNameErrorArr, recipientNameError]);
    setPhoneNumberErrorArr([...phoneNumberErrorArr, phoneNumberError]);
  }, [recipientNameError, phoneNumberError, recipientNameErrorArr, phoneNumberErrorArr]);

  return (
    <OrderInfoContext.Provider
      value={{
        isFirstTry: isFirstTry,
        setIsFirstTry: setIsFirstTry,
        form: {
          register: form.register,
          handleSubmit: form.handleSubmit,
          getValues: form.getValues,
        },
        message: message,
        setMessage: setMessage,
        sender: { name: senderName, setName: setSenderName },
        recipient: {
          fields: recipientFields,
          append: appendRecipient,
          remove: removeRecipient,
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
          recipientNameErrorArr: recipientNameErrorArr,
          setTargetPhoneNumber: setTargetPhoneNumber,
          phoneNumberErrorArr: phoneNumberErrorArr,
          setTargetAmount: setTargetAmount,
          amountError: amountError,
        },
      }}
    >
      {children}
    </OrderInfoContext.Provider>
  );
};
