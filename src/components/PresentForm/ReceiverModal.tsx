import { useEffect } from "react"
import { useFormContext, useFieldArray } from "react-hook-form"
import type { FormData } from "@/pages/OrderPage"
import Text from "@/components/Text"
import Blank from "@/components/Blank"
import Overlay from "./components/Overlay"
import ReciverContainer from "@/components/PresentForm/components/ReciverContainer"
import MakeRowUnder from "./components/MakeRowUnder"
import AddPlusButton from "./AddPlusButton"
import ReceiverCard from "./components/ReceiverCard"
import theme from "@/styles/theme"
import RowForm from "../RowForm"
import InputForm from "./InputForm"
import CardSection from "../CardSection"

interface Props {
  close: () => void
  isOpen: boolean
}

const ReceiverModal = ({ close, isOpen }: Props) => {
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  const {
    control,
    register,
    formState: { errors },
    trigger,
    getValues,
  } = useFormContext<FormData>()

  const { fields, append, remove } = useFieldArray({
    control,
    name: "receivers",
  })

  const handleAdd = () => {
    if (fields.length >= 10)
      return alert("받는 사람은 최대 10명까지 입력 가능합니다.")
    append({ name: "", phone: "", quantity: "1" })
  }

  const handleComplete = async () => {
    const isValid = await trigger("receivers")

    if (!isValid) {
      return
    }

    close()
  }

  const validatePhone = (phone: string, index: number) => {
    if (!phone.trim()) {
      return "전화번호를 입력해 주세요."
    }

    const phoneRegex = /^010[0-9]{8}$/
    if (!phoneRegex.test(phone)) {
      return "올바른 전화번호 형식이 아닙니다."
    }

    const receivers = getValues("receivers")
    const duplicateIndex = receivers.findIndex(
      (receiver, i) =>
        i !== index &&
        receiver.phone.trim() === phone.trim() &&
        phone.trim() !== ""
    )

    if (duplicateIndex !== -1) {
      return "중복된 전화번호가 있습니다."
    }

    return true
  }

  return (
    <Overlay>
      <ReciverContainer onClick={(e) => e.stopPropagation()}>
        <Text variant="title1Bold" margin="spacing0" padding="spacing0">
          받는 사람
        </Text>
        <Text variant="label2Regular" margin="spacing0" padding="spacing0">
          * 최대 10명까지 추가할 수 있어요.
        </Text>
        <Text variant="label2Regular" margin="spacing0" padding="spacing0">
          * 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
        </Text>
        <Blank height="8px" />

        <AddPlusButton
          width="80px"
          height="auto"
          padding="spacing2"
          paddingBottom="spacing2"
          paddingLeft="spacing4"
          paddingRight="spacing4"
          borderRadius="spacing2"
          type="button"
          onClick={handleAdd}
        >
          추가하기
        </AddPlusButton>

        <CardSection>
          {fields.map((field, index) => (
            <ReceiverCard key={field.id}>
              <div style={{ display: "flex", gap: theme.space.spacing2 }}>
                <Text
                  variant="subtitle2Bold"
                  margin="spacing0"
                  padding="spacing0"
                >
                  받는 사람 {index + 1}
                </Text>
                <AddPlusButton
                  height="auto"
                  type="button"
                  onClick={() => remove(index)}
                  backGroundColor="gray00"
                >
                  ✕
                </AddPlusButton>
              </div>

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
                    {...register(`receivers.${index}.name` as const, {
                      required: "이름을 입력해 주세요.",
                      validate: (value) => {
                        if (!value.trim()) {
                          return "이름을 입력해 주세요."
                        }
                        return true
                      },
                    })}
                    placeholder="이름을 입력하세요."
                  />
                  {errors?.receivers?.[index]?.name && (
                    <Text
                      variant="label2Regular"
                      margin="spacing0"
                      padding="spacing0"
                      color="red700"
                    >
                      {errors.receivers[index]?.name?.message}
                    </Text>
                  )}
                </div>
              </RowForm>

              <RowForm>
                <Text
                  variant="body1Regular"
                  margin="spacing0"
                  padding="spacing0"
                >
                  전화번호
                </Text>
                <div style={{ flex: 1 }}>
                  <InputForm
                    {...register(`receivers.${index}.phone` as const, {
                      required: "전화번호를 입력해 주세요.",
                      validate: (value) => validatePhone(value, index),
                    })}
                    placeholder="전화번호를 입력하세요."
                  />
                  {errors?.receivers?.[index]?.phone && (
                    <Text
                      variant="label2Regular"
                      margin="spacing0"
                      padding="spacing0"
                      color="red700"
                    >
                      {errors.receivers[index]?.phone?.message}
                    </Text>
                  )}
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
                    {...register(`receivers.${index}.quantity` as const, {
                      required: "수량을 입력해 주세요.",
                      min: {
                        value: 1,
                        message: "수량은 1개 이상이어야 합니다.",
                      },
                      validate: (value) => {
                        const num = Number(value)
                        if (isNaN(num) || num < 1) {
                          return "올바른 수량을 입력해 주세요."
                        }
                        return true
                      },
                    })}
                    placeholder="수량"
                    type="number"
                  />
                  {errors?.receivers?.[index]?.quantity && (
                    <Text
                      variant="label2Regular"
                      margin="spacing0"
                      padding="spacing0"
                      color="red700"
                    >
                      {errors.receivers[index]?.quantity?.message}
                    </Text>
                  )}
                </div>
              </RowForm>
            </ReceiverCard>
          ))}
        </CardSection>

        <MakeRowUnder>
          <AddPlusButton
            flex="1 1 0"
            type="button"
            onClick={close}
            borderRadius="spacing2"
            padding="spacing3"
            paddingLeft="spacing6"
            paddingRight="spacing6"
            height="auto"
          >
            취소
          </AddPlusButton>

          <AddPlusButton
            flex="3 1 0"
            height="auto"
            type="button"
            onClick={handleComplete}
            borderRadius="spacing2"
            padding="spacing3"
            paddingLeft="spacing6"
            paddingRight="spacing6"
            backGroundColor="kakaoYellow"
          >
            {fields.length}명 완료
          </AddPlusButton>
        </MakeRowUnder>
      </ReciverContainer>
    </Overlay>
  )
}

export default ReceiverModal
