import styled from '@emotion/styled';
import { TopNavBar } from '@/components/TopNavBar';
import { GiftMessageCardTemplates } from '@/components/gift_order_page/GiftMessageCardTemplates';
import { Spacing } from '@/components/gift_order_page/Spacing';
import { SenderInput } from '@/components/gift_order_page/SenderInput';
import { ProductInfo } from '@/components/gift_order_page/ProductInfo';
import { OrderButton } from '@/components/gift_order_page/OrderButton';
import { RecipientListTable } from '@/components/gift_order_page/RecipientListTable';
import { OrderInfoFormProvider } from '@/providers/OrderInfoFormProvider';
import { ProductInfoProvider } from '@/providers/ProductInfoProvider';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 100vh;
  max-width: 720px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.gray200};
`;

const GiftOrder = () => {
  return (
    <OrderInfoFormProvider>
      <ProductInfoProvider>
        <Container>
          <TopNavBar title="선물하기" mainPath="/" />
          <GiftMessageCardTemplates />
          <Spacing />
          <SenderInput />
          <Spacing />
          <RecipientListTable />
          <Spacing />
          <ProductInfo />
          <OrderButton />
        </Container>
      </ProductInfoProvider>
    </OrderInfoFormProvider>
  );
};

export default GiftOrder;
