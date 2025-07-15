import "@/pages/Modal.css"
import { useFormContext, useFieldArray } from "react-hook-form"
import type { Receiver } from "@/pages/OrderPage"
import Text from "@/components/Text"
import Blank from "@/components/Blank"

interface Props {
  close: () => void
}

const ReceiverModal = ({ close }: Props) => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext()

  const { fields, append, remove } = useFieldArray<{
    receivers: Receiver[]
  }>({
    control,
    name: "receivers",
  })

  const handleAdd = () => {
    if (fields.length >= 10)
      return alert("받는 사람은 최대 10명까지 입력 가능합니다.")
    append({ name: "", phone: "", quantity: "1" })
  }

  return (
    <div className="Overlay">
      <div className="cart-container" onClick={(e) => e.stopPropagation()}>
        <Text variant="title2Bold" margin="spacing0" padding="spacing0">
          받는 사람
        </Text>
        <Text variant="label2Regular" margin="spacing0" padding="spacing0">
          * 최대 10명까지 추가할 수 있어요.
        </Text>
        <Blank height="spacing2" />

        <button type="button" className="add-cart-button" onClick={handleAdd}>
          추가하기
        </button>

        {/* 입력 폼 목록 */}
        {fields.map((field, index) => (
          <div key={field.id} style={{ marginTop: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Text
                variant="subtitle2Bold"
                margin="spacing0"
                padding="spacing0"
              >
                받는 사람 {index + 1}
              </Text>
              <button type="button" onClick={() => remove(index)}>
                ✕
              </button>
            </div>

            <input
              {...register(`receivers.${index}.name`, { required: true })}
              placeholder="이름을 입력하세요."
            />
            {errors?.receivers?.[index]?.name && (
              <span className="err">이름을 입력해 주세요.</span>
            )}

            <input
              {...register(`receivers.${index}.phone`, { required: true })}
              placeholder="전화번호를 입력하세요."
            />
            {errors?.receivers?.[index]?.phone && (
              <span className="err">전화번호를 입력해 주세요.</span>
            )}

            <input
              {...register(`receivers.${index}.quantity`, {
                required: true,
                min: 1,
              })}
              placeholder="수량"
              type="number"
            />
          </div>
        ))}

        <div className="button-group">
          <button type="button" className="cancel" onClick={close}>
            취소
          </button>
          <button type="button" className="add-cart" onClick={close}>
            {fields.length}명 완료
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReceiverModal
