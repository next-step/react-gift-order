import type {
  FieldErrors,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormReturn,
} from 'react-hook-form'
import styled from '@emotion/styled'
import { spacing } from '@/theme/spacing'
import { typography } from '@/theme/typography'
import { colors } from '@/theme/color'
import type { OrderFormValues } from '@/hooks/useOrderForm'

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`

const Modal = styled.div`
  width: 90%;
  max-width: 480px;
  background: ${colors.background.default};
  border-radius: ${spacing.spacing2};
  padding: ${spacing.spacing5};
  display: flex;
  flex-direction: column;
  gap: ${spacing.spacing4};
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.spacing2};
`

const Title = styled.p`
  ${typography.subtitle1Bold};
`

const Guide = styled.p`
  ${typography.body2Regular};
  color: ${colors.text.sub};
  line-height: 1.4;
`

const AddButton = styled.button`
  align-self: flex-end;
  padding: ${spacing.spacing2} ${spacing.spacing4};
  background: ${colors.brand.kakaoYellow};
  border: none;
  border-radius: ${spacing.spacing1};
  cursor: pointer;
`

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.spacing2};
  border: 1px solid ${colors.border.default};
  padding: ${spacing.spacing3};
  border-radius: ${spacing.spacing1};
  position: relative;
`

const RowHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${spacing.spacing2};
`

const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
`

const Label = styled.p`
  min-width: 3.75rem;
  ${typography.label1Regular};
`

const Input = styled.input`
  width: 100%;
  padding: ${spacing.spacing2};
  border: 1px solid ${colors.border.default};
  border-radius: ${spacing.spacing1};
  font-size: ${typography.body1Regular.fontSize};
`

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${spacing.spacing3};
`

const ErrorText = styled.p`
  color: ${colors.status.critical};
  ${typography.body2Regular};
`

interface RecipientModalProps {
  open: boolean
  onClose: () => void
  fields: { id: string }[]
  append: UseFieldArrayAppend<OrderFormValues, 'recipients'>
  remove: UseFieldArrayRemove
  register: UseFormReturn<OrderFormValues>['register']
  watch: UseFormReturn<OrderFormValues>['watch']
  errors: FieldErrors<OrderFormValues>
  isValid: boolean
}

export default function RecipientModal({
  open,
  onClose,
  fields,
  append,
  remove,
  register,
  watch,
  errors,
  isValid,
}: RecipientModalProps) {
  if (!open) return null
  const phones = watch('recipients').map((r) => r.phone)
  const hasDuplicate = phones.some((p, i) => p && phones.indexOf(p) !== i)

  const handleAdd = () => {
    if (fields.length >= 10) return
    append({ name: '', phone: '', qty: 1 })
  }

  const handleDone = () => {
    if (isValid && !hasDuplicate) {
      onClose()
    }
  }

  return (
    <Backdrop>
      <Modal>
        <Header>
          <Title>받는 사람</Title>
          <Guide>
            * 최대 10명까지 추가 할 수 있어요.
            <br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
          </Guide>
        </Header>
        <AddButton
          type="button"
          onClick={handleAdd}
          disabled={fields.length >= 10}
        >
          추가하기
        </AddButton>
        {fields.map((field, index) => (
          <Row key={field.id}>
            <RowHeader>
              <p>받는 사람 {index + 1}</p>
              <RemoveButton type="button" onClick={() => remove(index)}>
                ×
              </RemoveButton>
            </RowHeader>
            <div>
              <Label>이름</Label>
              <Input
                placeholder="이름을 입력하세요."
                {...register(`recipients.${index}.name`)}
              />
              {errors.recipients?.[index]?.name && (
                <ErrorText>
                  {String(errors.recipients[index]?.name?.message)}
                </ErrorText>
              )}
            </div>
            <div>
              <Label>전화번호</Label>
              <Input
                placeholder="전화번호를 입력하세요."
                {...register(`recipients.${index}.phone`, {
                  validate: (value) => {
                    if (phones.filter((p) => p === value).length > 1) {
                      return '전화번호가 중복되었습니다.'
                    }
                    return true
                  },
                })}
              />
              {errors.recipients?.[index]?.phone && (
                <ErrorText>
                  {String(errors.recipients[index]?.phone?.message)}
                </ErrorText>
              )}
            </div>
            <div>
              <Label>수량</Label>
              <Input
                type="number"
                placeholder="수량을 입력하세요."
                {...register(`recipients.${index}.qty`, {
                  valueAsNumber: true,
                })}
              />
              {errors.recipients?.[index]?.qty && (
                <ErrorText>
                  {String(errors.recipients[index]?.qty?.message)}
                </ErrorText>
              )}
            </div>
          </Row>
        ))}
        {hasDuplicate && <ErrorText>전화번호가 중복되었습니다.</ErrorText>}
        <Footer>
          <button type="button" onClick={onClose}>
            취소
          </button>
          <button type="button" onClick={handleDone}>
            {fields.length}명 완료
          </button>
        </Footer>
      </Modal>
    </Backdrop>
  )
}