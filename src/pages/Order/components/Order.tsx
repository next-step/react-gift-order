import type React from "react";
import Card from "@/pages/Order/components/Card";
import Sender from "@/pages/Order/components/Sender";
import Recipient from "@/pages/Order/components/Recipient";
import Product from "@/pages/Order/components/Product";
import OrderBtn from "@/pages/Order/components/OrderBtn";
import RecipientFieldModal from "@/pages/Order/components/RecipientFieldModal";
import { FormProvider, useForm } from "react-hook-form";
import { orderCardMock } from "@/assets/orderCardMock";
import { rankingItemMock } from "@/assets/rankingItemMock";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

interface OrderProps {
  children: React.ReactNode;
}

const RecipientSchema = z.object({
  name: z.string().min(1, "이름을 입력해주세요."),
  phone: z
    .string()
    .min(1, "전화번호를 입력해주세요.")
    .regex(/^010\d{8}$/, "올바른 전화번호 형식이 아닙니다. 유효한 전화번호 형식(010xxxxxxxx)으로 입력해주세요."),
  quantity: z.number().min(1, "수량은 1개 이상이어야 합니다."),
});
const OrderFormSchema = z.object({
  cardId: z.number(),
  message: z.string().min(1, "메세지를 입력해주세요."),
  sender: z.string().min(1, "이름을 입력해주세요."),
  recipients: z
    .array(RecipientSchema)
    .min(1, "받는 사람을 한 명 이상 추가해주세요.")
    .check((ctx) => {
      const phoneNumbers = new Set<string>();
      ctx.value.forEach((recipient, index) => {
        if (phoneNumbers.has(recipient.phone)) {
          ctx.issues.push({
            code: "custom",
            message: "중복된 전화번호가 있습니다.",
            input: ctx.value,
            path: [index, "phone"],
          });
        }
        phoneNumbers.add(recipient.phone);
      });
    }),
  productId: z.number(),
});

export type OrderFormType = z.infer<typeof OrderFormSchema>;
export type RecipientType = z.infer<typeof RecipientSchema>;

const defaultValues: OrderFormType = {
  cardId: orderCardMock[0].id,
  message: orderCardMock[0].defaultTextMessage,
  sender: "",
  recipients: [],
  productId: rankingItemMock[0].id,
};

const Order = ({ children }: OrderProps) => {
  const methods = useForm<OrderFormType>({ mode: "onSubmit", resolver: zodResolver(OrderFormSchema), defaultValues });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default Order;

Order.Card = Card;
Order.Sender = Sender;
Order.Recipient = Recipient;
Order.Product = Product;
Order.Btn = OrderBtn;
Order.Modal = RecipientFieldModal;
