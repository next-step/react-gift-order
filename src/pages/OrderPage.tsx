import { FormProvider, useForm } from "react-hook-form"
import { useParams } from "react-router-dom"
import { useState } from "react"
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

const OrderPage = () => {
  const [message, setMessage] = useState("")
  const { id } = useParams<{ id: string }>()
  const product =
    mock_present.find((item) => item.id === Number(id)) || mock_present[0]

  const methods = useForm<FormData>({
    defaultValues: {
      senderName: "",
      receivers: [],
      message: "",
    },
  })

  const { handleSubmit, reset, watch: watchReceivers } = methods

  const receivers = watchReceivers("receivers")
  const totalQuantity = receivers.reduce(
    (sum, r) => sum + Number(r.quantity || 0),
    0
  )
  const totalPrice = product.price.sellingPrice * (totalQuantity || 1)

  const onSubmit = (data: FormData) => {
    alert(
      `주문 완료\n` +
        data.receivers
          .map(
            (r, i) =>
              `받는 사람 ${i + 1}: ${r.name} (${r.phone}) / 수량 ${r.quantity}`
          )
          .join("\n")
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
          {totalPrice.toLocaleString()}원 주문하기
        </MoreButton>
      </OrderLayout>
    </FormProvider>
  )
}

export default OrderPage
