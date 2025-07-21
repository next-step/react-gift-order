import Order from "./OrderConfirmComponent/OrderButton";

interface OrderProps {
  quantity: string;
  totalPrice: number;
  productName: string;
  sender: string;
  message: string;
}

const OrderConfirmSection = ({
  quantity,
  totalPrice,
  productName,
  sender,
  message,
}: OrderProps) => {
  return (
    <Order
      quantity={quantity}
      totalPrice={totalPrice}
      productName={productName}
      sender={sender}
      message={message}
    />
  );
};

export default OrderConfirmSection;
