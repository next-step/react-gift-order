import { useForm, FormProvider } from 'react-hook-form';
import NavigationBar from '@/common/NavigationBar';
import GiftCardSelector from '@/components/ProductOrder/GiftCardSelector';
import SenderInfoSection from '@/components/ProductOrder/SenderInfoSection';
import ReceiverInfoSection from '@/components/ProductOrder/ReceiverInfo/ReceiverInfoSection';
import ProductInfo from '@/components/giftHome/GiftThemes/ProductInfo';
import OrderBtn from '@/components/ProductOrder/OrderBtn';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';

interface OrderFormInputs {
  senderName: string;
  receiverName: string;
  receiverPhone: string;
  quantity: number;
}

const ProductOrder = () => {
  const location = useLocation();
  const { imageURL, name, price, brandInfo } = location.state || {};

  const methods = useForm<OrderFormInputs>({
    defaultValues: {
      senderName: '',
      receiverName: '',
      receiverPhone: '',
      quantity: 1,
    },
  });

  const { handleSubmit, setError } = methods;

  const validatePhone = (phone: string): boolean => /^010\d{8}$/.test(phone);

  const onSubmit = (data: OrderFormInputs) => {
    let hasError = false;

    if (!validatePhone(data.receiverPhone)) {
      setError('receiverPhone', { message: '전화번호를 입력해주세요.' });
      hasError = true;
    }

    if (!hasError) {
      console.log('주문 처리', data);
    }
  };

  return (
    <FormProvider {...methods}>
      <Layout>
        <Content>
          <NavigationBar />
          <GiftCardSelector />
          <SenderInfoSection />
          <ReceiverInfoSection />
          <ProductInfo
            imageURL={imageURL}
            name={name}
            price={price}
            brandInfo={brandInfo}
          />
          <OrderBtn price={price.basicPrice} onClick={handleSubmit(onSubmit)} />
        </Content>
      </Layout>
    </FormProvider>
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
