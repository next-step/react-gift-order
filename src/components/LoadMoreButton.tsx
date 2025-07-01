import styled from '@emotion/styled'
import { colors } from '@/theme/color'
import { typography } from '@/theme/typography'
import { spacing } from '@/theme/spacing'

interface LoadMoreButtonProps {
  onClick?: () => void
  disabled?: boolean
  children?: React.ReactNode
}

const Button = styled.button`
  width: 100%;
  padding: ${spacing.spacing3} ${spacing.spacing4};
  border: 1px solid ${colors.border.default};
  border-radius: 4px;
  background-color: ${colors.background.default};
  color: ${colors.text.default};
  font-size: ${typography.body1Regular.fontSize};
  font-weight: ${typography.body1Regular.fontWeight};
  line-height: ${typography.body1Regular.lineHeight};
  cursor: pointer;

  &:disabled {
    background-color: ${colors.background.disabled};
    color: ${colors.text.disabled};
    border-color: ${colors.border.disabled};
    cursor: not-allowed;
  }
`

export default function LoadMoreButton({
  onClick,
  disabled,
  children = '더보기',
}: LoadMoreButtonProps) {
  return (
    <Button onClick={onClick} disabled={disabled} className="eltm2d0">
      {children}
    </Button>
  )
}