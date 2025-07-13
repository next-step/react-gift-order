import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import NavigationBar from '@/components/navigation-bar/NavigationBar';
import CardSelect from '@/components/Order/CardSelect';
import GiftSender from '@/components/Order/OrderInfo';

const Order = () => {
  const [templateMessage, setTemplateMessage] = useState('');

  return (
    <Layout>
      <NavigationBar />
      <CardSelect setTemplateMessage={setTemplateMessage} />
      <GiftSender templateMessage={templateMessage} />
    </Layout>
  );
};

export default Order;
