import Layout from '@/components/layout/Layout';
import NavigationBar from '@/components/navigation-bar/NavigationBar';

import CardSelect from '@/components/order/CardSelect';
import GiftSender from '@/components/order/DeliverInfo';
const Order = () => {
  return (
    <Layout>
      <NavigationBar />
      <CardSelect />
      <GiftSender />
    </Layout>
  );
};

export default Order;
