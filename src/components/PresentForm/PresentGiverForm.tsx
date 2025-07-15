import Text from "../Text"
import Layout from "../Layout"
import type { FormData } from "@/pages/OrderPage"
import InputForm from "@/components/PresentForm/InputForm"
import Blank from "../Blank"
import { useFormContext } from "react-hook-form"

const PresentGiverForm = () => {
  const {
    register,
    formState: { errors, isSubmitted },
  } = useFormContext<FormData>()

  const shouldShowError = isSubmitted && errors.senderName?.message

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
      <InputForm
        width="100%"
        height="42px"
        placeholder="이름을 입력하세요."
        description="* 실제 선물 발송 시 발신자 이름으로 반영되는 정보입니다."
        {...register("senderName", {
          required: "이름을 입력해주세요.",
        })}
        message={shouldShowError ? errors.senderName?.message : undefined}
      />
    </Layout>
  )
}

export default PresentGiverForm
