import NavigationBar from '@/common/NavigationBar';
import GiftCardSelector from '@/components/ProductOrder/GiftCardSelector';
import SenderInfoSection from '@/components/ProductOrder/SenderInfoSection';
import ReceiverInfoSection from '@/components/ProductOrder/ReceiverInfoSection';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import ProductInfo from '@/components/giftHome/GiftThemes/ProductInfo';
import OrderBtn from '@/components/ProductOrder/OrderBtn';

const ProductOrder = () => {
  const location = useLocation();
  const { imageURL, name, price, brandInfo } = location.state || {};
  return (
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
        <OrderBtn price={price.basicPrice} onClick={() => {}} />
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
