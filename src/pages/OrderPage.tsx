import { useState, useCallback } from "react"
import PresentGiverForm from "@/components/PresentForm/PresentGiverForm"
import CardThumbnail from "./CardThumbnail"
import OrderLayout from "@/components/OrderLayout"

import ReceiverList from "@/components/PresentForm/ReceiverList"
import MoreButton from "@/components/MoreButton"
import ProductInfoBar from "./ProductInfo"
import { useParams } from "react-router-dom"
import mock_present from "@/mock_present"
import { useForm, FormProvider } from "react-hook-form"
import OrderForm from "@/components/PresentForm/OrderForm"
import styled from "@emotion/styled"
import Modal from "@/pages/Modal"
import ReceiverForm from "@/components/PresentForm/ReceiverForm"

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
  const [message, setMessage] = useState<string>("")

  const methods = useForm<FormData>({
    defaultValues: {
      senderName: "",
      receivers: [],
      message: "",
    },
  })

  const { watch, reset, handleSubmit } = methods

  const onSubmit = (data: FormData) => {
    alert(
      `주문이 완료되었습니다.\n` +
        `상품명: ${product.name}\n` +
        `받는사람 수: ${data.receivers.length}\n` +
        data.receivers
          .map(
            (r, i) =>
              `받는사람${i + 1}: ${r.name} (${r.phone}, 수량: ${r.quantity})`
          )
          .join("\n") +
        `\n메시지: ${data.message ?? ""}`
    )
    reset()
  }

  const { id } = useParams<{ id: string }>()
  const product =
    mock_present.find((item) => item.id === Number(id)) || mock_present[0]

  const receivers = watch("receivers") || []
  const totalQuantity = receivers.reduce(
    (sum, r) => sum + Number(r.quantity || 0),
    0
  )
  const totalPrice = product.price.sellingPrice * (totalQuantity || 1)

  return (
    <FormProvider {...methods}>
      <OrderForm onSubmit={handleSubmit(onSubmit)}>
        <OrderLayout color="gray100" minHeight="100vh">
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
      </OrderForm>
    </FormProvider>
  )
}

export default OrderPage
