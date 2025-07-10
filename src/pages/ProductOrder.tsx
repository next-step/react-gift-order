import NavigationBar from '@/common/NavigationBar';
import GiftCardSelector from '@/components/ProductOrder/GiftCardSelector';
import SenderInfoSection from '@/components/ProductOrder/SenderInfoSection';
import ReceiverInfoSection from '@/components/ProductOrder/ReceiverInfo/ReceiverInfoSection';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import ProductInfo from '@/components/giftHome/GiftThemes/ProductInfo';
import OrderBtn from '@/components/ProductOrder/OrderBtn';
import useOrderForm from '@/hooks/useOrderForm';

const ProductOrder = () => {
  const location = useLocation();
  const { imageURL, name, price, brandInfo } = location.state || {};

  const senderName = useOrderForm('');
  const receiverName = useOrderForm('');
  const receiverPhone = useOrderForm('');
  const quantity = useOrderForm(1);

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^010\d{8}$/;
    return phoneRegex.test(phone);
  };

  const handleOrder = () => {
    let hasError = false;

    if (!senderName.value || (senderName.value as string).trim() === '') {
      senderName.setError('이름을 입력해주세요.');
      hasError = true;
    }

    if (!receiverName.value || (receiverName.value as string).trim() === '') {
      receiverName.setError('이름을 입력해주세요.');
      hasError = true;
    }

    if (!receiverPhone.value || (receiverPhone.value as string).trim() === '') {
      receiverPhone.setError('전화번호를 입력해주세요.');
      hasError = true;
    } else if (!validatePhone(receiverPhone.value as string)) {
      receiverPhone.setError('전화번호를 입력해주세요.');
      hasError = true;
    }

    if (!quantity.value || (quantity.value as number) < 1) {
      quantity.setError('구매 수량은 1개 이상이어야 합니다.');
      hasError = true;
    }

    if (!hasError) {
      console.log('주문 처리');
    }
  };

  return (
    <Layout>
      <Content>
        <NavigationBar />
        <GiftCardSelector />
        <SenderInfoSection senderName={senderName} />
        <ReceiverInfoSection
          receiverName={receiverName}
          receiverPhone={receiverPhone}
          quantity={quantity}
        />
        <ProductInfo
          imageURL={imageURL}
          name={name}
          price={price}
          brandInfo={brandInfo}
        />
        <OrderBtn price={price.basicPrice} onClick={handleOrder} />
      </Content>
    </Layout>
  );
};

export default ProductOrder;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 44px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 24px;
`;

const Content = styled.div`
  width: 100%;
  max-width: 720px;
  padding: 0 16px;
`;
