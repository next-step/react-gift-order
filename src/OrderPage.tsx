import PageContainer from "@/components/PageContainer";
import CardSelectionSection from "@/sections/OrderSection/CardSelectionSection";
import MessageInputSection from "@/sections/OrderSection/MessageInputSection";
import SenderSection from "@/sections/OrderSection/SenderSection";
import ReceiverModalSection from "@/sections/OrderSection/ReceiverModalSection";
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

const receiverSchema = z.object({
  name: z.string().min(1, "이름을 입력해주세요."),
  phone: z.string().regex(/^010\d{8}$/, "전화번호는 010으로 시작하는 11자리 숫자여야 합니다."),
  quantity: z.number().min(1, "수량은 최소 1개 이상이어야 합니다."),
});

const schema = z.object({
  message: z.string().min(1, "메시지를 입력해주세요."),
  sender: z.string().min(1, "보내는 사람을 입력해주세요."),
  receivers: z
    .array(receiverSchema)
    .min(1, "최소 1명 이상의 받는 사람을 추가해주세요.")
    .max(10, "최대 10명까지만 등록할 수 있어요.")
    .refine(
      (receivers) => {
        const phones = receivers.map((r) => r.phone);
        return new Set(phones).size === phones.length;
      },
      { message: "전화번호가 중복되었습니다." }
    ),
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
    control,
    formState: { errors, touchedFields, isSubmitted },
    setValue,
    watch,
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      message: "",
      sender: "",
      receivers: [],
    },
  });

  const totalQuantity = watch("receivers").reduce((sum, r) => sum + (r.quantity || 0), 0);

  const totalPrice = product?.price.sellingPrice * totalQuantity;

  const onSubmit = (_data: FormData) => {
    alert(`🎁 ${rank}등 상품 주문 완료!`);
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
        <ReceiverModalSection
          register={register}
          control={control}
          errors={errors}
          trigger={trigger}
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
