import React from "react"
import Text from "../Text"
import Layout from "../Layout"
import type { FormData } from "@/pages/OrderPage"
import Blank from "../Blank"
import { useFormContext, useFieldArray } from "react-hook-form"
import { useState } from "react"
import Modal from "./Modal"
import InputForm from "@/components/PresentForm/InputForm"
import AddReciverButton from "@/components/PresentForm/AddReciverButton"


const PresentReciverFormModal: React.FC = () => {
  const {
    register,
    control,
    formState: { errors },
    getValues,
    setError,
    clearErrors,
  } = useFormContext<FormData>()
  const [openModal, setOpenModal] = useState(false)
  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "receivers",
  })

  const validatePhoneUnique = (value: string, idx: number) => {
    const receivers = getValues("receivers") || []
    return (
      receivers.filter((r: any, i: number) => r.phone === value && i !== idx).length === 0 ||
      "중복된 전화번호입니다."
    )
  }

  const validatePhoneFormat = (value: string) => {
    return /^010\d{8}$/.test(value) || "올바른 전화번호 형식이 아니예요."
  }

  const handleComplete = () => {
    const receivers = getValues("receivers") || []
    if (receivers.length < 1) {
      setError("receivers", { message: "최소 1명 이상 추가해야 합니다." })
      return
    }
    if (receivers.length > 10) {
      setError("receivers", { message: "최대 10명까지 추가할 수 있습니다." })
      return
    }
    setOpenModal(false)
    clearErrors("receivers")
  }

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
      <div>
        <AddReciverButton
          type="button"
          onClick={() => {
            setOpenModal(true)
          }}
        >
          <Text
            variant="body2Regular"
            margin="spacing0"
            marginTop="spacing2"
            marginRight="spacing4"
            marginBottom="spacing2"
            marginLeft="spacing4"
            padding="spacing0"
          >
            추가
          </Text>
        </AddReciverButton>

        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <div style={{ padding: 24, minWidth: 350 }}>
            <Text variant="title2Bold" margin="spacing0" padding="spacing0">받는 사람</Text>
            <Text variant="body2Regular" margin="spacing0" padding="spacing0" color="gray400" style={{ marginTop: 4, marginBottom: 8 }}>
              * 최대 10명까지 추가할 수 있어요.<br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
            </Text>
            {fields.length === 0 && (
              <div style={{ color: "#bbb", padding: 24, textAlign: "center" }}>
                받는 사람이 없습니다.<br />받는 사람을 추가해 주세요.
              </div>
            )}
            {fields.map((field, idx) => (
              <div key={field.id} style={{ border: "1px solid #eee", borderRadius: 8, padding: 16, marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Text variant="body2Bold" margin="spacing0" padding="spacing0">받는 사람 {idx + 1}</Text>
                  <button type="button" onClick={() => remove(idx)} style={{ color: "#f44", background: "none", border: "none", fontSize: 18 }}>
                    x
                  </button>
                </div>
                <div style={{ marginTop: 8 }}>
                  <label>
                    이름
                    <input
                      {...register(`receivers.${idx}.name`, { required: "이름을 입력해 주세요." })}
                      placeholder="이름을 입력하세요."
                      style={{ width: "100%", marginTop: 4, marginBottom: 4 }}
                    />
                  </label>
                  {errors.receivers?.[idx]?.name && (
                    <div style={{ color: "#f44", fontSize: 12 }}>{errors.receivers[idx]?.name?.message as string}</div>
                  )}
                </div>
                <div>
                  <label>
                    전화번호
                    <InputForm width="auto" height="37px"
                      {...register(`receivers.${idx}.phone`, {
                        required: "전화번호를 입력해 주세요.",
                        validate: {
                          format: validatePhoneFormat,
                          unique: (v) => validatePhoneUnique(v, idx),
                        },
                      })}
                      placeholder="전화번호를 입력하세요."
                    />
          

                  </label>
                  {errors.receivers?.[idx]?.phone && (
                    <div style={{ color: "#f44", fontSize: 12 }}>{errors.receivers[idx]?.phone?.message as string}</div>
                  )}
                </div>
                <div>
                  <label>
                    수량
                    <InputForm
                      type="number"
                      min={1}
                      max={99}
                      {...register(`receivers.${idx}.quantity`, {
                        required: "수량을 입력해 주세요.",
                        min: { value: 1, message: "최소 1 이상이어야 해요." },
                        max: { value: 99, message: "최대 99까지 입력할 수 있어요." },
                      })}
                      placeholder="1"
                      style={{ width: 80, marginTop: 4, marginBottom: 4 }}
                    />
                  </label>
                  {errors.receivers?.[idx]?.quantity && (
                    <div style={{ color: "#f44", fontSize: 12 }}>{errors.receivers[idx]?.quantity?.message as string}</div>
                  )}
                </div>
              </div>
            ))}
            {typeof errors.receivers?.message === "string" && (
              <div style={{ color: "#f44", fontSize: 13, marginBottom: 8 }}>{errors.receivers.message}</div>
            )}
            <button
              type="button"
              onClick={() => append({ name: "", phone: "", quantity: "1" })}
              disabled={fields.length >= 10}
              style={{ width: "100%", padding: 8, background: "#eee", border: "none", borderRadius: 6, marginBottom: 12 }}
            >
              + 받는 사람 추가하기
            </button>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
              <button type="button" onClick={() => setOpenModal(false)} style={{ flex: 1, marginRight: 8, padding: 10, background: "#eee", border: "none", borderRadius: 6 }}>
                취소
              </button>
              <button type="button" onClick={handleComplete} style={{ flex: 1, padding: 10, background: "#ffe812", border: "none", borderRadius: 6, fontWeight: 700 }}>
                {fields.length}명 완료
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </Layout>
  )
}

export default PresentReciverFormModal
