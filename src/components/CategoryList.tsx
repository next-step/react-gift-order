import { css } from '@emotion/react'
import { colors } from '../styles/colors'
import { spacing } from '../styles/spacing'
import { typography } from '../styles/typography'
import categoryData from '@/data/category'

const sectionStyle = css({
  background: colors.backgroundDefault,
  borderRadius: 16,
  padding: parseInt(spacing.spacing6),
  marginBottom: parseInt(spacing.spacing5),
})

const listStyle = css({
  display: 'flex',
  flexWrap: 'wrap',
  gap: parseInt(spacing.spacing8),
})

const itemStyle = css({
  textAlign: 'center',
  width: 80,
})

const imgStyle = css({
  borderRadius: 12,
})

const nameStyle = css({
  marginTop: parseInt(spacing.spacing2),
  ...typography.body2Regular,
  color: colors.textDefault,
})

const CategoryList = () => (
  <section css={sectionStyle}>
    <div css={listStyle}>
      {categoryData.map((item: any) => (
        <div key={item.themeId} css={itemStyle}>
          <img
            src={item.image}
            alt={item.name}
            width={56}
            height={56}
            css={imgStyle}
          />
          <div css={nameStyle}>{item.name}</div>
        </div>
      ))}
    </div>
  </section>
)

export default CategoryList
