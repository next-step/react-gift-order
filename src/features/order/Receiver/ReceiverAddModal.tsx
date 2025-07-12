import styled from '@emotion/styled'
import { Modal, Button, Typography } from '@/shared/ui'
import { theme } from '@/shared/styles/theme'
import { typographyInputSmall, typographyLabelSmall } from '@/shared/styles/typography'
import { ORDER_FORM_PLACEHOLDER } from '@/entities/order'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useOrderForm } from '@/shared/contexts/order'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import { z } from 'zod'
import { receiversSchema } from '@/entities/order'

// * 모달용 스키마 (receivers만 포함)
const modalFormSchema = z.object({
  receivers: receiversSchema,
})

type ModalFormData = z.infer<typeof modalFormSchema>

export const ReceiverAddModal = () => {
  const {
    form: { setValue, watch },
    isModalOpen,
    closeModal,
  } = useOrderForm()

  // * 모달 전용 폼
  const modalForm = useForm<ModalFormData>({
    resolver: zodResolver(modalFormSchema),
    defaultValues: {
      receivers: [{ name: '', phone: '', count: 1 }],
    },
    mode: 'onSubmit', // 제출시에만 검증
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = modalForm

  // * useFieldArray로 동적 폼 관리
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'receivers',
  })

  // * 모달이 열릴 때 기존 데이터 로드
  useEffect(() => {
    if (isModalOpen) {
      const currentReceivers = watch('receivers') || []
      if (currentReceivers.length > 0) {
        reset({ receivers: [...currentReceivers] })
      } else {
        reset({ receivers: [{ name: '', phone: '', count: 1 }] })
      }
    }
  }, [isModalOpen, watch, reset])

  // * 받는 사람 추가
  const addReceiver = () => {
    append({ name: '', phone: '', count: 1 })
  }

  // * 받는 사람 삭제
  const removeReceiver = (index: number) => {
    remove(index)
  }

  // * 폼 제출 핸들러
  const onSubmit = handleSubmit((data) => {
    // 전화번호 중복 체크
    const phoneNumbers = data.receivers.map((r: { phone: string }) => r.phone)
    const phoneMap = new Map<string, number[]>()

    // 중복된 전화번호와 해당 인덱스들 찾기
    phoneNumbers.forEach((phone: string, index: number) => {
      if (phone.trim()) {
        if (!phoneMap.has(phone)) {
          phoneMap.set(phone, [])
        }
        phoneMap.get(phone)!.push(index)
      }
    })

    // 중복된 전화번호가 있는지 확인하고 에러 설정
    let hasDuplicate = false
    for (const indices of phoneMap.values()) {
      if (indices.length > 1) {
        // 중복된 모든 필드에 에러 설정
        indices.forEach((index: number) => {
          setError(`receivers.${index}.phone`, {
            type: 'manual',
            message: '중복된 전화번호입니다.',
          })
        })
        hasDuplicate = true
      }
    }

    if (hasDuplicate) {
      return // 중복이 있으면 제출하지 않음
    }

    // 실제 메인 form에 데이터 반영
    setValue('receivers', data.receivers)
    closeModal()
  })

  // * 모달 닫기 핸들러
  const handleClose = () => {
    reset({ receivers: [{ name: '', phone: '', count: 1 }] })
    closeModal()
  }

  if (!isModalOpen) return null

  // * 추가 버튼 비활성화 조건
  const isAddDisabled = fields.length >= 10

  // * 모달 설명
  const receiverAddDesc = (
    <DescContainer>
      <DescriptionText variant="label2Regular">
        {`* 최대 10명까지 추가 할 수 있어요.
* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.`}
      </DescriptionText>
      <AddButton variant="default" size="small" onClick={addReceiver} disabled={isAddDisabled}>
        추가하기
      </AddButton>
    </DescContainer>
  )

  // * 푸터 버튼들
  const footerButtons = (
    <>
      <Button variant="ghost" onClick={handleClose}>
        취소
      </Button>
      <Button variant="kakao" onClick={onSubmit}>
        {fields.length}명 완료
      </Button>
    </>
  )

  return (
    <Modal
      onClose={handleClose}
      title={'받는 사람'}
      description={receiverAddDesc}
      footer={footerButtons}
      showCloseButton={false}
    >
      <FormContainer>
        {fields.map((field, index) => (
          <ReceiverFormSection key={field.id}>
            <ReceiverHeader>
              <ReceiverTitle variant="subtitle2Bold">받는 사람 {index + 1}</ReceiverTitle>
              <RemoveButton variant="ghost" size="small" onClick={() => removeReceiver(index)}>
                <X size={16} />
              </RemoveButton>
            </ReceiverHeader>

            <FormField>
              <Label>이름</Label>
              <InputContainer>
                <Controller
                  name={`receivers.${index}.name`}
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      placeholder={ORDER_FORM_PLACEHOLDER.reciever.name}
                      hasError={!!errors.receivers?.[index]?.name}
                    />
                  )}
                />
                {errors.receivers?.[index]?.name && (
                  <ErrorMessage variant="label2Regular">
                    {errors.receivers[index]?.name?.message}
                  </ErrorMessage>
                )}
              </InputContainer>
            </FormField>

            <FormField>
              <Label>전화번호</Label>
              <InputContainer>
                <Controller
                  name={`receivers.${index}.phone`}
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="tel"
                      placeholder={ORDER_FORM_PLACEHOLDER.reciever.phone}
                      hasError={!!errors.receivers?.[index]?.phone}
                    />
                  )}
                />
                {errors.receivers?.[index]?.phone && (
                  <ErrorMessage variant="label2Regular">
                    {errors.receivers[index]?.phone?.message}
                  </ErrorMessage>
                )}
              </InputContainer>
            </FormField>

            <FormField>
              <Label>수량</Label>
              <InputContainer>
                <Controller
                  name={`receivers.${index}.count`}
                  control={control}
                  render={({ field: { onChange, value, ...field } }) => (
                    <QuantityInput
                      {...field}
                      type="number"
                      placeholder="1"
                      value={value.toString()}
                      onChange={(e) => onChange(Number(e.target.value) || 1)}
                      hasError={!!errors.receivers?.[index]?.count}
                    />
                  )}
                />
                {errors.receivers?.[index]?.count && (
                  <ErrorMessage variant="label2Regular">
                    {errors.receivers[index]?.count?.message}
                  </ErrorMessage>
                )}
              </InputContainer>
            </FormField>
          </ReceiverFormSection>
        ))}
      </FormContainer>
    </Modal>
  )
}

