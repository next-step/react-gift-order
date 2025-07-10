import { OrderProvider } from "@/contexts/orderContext";
import type React from "react";
import Card from "@/pages/Order/components/Card";
import Sender from "@/pages/Order/components/Sender";
import Recipient from "@/pages/Order/components/Recipient";
import Product from "@/pages/Order/components/Product";
import OrderBtn from "@/pages/Order/components/OrderBtn";

interface OrderProps {
  children: React.ReactNode;
}

const Order = ({ children }: OrderProps) => {
  return <OrderProvider>{children}</OrderProvider>;
};

export default Order;

Order.Card = Card;
Order.Sender = Sender;
Order.Recipient = Recipient;
Order.Product = Product;
Order.Btn = OrderBtn;
