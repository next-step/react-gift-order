import React from "react"
import Text from "./Text"
import Layout from "./Layout"
import type { FormData } from "@/pages/OrderPage"
import type { FormField } from "@/pages/OrderPage"
import InputForm from "@/components/InputForm"
import Blank from "./Blank"
import RowForm from "@/components/RowForm"
import { getErrorMessage } from "@/functions/getErrorMessage"
export interface PresentReciverFormProps {
  formData: FormData
  handleInputChange: (field: FormField, value: string) => void
  hasError: (field: FormField) => boolean
  phoneErrorMessage?: string
}

const PresentReciverForm: React.FC<PresentReciverFormProps> = ({
  formData,
  handleInputChange,
  hasError,
  phoneErrorMessage,
}) => {
  return (
    <Layout
      marginTop="spacing2"
      paddingUp="spacing4"
      paddingLeft="spacing4"
      paddingRight="spacing4"
      color="gray00"
      height="auto"
    >
      <Text variant="title2Bold" margin="spacing0" padding="spacing0">
        받는 사람
      </Text>
      <Blank height="12px" />
      <RowForm>
        <Text
          variant="body1Regular"
          margin="spacing0"
          padding="spacing0"
          marginRight="spacing6"
        >
          이름
        </Text>
        <div style={{ flex: 1 }}>
          <InputForm<FormData>
            width="100%"
            height="42px"
            name="receiverName"
            placeholder="이름을 입력하세요."
            value={formData.receiverName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange("receiverName", e.target.value)
            }
            message={getErrorMessage(hasError, "receiverName")}
            description=""
          />
        </div>
      </RowForm>
      <RowForm>
        <Text variant="body1Regular" margin="spacing0" padding="spacing0">
          전화번호
        </Text>
        <div style={{ flex: 1 }}>
          <InputForm<FormData>
            width="100%"
            height="42px"
            name="receiverPhone"
            placeholder="전화번호를 입력하세요."
            value={formData.receiverPhone}
            onChange={(e) => handleInputChange("receiverPhone", e.target.value)}
            message={
              phoneErrorMessage
                ? phoneErrorMessage
                : getErrorMessage(hasError, "receiverPhone")
            }
            description=""
          />
        </div>
      </RowForm>
      <RowForm>
        <Text
          variant="body1Regular"
          margin="spacing0"
          padding="spacing0"
          marginRight="spacing6"
        >
          수량
        </Text>
        <div style={{ flex: 1 }}>
          <InputForm<FormData>
            width="100%"
            height="42px"
            name="quantity"
            placeholder="수량을 입력하세요."
            value={formData.quantity}
            type="number"
            min={1}
            max={99}
            step={1}
            onChange={(e) => handleInputChange("quantity", e.target.value)}
            message={getErrorMessage(hasError, "quantity")}
            description=""
          />
        </div>
      </RowForm>
    </Layout>
  )
}

export default PresentReciverForm
