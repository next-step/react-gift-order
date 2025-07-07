import Navbar from "@/components/navbar/Navbar";
import {
  PaddingLg,
  PaddingSm,
  PaddingGraySm,
  PaddingMd,
} from "./../components/padding/Padding";
import CardMessage from '@/components/order/CardMessage';
import SenderForm from '@/components/order/SenderForm';
import ReceiverForm from '@/components/order/ReceiverForm';
import ProductInfo from '@/components/order/ProductInfo';
import OrderBtn from '@/components/order/OrderBtn';
import { useParams } from 'react-router-dom';
import { allProducts } from '@/mocks/product';
import {cardMessageValidatior, nameValidatior, phoneValidator, quantityValidatior } from '@/utils/validators';
import useForm from '@/hooks/useForm';
import CardSelector from './../components/order/CardSelector';
const Order = () => {
  const {productId} = useParams();
  const matchedProducts = allProducts.filter(
    (item) => item.id === Number(productId)
  );

  const product= matchedProducts[0]
  const { values, errors, isValid, handleChange, handleBlur, reset } = useForm({
    cardmessage:{initialValue: "축하해요.", validator: cardMessageValidatior},
    sendername: { initialValue: "", validator: nameValidatior },
    phone: { initialValue: "", validator: phoneValidator },
    receivername: { initialValue: "", validator: nameValidatior },
    quantity: { initialValue: "", validator: quantityValidatior },
  });
  const handleClickOrderBtn = () => {
    if (!isValid) {
      const fields = [
        "cardmessage",
        "sendername",
        "phone",
        "receivername",
        "quantity",
      ];
      fields.forEach((field) => handleBlur(field));
      return;
    
  };
}
  return (
    <div>
      <Navbar />
      <PaddingSm />
     <CardSelector/>
      <PaddingLg />
      <CardMessage
        value={values.cardmessage}
        error={errors.cardmessage}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <PaddingMd />
      <PaddingGraySm />
      <SenderForm
        value={values.sendername}
        error={errors.sendername}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <PaddingGraySm />
      <ReceiverForm
        values={{
          receivername: values.receivername,
          phone: values.phone,
          quantity: values.quantity,
        }}
        errors={{
          receivername: errors.receivername,
          phone: errors.phone,
          quantity: errors.quantity,
        }}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <PaddingGraySm />
      <ProductInfo product={product} />
      <OrderBtn onClick={handleClickOrderBtn} />
    </div>
  );
};

export default Order;
