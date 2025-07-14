import React from "react"
import Text from "../Text"
import Layout from "../Layout"
import type { FormData } from "@/pages/OrderPage"
import InputForm from "@/components/PresentForm/InputForm"
import Blank from "../Blank"
import RowForm from "@/components/RowForm"
import { useFormContext } from "react-hook-form"

const PHONE_REG_EXP = /^010\d{8}$/

const PresentReciverForm: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>()
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
          <InputForm
            width="100%"
            height="42px"
            placeholder="이름을 입력하세요."
            description=""
            {...register("receiverName", {
              required: "이름을 입력해주세요.",
            })}
            message={errors.receiverName?.message}
          />
        </div>
      </RowForm>
      <RowForm>
        <Text variant="body1Regular" margin="spacing0" padding="spacing0">
          전화번호
        </Text>
        <div style={{ flex: 1 }}>
          <InputForm
            width="100%"
            height="42px"
            placeholder="전화번호를 입력하세요."
            description=""
            {...register("receiverPhone", {
              required: "전화번호를 입력해주세요.",
              pattern: {
                value: PHONE_REG_EXP,
                message: "올바른 전화번호 형식이 아닙니다.",
              },
            })}
            message={errors.receiverPhone?.message}
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
          <InputForm
            width="100%"
            height="42px"
            placeholder="수량을 입력하세요."
            type="number"
            min={1}
            max={99}
            step={1}
            {...register("quantity", {
              required: " 수량을 입력해주세요",
            })}
            message={errors.quantity?.message}
            description=""
          />
        </div>
      </RowForm>
    </Layout>
  )
}

export default PresentReciverForm
