import { FormProvider, useForm } from "react-hook-form"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import PresentGiverForm from "@/components/PresentForm/PresentGiverForm"
import CardThumbnail from "./CardThumbnail"
import OrderLayout from "@/components/OrderLayout"
import ReceiverForm from "@/components/PresentForm/ReceiverForm"
import ProductInfoBar from "./ProductInfo"
import MoreButton from "@/components/MoreButton"
import mock_present from "@/mock_present"

export interface Receiver {
  name: string
  phone: string
  quantity: string
}

export interface FormData {
  senderName: string
  receivers: Receiver[]
  message?: string
}
export type FormField = keyof FormData
const OrderPage = () => {
  const [message, setMessage] = useState("")
  const { id } = useParams<{ id: string }>()
  const product =
    mock_present.find((item) => item.id === Number(id)) || mock_present[0]

  const methods = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      senderName: "",
      receivers: [],
      message: "",
    },
  })

  const { handleSubmit, reset, watch: watchReceivers, clearErrors } = methods
  useEffect(() => {
    clearErrors()
  }, [id, clearErrors])

  const receivers = watchReceivers("receivers")
  const totalQuantity = receivers.reduce(
    (sum, r) => sum + Number(r.quantity || 0),
    0
  )
  const totalPrice = product.price.sellingPrice * (totalQuantity || 1)

  const onSubmit = (data: FormData) => {
    alert(
      `주문이 완료되었습니다.\n` +
        `상품명: ${product.name}\n` +
        `구매 수량: ${totalQuantity}\n` +
        `발신자 이름: ${data.senderName}\n` +
        `메시지: ${data.message || "축하해요."}`
    )
    reset()
  }

  return (
    <FormProvider {...methods}>
      <OrderLayout
        color="gray100"
        minHeight="100vh"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <CardThumbnail message={message} setMessage={setMessage} />
        <PresentGiverForm />

        <ReceiverForm />

        <ProductInfoBar
          image={product.imageURL}
          name={product.name}
          brand={product.brandInfo.name}
          price={product.price.sellingPrice}
        />
        <MoreButton
          type="submit"
          background="kakaoYellow"
          borderRadius="spacing0"
        >
          {totalQuantity
            ? `${totalPrice.toLocaleString()}원 주문하기`
            : "0원 주문하기"}
        </MoreButton>
      </OrderLayout>
    </FormProvider>
  )
}

export default OrderPage
