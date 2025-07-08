import { categories } from '@/data/categories'
import { useState } from 'react'
import * as S from './GiftCategory.styles'

const GiftCategory = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const handleSelect = (id: number) => {
    setSelectedId(id)
  }

  return (
    <S.Container>
      <S.Title>선물 테마</S.Title>
      <S.Grid>
        {categories.map((item) => (
          <S.Item key={item.themeId} onClick={() => handleSelect(item.themeId)}>
            <S.ItemImage src={item.image} alt={item.name} />
            <S.ItemName>{item.name}</S.ItemName>
          </S.Item>
        ))}
      </S.Grid>
    </S.Container>
  )
}

export default GiftCategory
