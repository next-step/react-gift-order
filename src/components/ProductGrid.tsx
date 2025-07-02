/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'
import { colors } from '../styles/colors'
import { spacing } from '../styles/spacing'
import { typography } from '../styles/typography'
import product from '@/data/product'

const sectionStyle = css({ margin: `${spacing.spacing8} 0` })
const gridStyle = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: parseInt(spacing.spacing6),
})
const cardStyle = css({
  background: colors.backgroundDefault,
  borderRadius: 16,
  padding: parseInt(spacing.spacing4),
  boxShadow: '0 2px 8px #0001',
  textAlign: 'center',
  position: 'relative',
})
const rankStyle = (rank: number) => css({
  position: 'absolute',
  left: parseInt(spacing.spacing3),
  top: parseInt(spacing.spacing3),
  background: rank <= 3 ? colors.red700 : colors.gray300,
  color: colors.gray00,
  borderRadius: '50%',
  width: 24,
  height: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...typography.body2Bold,
})
const imgStyle = css({ objectFit: 'cover', borderRadius: 12 })
const nameStyle = css({ marginTop: parseInt(spacing.spacing3), ...typography.body2Bold, color: colors.textDefault })
const buttonWrapStyle = css({ textAlign: 'center', marginTop: spacing.spacing6 })
const moreBtnStyle = css({
  margin: '0 auto',
  padding: `${spacing.spacing2} ${spacing.spacing6}`,
  borderRadius: 8,
  border: 'none',
  background: colors.gray200,
  color: colors.gray900,
  cursor: 'pointer',
  ...typography.body2Bold,
})

const ProductGrid = () => {
  const [showAll, setShowAll] = useState(false)
  const ranks = showAll ? [...Array(21).keys()].map(i => i + 1) : [...Array(6).keys()].map(i => i + 1)
  return (
    <section css={sectionStyle}>
      <div css={gridStyle}>
        {ranks.map(rank => (
          <div key={rank} css={cardStyle}>
            <span css={rankStyle(rank)}>{rank}</span>
            <img
              src={product.imageURL}
              alt={product.name}
              width={160}
              height={120}
              css={imgStyle}
            />
            <div css={nameStyle}>{product.name}</div>
          </div>
        ))}
      </div>
      <div css={buttonWrapStyle}>
        <button
          onClick={() => setShowAll(v => !v)}
          css={moreBtnStyle}
        >
          {showAll ? '접기' : '더보기'}
        </button>
      </div>
    </section>
  )
}

export default ProductGrid
