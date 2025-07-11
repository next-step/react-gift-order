import CardSelector from '@components/GifrOrderPage/CardSelector';
import OrderButton from '@components/GifrOrderPage/OrderButton';
import ProductSummary from '@components/GifrOrderPage/ProductSummary';
import ReceiveForm from '@components/GifrOrderPage/ReceiveForm';
import SenderForm from '@components/GifrOrderPage/SenderForm';

const GiftOrderPage = () => {
  return (
    <>
      <CardSelector />
      <SenderForm />
      <ReceiveForm />
      <ProductSummary />
      <OrderButton />
    </>
  );
};

export default GiftOrderPage;
