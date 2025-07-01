import styled from '@emotion/styled'
import { colors } from '@/theme/color'
import { typography } from '@/theme/typography'
import { spacing } from '@/theme/spacing'
interface CategoryCardProps {
  name: string
  image: string
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.spacing2};
`

const Image = styled.img`
  width: 72px;
  height: 72px;
  border-radius: ${spacing.spacing3};
  object-fit: cover;
`

const Name = styled.p`
  font-size: ${typography.subtitle2Regular.fontSize};
  font-weight: ${typography.subtitle2Regular.fontWeight};
  line-height: ${typography.subtitle2Regular.lineHeight};
  color: ${colors.text.default};
`

const CategoryCard = ({ name, image }: CategoryCardProps) => {
  return (
    <Card>
      <Image src={image} alt={name} />
      <Name>{name}</Name>
    </Card>
  )
}

export default CategoryCard