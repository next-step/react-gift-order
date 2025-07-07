import NavigationBar from '@/common/NavigationBar';
import GiftCardSelector from '@/components/ProductOrder/GiftCardSelector';
import styled from '@emotion/styled';

const ProductOrder = () => {
  return (
    <Layout>
      <Content>
        <NavigationBar />
        <GiftCardSelector />
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
  gap: ${({ theme }) => theme.spacing.spacing2};
`;

const Content = styled.div`
  width: 100%;
  max-width: 720px;
`;
