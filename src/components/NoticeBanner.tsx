import { css } from '@emotion/react'
import { colors } from '../styles/colors'
import { spacing } from '../styles/spacing'
import { typography } from '../styles/typography'

const bannerStyle = css({
  background: colors.kakaoYellow,
  color: colors.textDefault,
  borderRadius: 12,
  padding: parseInt(spacing.spacing4),
  margin: `${spacing.spacing5} 0`,
  ...typography.body2Bold,
  fontWeight: 500,
})

const NoticeBanner = () => (
  <div css={bannerStyle}>
    카카오테크 캠퍼스 3기 여러분
    <br />
    프론트엔드 2단계 과제 화이팅! 🥳
  </div>
)

export default NoticeBanner
