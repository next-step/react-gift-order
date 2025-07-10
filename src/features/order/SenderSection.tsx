import styled from '@emotion/styled'
import { theme } from '@/shared/styles/theme'
import { typographyInput } from '@/shared/styles/typography'
import { ORDER_FORM_PLACEHOLDER } from '@/entities/order/orderContent'
import { Typography } from '@/shared/ui'

type SenderSectionProps = {
  sender: string
  onSenderChange: (sender: string) => void
  error?: string | null
}

export const SenderSection = ({ sender, onSenderChange, error }: SenderSectionProps) => {
  // * 값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSenderChange(e.target.value)
  }

  return (
    <SectionContainer>
      <SectionTitle variant="title2Bold">보내는 사람</SectionTitle>
      <FormField>
        <Input
          type="text"
          placeholder={ORDER_FORM_PLACEHOLDER.sender.name}
          value={sender}
          onChange={handleChange}
          hasError={!!error}
        />
        {error ? (
          <ErrorMessage variant="label2Regular">{error}</ErrorMessage>
        ) : (
          <GuideText variant="label2Regular">
            * 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.
          </GuideText>
        )}
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
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.spacing1};
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

// * 에러 메시지
const ErrorMessage = styled(Typography)`
  color: ${theme.semanticColors.status.critical};
  margin-left: ${theme.spacing.spacing2};
`

// * 안내 문구
const GuideText = styled(Typography)`
  color: ${theme.semanticColors.text.sub};

  margin-left: ${theme.spacing.spacing2};
`
