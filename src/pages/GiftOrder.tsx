import styled from '@emotion/styled';
import { TopNavBar } from '@/components/TopNavBar';
import { GiftMessageCardTemplates } from '@/components/gift_order_page/GiftMessageCardTemplates';
import { Spacing } from '@/components/gift_order_page/Spacing';
import { SenderInput } from '@/components/gift_order_page/SenderInput';
import { ProductInfo } from '@/components/gift_order_page/ProductInfo';
import { OrderButton } from '@/components/gift_order_page/OrderButton';
import { OrderInfoProvider } from '@/providers/OrderInfoProvider';
import { RecipientListTable } from '@/components/gift_order_page/RecipientListTable';

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
    <OrderInfoProvider>
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
    </OrderInfoProvider>
  );
};

export default GiftOrder;
