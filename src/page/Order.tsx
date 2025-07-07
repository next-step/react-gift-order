import OrderCheck from '@/component/OrderCheck';
import PresentCardSelector from '@/component/PresentCardselector';
import Receiver from '@/component/Receiver';
import Sender from '@/component/sender';
import useInput from '@/hook/useInput';
import { DefaultDiv, EmptyDivGray8h } from '@/styles/Common.styled';
import { validateName, validatePhone, validateQuantity } from '@/utils/validateInput';
import { useState } from 'react';

const Order = () => {
  // Sender input
  const senderNameInput = useInput(validateName);

  // Receiver input
  const recipientNameInput = useInput(validateName);
  const recipientPhoneInput = useInput(validatePhone);
  const quantityInput = useInput(validateQuantity, '1');

  const handleOrder = () => {
    senderNameInput.onBlur();
    recipientNameInput.onBlur();
    recipientPhoneInput.onBlur();
    quantityInput.onBlur();

    const isValid =
      senderNameInput.isValid &&
      recipientNameInput.isValid &&
      recipientPhoneInput.isValid &&
      quantityInput.isValid;

    if (isValid) {
      alert('축하해요');
    }
  };

  const [orderMessage, setOrderMessage] = useState('');

  return (
    <DefaultDiv>
      <PresentCardSelector />
      <EmptyDivGray8h />

      <Sender {...senderNameInput} />

      <EmptyDivGray8h />
      <Receiver
        nameInput={recipientNameInput}
        phoneInput={recipientPhoneInput}
        quantityInput={quantityInput}
      />

      <EmptyDivGray8h />
      <OrderCheck onOrder={handleOrder} message={orderMessage} />
    </DefaultDiv>
  );
};

export default Order;