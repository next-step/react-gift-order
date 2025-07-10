import PageContainer from "@/components/PageContainer";
import CardSelectionSection from "@/sections/OrderSection/CardSelectionSection";
import MessageInputSection from "@/sections/OrderSection/MessageInputSection";
import SenderSection from "@/sections/OrderSection/SenderSection";
import ReceiverSection from "@/sections/OrderSection/ReceiverSection";
import ProductInfoSection from "@/sections/OrderSection/ProductInfoSection";
import BottomOrderBar from "@/sections/OrderSection/BottomOrderBar";
import { useParams, useNavigate } from "react-router";
import { giftRankingData } from "@/mocks/giftRankingData";
import { useState } from "react";
import { messageCardData } from "@/mocks/messageCardData";
import { withAuth } from "@/hoc/withAuth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  message: z.string().min(1, "메시지를 입력해주세요."),
  sender: z.string().min(1, "보내는 사람을 입력해주세요."),
  receiverName: z.string().min(1, "받는 사람을 입력해주세요."),
  receiverPhone: z
    .string()
    .regex(/^010\d{8}$/, "전화번호는 010으로 시작하는 11자리 숫자여야 합니다."),
  quantity: z.number().min(1, "최소 1개 이상 주문해야 합니다."),
});

type FormData = z.infer<typeof schema>;

function OrderPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const rank = Number(id);
  const repeatedData = Array(12).fill(null).flatMap(() => giftRankingData);
  const product = repeatedData[rank - 1];

  const defaultCardId = messageCardData[0]?.id ?? 1;
  const [selectedCardId, setSelectedCardId] = useState(defaultCardId);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitted },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      message: "",
      sender: "",
      receiverName: "",
      receiverPhone: "",
      quantity: 1,
    },
  });

  const quantity = watch("quantity");

  const totalPrice = product?.price.sellingPrice * quantity;

  const onSubmit = (data: FormData) => {
    alert(`🎁 ${rank}등 상품 주문 완료!\n${JSON.stringify(data, null, 2)}`);
    navigate("/");
  };

  if (!product || isNaN(rank) || rank < 1 || rank > repeatedData.length) {
    return <PageContainer>존재하지 않는 상품입니다.</PageContainer>;
  }

  return (
    <PageContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardSelectionSection
          selectedCardId={selectedCardId}
          onSelect={setSelectedCardId}
          setMessage={(msg) => setValue("message", msg)}
        />
        <MessageInputSection
          register={register}
          error={errors.message?.message || ""}
          touched={!!touchedFields.message || isSubmitted}
        />
        <SenderSection
          register={register}
          error={errors.sender?.message || ""}
          touched={!!touchedFields.sender || isSubmitted}
        />
        <ReceiverSection
          register={register}
          errors={errors}
          touched={touchedFields}
        />
        <ProductInfoSection
          product={{
            imageUrl: product.imageURL,
            name: product.name,
            brand: product.brandInfo.name,
            price: product.price.sellingPrice,
          }}
        />
        <BottomOrderBar totalPrice={totalPrice} isValid onOrder={handleSubmit(onSubmit)} />
      </form>
    </PageContainer>
  );
} export default withAuth(OrderPage);
