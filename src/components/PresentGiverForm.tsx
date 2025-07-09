import React from "react"
import Text from "./Text"
import Layout from "./Layout"
import type { FormData } from "@/pages/OrderPage"
import type { FormField } from "@/pages/OrderPage"
import InputForm from "@/components/InputForm"
import Blank from "./Blank"
import { getErrorMessage } from "@/functions/getErrorMessage"
interface PresentGiverFormProps {
  formData: FormData
  handleInputChange: (field: FormField, value: string) => void
  hasError: (field: FormField) => boolean
}

const PresentGiverForm: React.FC<PresentGiverFormProps> = ({
  formData,
  handleInputChange,
  hasError,
}) => {
  return (
    <Layout
      marginTop="spacing2"
      paddingUp="spacing4"
      paddingLeft="spacing4"
      paddingRight="spacing4"
      color="gray00"
      height="136px"
    >
      <Text variant="title2Bold" margin="spacing0" padding="spacing0">
        보내는 사람
      </Text>
      <Blank height="12px" />
      <InputForm<FormData>
        width="100%"
        height="42px"
        name="senderName"
        placeholder="이름을 입력하세요."
        value={formData.senderName}
        onChange={(e) => handleInputChange("senderName", e.target.value)}
        message={getErrorMessage(hasError, "senderName")}
        description="* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다."
      />
    </Layout>
  )
}

export default PresentGiverForm
