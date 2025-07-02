/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { colors } from '../styles/colors'
import { spacing } from '../styles/spacing'
import { typography } from '../styles/typography'

const selectorStyle = css({
  background: colors.blue00,
  padding: parseInt(spacing.spacing5),
  borderRadius: 12,
  margin: `${spacing.spacing5} 0`,
  display: 'flex',
  alignItems: 'center',
  gap: parseInt(spacing.spacing3),
})

const plusStyle = css({ fontSize: 28, color: colors.kakaoYellow })
const textStyle = css({ ...typography.body1Bold, color: colors.textDefault })

const FriendSelector = () => (
  <div css={selectorStyle}>
    <span css={plusStyle}>＋</span>
    <span css={textStyle}>
      선물할 친구를 선택해 주세요.
    </span>
  </div>
)

export default FriendSelector