// * 폼 컨테이너
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.spacing4};
  max-height: 400px;
  overflow-y: auto;
`

// * 받는 사람 폼 섹션
const ReceiverFormSection = styled.div`
  padding: ${theme.spacing.spacing4} 0;
  border-top: 1px solid ${theme.semanticColors.border.default};

  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.spacing3};
`

// * 받는 사람 헤더
const ReceiverHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

// * 받는 사람 제목
const ReceiverTitle = styled(Typography)`
  color: ${theme.semanticColors.text.default};
`

// * 삭제 버튼
const RemoveButton = styled(Button)`
  padding: ${theme.spacing.spacing1};
  min-width: auto;
  width: 32px;
  height: 32px;
  color: ${theme.semanticColors.status.critical};

  &:hover {
    background-color: ${theme.semanticColors.status.critical}10;
  }
`

// * 폼 필드
const FormField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing.spacing2};
`

// * 라벨
const Label = styled.label`
  width: 3.75rem;
  ${typographyLabelSmall}
`

// * 입력 필드
const Input = styled.input<{ hasError: boolean }>`
  width: 100%;
  padding: ${theme.spacing.spacing2} ${theme.spacing.spacing3};
  border: 1px solid
    ${({ hasError }) =>
      hasError ? theme.semanticColors.status.critical : theme.semanticColors.border.default};
  border-radius: ${theme.spacing.spacing2};
  background-color: ${theme.semanticColors.background.default};
  color: ${theme.semanticColors.text.default};

  &:focus {
    outline: none;
    border-color: ${({ hasError }) =>
      hasError ? theme.semanticColors.status.critical : theme.colors.gray.gray800};
  }

  &::placeholder {
    color: ${theme.semanticColors.text.placeholder};
  }

  transition: border-color 200ms;

  ${typographyInputSmall}
`

// * 수량 입력 필드
const QuantityInput = styled(Input)`
  width: 100%;
`

// * 에러 메시지
const ErrorMessage = styled(Typography)`
  color: ${theme.semanticColors.status.critical};
  margin-top: ${theme.spacing.spacing1};
`

// * 입력 필드 컨테이너
const InputContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

// * 설명 컨테이너
const DescContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

// * 설명 텍스트 (줄바꿈 지원)
const DescriptionText = styled(Typography)`
  white-space: pre-line;
  color: ${theme.semanticColors.text.sub};
`

// * 추가 버튼
const AddButton = styled(Button)<{ disabled?: boolean }>`
  font-size: ${theme.typography.label.label2Regular};
  padding: ${theme.spacing.spacing2} ${theme.spacing.spacing3};

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      background-color: ${theme.semanticColors.background.disabled};
    }
  `}
`
