import React, { useState } from "react"
import PresentGiverForm from "@/components/PresentForm/PresentGiverForm"
import CardThumbnail from "./CardThumbnail"
import OrderLayout from "@/components/OrderLayout"
import PresentReciverForm from "@/components/PresentForm/PresentReciverForm"
import MoreButton from "@/components/MoreButton"
import ProductInfoBar from "./ProductInfo"
import { useParams } from "react-router-dom"
import mock_present from "@/mock_present"
import { useForm, FormProvider } from "react-hook-form"

export interface FormData {
  senderName: string
  receiverName: string
  receiverPhone: string
  quantity: string
  message?: string
}

export type FormField = keyof FormData

const OrderPage: React.FC = () => {
  const [message, setMessage] = useState<string>("")

  const methods = useForm<FormData>({
    defaultValues: {
      senderName: "",
      receiverName: "",
      receiverPhone: "",
      quantity: "1",
      message: "",
    },
  })

  const { watch, reset, handleSubmit } = methods

  const onSubmit = (data: FormData) => {
    alert(
      `주문이 완료되었습니다.\n` +
        `상품명: ${product.name}\n` +
        `구매 수량: ${data.quantity}\n` +
        `받는사람 이름: ${data.receiverName}\n` +
        `메시지: ${message}`
    )
    reset()
  }

  const { id } = useParams<{ id: string }>()
  const product =
    mock_present.find((item) => item.id === Number(id)) || mock_present[0]

  const quantity = Number(watch("quantity")) > 0 ? Number(watch("quantity")) : 1
  const totalPrice = product.price.sellingPrice * quantity

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <OrderLayout color="gray100" minHeight="100vh">
          <CardThumbnail message={message} setMessage={setMessage} />

          <PresentGiverForm />

          <PresentReciverForm />

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
      </form>
    </FormProvider>
  )
}

export default OrderPage
