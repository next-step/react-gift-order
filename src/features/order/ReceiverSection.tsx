import styled from '@emotion/styled'
import { theme } from '@/shared/styles/theme'
import { typographyInput, typographyLabel } from '@/shared/styles/typography'
import { ORDER_FORM_PLACEHOLDER } from '@/entities/order/orderContent'
import { Typography } from '@/shared/ui'
import { Controller, type Control } from 'react-hook-form'
import type { OrderFormData } from './schema'

type ReceiverSectionProps = {
  control: Control<OrderFormData>
  errors?: {
    name?: string | null
    phone?: string | null
    count?: string | null
  }
}

export const ReceiverSection = ({ control, errors }: ReceiverSectionProps) => {
  return (
    <SectionContainer>
      <SectionTitle variant="title2Bold">받는 사람</SectionTitle>

      <FormField>
        <Label>이름</Label>
        <InputContainer>
          <Controller
            name="receiver.name"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                placeholder={ORDER_FORM_PLACEHOLDER.reciever.name}
                hasError={!!errors?.name}
              />
            )}
          />
          {errors?.name && <ErrorMessage variant="label2Regular">{errors?.name}</ErrorMessage>}
        </InputContainer>
      </FormField>

      <FormField>
        <Label>전화번호</Label>
        <InputContainer>
          <Controller
            name="receiver.phone"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="tel"
                placeholder={ORDER_FORM_PLACEHOLDER.reciever.phone}
                hasError={!!errors?.phone}
              />
            )}
          />
          {errors?.phone && <ErrorMessage variant="label2Regular">{errors?.phone}</ErrorMessage>}
        </InputContainer>
      </FormField>

      <FormField>
        <Label>수량</Label>
        <InputContainer>
          <Controller
            name="receiver.count"
            control={control}
            render={({ field: { onChange, value, ...field } }) => (
              <QuantityInput
                {...field}
                type="number"
                placeholder="1"
                value={value.toString()}
                onChange={(e) => onChange(Number(e.target.value) || 1)}
                hasError={!!errors?.count}
              />
            )}
          />
          {errors?.count && <ErrorMessage variant="label2Regular">{errors?.count}</ErrorMessage>}
        </InputContainer>
      </FormField>
    </SectionContainer>
  )
}

// * 섹션 컨테이너
const SectionContainer = styled.section`
  width: 100%;
  padding: ${theme.spacing.spacing4} ${theme.spacing.spacing4};
  background-color: ${theme.semanticColors.background.default};
  border-bottom: 1px solid ${theme.semanticColors.border.default};

  display: flex;
  flex-direction: column;
`

// * 섹션 제목
const SectionTitle = styled(Typography)`
  margin-bottom: ${theme.spacing.spacing4};
`

// * 폼 필드
const FormField = styled.div`
  margin-bottom: ${theme.spacing.spacing2};

  display: grid;
  grid-template-columns: ${theme.spacing.spacing16} 1fr;
  align-items: center;
  gap: ${theme.spacing.spacing2};
`

// * 라벨
const Label = styled.label`
  ${typographyLabel}
`

// * 입력 필드
const Input = styled.input<{ hasError: boolean }>`
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
      hasError ? theme.semanticColors.status.critical : theme.colors.gray.gray400};
  }

  &::placeholder {
    color: ${theme.semanticColors.text.placeholder};
  }

  transition: border-color 200ms;

  ${typographyInput}
`

// * 수량 입력 필드 (숫자 입력용)
const QuantityInput = styled(Input)`
  width: 100%;
`

// * 에러 메시지
const ErrorMessage = styled(Typography)`
  color: ${theme.semanticColors.status.critical};
  margin-left: ${theme.spacing.spacing2};
`

// * 입력 필드 컨테이너
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.spacing1};
`
