import React, { useState } from "react"
import PresentGiverForm from "@/components/PresentGiverForm"
import CardThumbnail from "./CardThumbnail"
import OrderLayout from "@/components/OrderLayout"
import PresentReciverForm from "@/components/PresentReciverForm"
import MoreButton from "@/components/MoreButton"
import ProductInfoBar from "./ProductInfo"
import { useParams } from "react-router-dom"
import mock_present from "@/mock_present"

export interface FormData {
  senderName: string
  receiverName: string
  receiverPhone: string
  quantity: string
  message?: string
}

export type FormField = keyof FormData

const OrderPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    senderName: "",
    receiverName: "",
    receiverPhone: "",
    quantity: "1",
    message: "",
  })
  const [showErrors, setShowErrors] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")

  const handleInputChange = (field: FormField, value: string): void => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (): void => {
    setShowErrors(true)

    const isFormValid = Object.entries(formData)
      .filter(([key]) => key !== "message")
      .every(([, value]) => value.trim() !== "")

    if (isFormValid) {
      alert(
        `주문이 완료되었습니다.\n` +
          `상품명: ${product.name}\n` +
          `구매 수량: ${quantity}\n` +
          `받는사람 이름: ${formData.receiverName}\n` +
          `메시지: ${message}`
      )
    } else {
      console.log("필수 필드를 모두 입력해주세요.")
    }
  }

  const PHONE_REG_EXP = /^010\d{8}$/

  const hasError = (field: FormField): boolean => {
    if (showErrors) {
      if (field === "receiverPhone") {
        if (!formData.receiverPhone.trim()) return true
        if (!PHONE_REG_EXP.test(formData.receiverPhone.trim())) return true
      }
      return !(formData[field]?.trim() ?? "")
    }
    return false
  }

  const { id } = useParams<{ id: string }>()
  const product =
    mock_present.find((item) => item.id === Number(id)) || mock_present[0]

  const quantity = Number(formData.quantity) > 0 ? Number(formData.quantity) : 1
  const totalPrice = product.price.sellingPrice * quantity

  return (
    <OrderLayout color="gray100" minHeight="100vh">
      <CardThumbnail message={message} setMessage={setMessage} />
      <PresentGiverForm
        formData={formData}
        handleInputChange={handleInputChange}
        hasError={hasError}
      />
      <PresentReciverForm
        formData={formData}
        handleInputChange={handleInputChange}
        hasError={hasError}
        phoneErrorMessage={
          showErrors &&
          formData.receiverPhone.trim() &&
          !PHONE_REG_EXP.test(formData.receiverPhone.trim())
            ? "올바른 전화번호 형식이 아닙니다."
            : undefined
        }
      />
      <ProductInfoBar
        image={product.imageURL}
        name={product.name}
        brand={product.brandInfo.name}
        price={product.price.sellingPrice}
      />
      <MoreButton
        background="kakaoYellow"
        onClick={handleSubmit}
        borderRadius="spacing0"
      >
        {totalPrice.toLocaleString()}원 주문하기
      </MoreButton>
    </OrderLayout>
  )
}

export default OrderPage
