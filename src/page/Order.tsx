import OrderCheck from '@/component/OrderCheck';
import PresentCardSelector from '@/component/PresentCardSelector';
import Receiver from '@/component/Receiver';
import Sender from '@/component/Sender';
import useInput from '@/hook/useInput';
import { DefaultDiv, EmptyDivGray8h } from '@/styles/Common.styled';
import { validateName, validatePhone, validateQuantity } from '@/utils/validateInput';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Order = () => {
  // Sender input

  const senderNameInput = useInput(validateName);

  // Receiver input
  const recipientNameInput = useInput(validateName);
  const recipientPhoneInput = useInput(validatePhone);
  const quantityInput = useInput(validateQuantity, '1');


    const location = useLocation();

    interface ProductItem {
    id: number;
    name: string;
    imageURL: string;
    price: {
      basicPrice: number;
      discountRate: number;
      sellingPrice: number;
    };
    brandInfo: {
      id: number;
      name: string;
      imageURL: string;
    };
  }

  const { item } = location.state as { item: ProductItem };

  const handleOrder = () => {
    senderNameInput.onBlur();
    recipientNameInput.onBlur();
    recipientPhoneInput.onBlur();
    quantityInput.onBlur();

    const isValid =
      !senderNameInput.error &&
      !recipientNameInput.error &&
      !recipientPhoneInput.error &&
      !quantityInput.error;

    if (isValid) {
      alert(`주문이 완료되었습니다. 
        상품명:${item.name} 
        구매수량: ${quantityInput.value}
        발신자 이름: ${senderNameInput.value}
        메세지: ${cardMessage}
        `
       );
    }
  };

  const [orderMessage, setOrderMessage] = useState('');
  const [cardMessage, setCardMessage] = useState('축하해요.');

  return (
    <DefaultDiv>
      <PresentCardSelector cardMessage = {cardMessage} setCardMessage = {setCardMessage}/>
      <EmptyDivGray8h />

      <Sender {...senderNameInput} />

      <EmptyDivGray8h />
      <Receiver
        nameInput={recipientNameInput}
        phoneInput={recipientPhoneInput}
        quantityInput={quantityInput}
      />

      <EmptyDivGray8h />
      <OrderCheck onOrder={handleOrder} message={orderMessage} quantity={Number(quantityInput.value)} />
    </DefaultDiv>
  );
};

export default Order;