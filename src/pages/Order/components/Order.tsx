import type React from "react";
import Card from "@/pages/Order/components/Card";
import Sender from "@/pages/Order/components/Sender";
import Recipient from "@/pages/Order/components/Recipient";
import Product from "@/pages/Order/components/Product";
import OrderBtn from "@/pages/Order/components/OrderBtn";
import RecipientFieldModal from "@/pages/Order/components/RecipientFieldModal";
import { FormProvider, useForm } from "react-hook-form";
import type { OrderFormType } from "@/types/OrderFormType";
import { orderCardMock } from "@/assets/orderCardMock";
import { rankingItemMock } from "@/assets/rankingItemMock";

interface OrderProps {
  children: React.ReactNode;
}

const defaultValues: OrderFormType = {
  cardId: orderCardMock[0].id,
  message: orderCardMock[0].defaultTextMessage,
  sender: "",
  recipients: { name: "", phone: "", quantity: 1 },
  productId: rankingItemMock[0].id,
};

const Order = ({ children }: OrderProps) => {
  const methods = useForm<OrderFormType>({ defaultValues });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default Order;

Order.Card = Card;
Order.Sender = Sender;
Order.Recipient = Recipient;
Order.Product = Product;
Order.Btn = OrderBtn;
Order.Modal = RecipientFieldModal;
