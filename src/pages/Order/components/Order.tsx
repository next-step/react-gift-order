import { OrderProvider } from "@/contexts/orderContext";
import type React from "react";
import Card from "./Card";
import Sender from "./Sender";
import Recipient from "./Recipient";
import Product from "./Product";
import OrderBtn from "./OrderBtn";

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
