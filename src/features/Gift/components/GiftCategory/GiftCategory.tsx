import { categories } from '@/data/categories'
import { useState, useEffect } from 'react'
import {
  Container,
  Title,
  Grid,
  Item,
  ItemImage,
  ItemName,
} from './GiftCategory.styles'

const GiftCategory = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const handleSelect = (id: number) => {
    setSelectedId(id)
  }

  useEffect(() => {
    console.log('선택된 Category ID:', selectedId)
  }, [selectedId])

  return (
    <Container>
      <Title>선물 테마</Title>
      <Grid>
        {categories.map((item) => (
          <Item key={item.themeId} onClick={() => handleSelect(item.themeId)}>
            <ItemImage src={item.image} alt={item.name} />
            <ItemName>{item.name}</ItemName>
          </Item>
        ))}
      </Grid>
    </Container>
  )
}

export default GiftCategory
