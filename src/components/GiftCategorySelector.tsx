import styled from '@emotion/styled'
import categories from '../mocks/category.mock'

const GiftCategorySelectorWrapper = styled.div`
  width: 100%;
  height: 300px;
  padding: 30px 20px;
`

const GiftCategorySelectorTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography['title1Bold'].fontSize};
  font-weight: ${({ theme }) => theme.typography['title1Bold'].fontWeight};
  line-height: ${({ theme }) => theme.typography['title1Bold'].lineHeight};
`

const GiftCategorySelectorItemBoxStyle = styled.div`
  width: 100%;
  height: auto;
  padding-top: 16px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 10px;
  column-gap: 10px;
`

function GiftCategorySelectorItemBox() {

    return (
      <GiftCategorySelectorItemBoxStyle>
        {categories.map((item) => (
          <GiftCategorySelectorItemWrapper key={item.themeId}>
            <GiftCategorySelectorItemImg src={item.image} alt={item.name}></GiftCategorySelectorItemImg>
            <GiftCategorySelectorItemText>{item.name}</GiftCategorySelectorItemText>
          </GiftCategorySelectorItemWrapper>
        ))}
      </GiftCategorySelectorItemBoxStyle>
    )
}

const GiftCategorySelectorItemWrapper = styled.div`
  width: 80px;
  height: 80px;
  cursor: pointer;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const GiftCategorySelectorItemImg = styled.img`
  width: 50px;
  height: 50px;
`

const GiftCategorySelectorItemText = styled.p`
  font-size: 11px;
  text-align: center;
`

function GiftCategorySelector() {
    return (
        <GiftCategorySelectorWrapper>
            <GiftCategorySelectorTitle>선물 테마</GiftCategorySelectorTitle>
            <GiftCategorySelectorItemBox>
            </GiftCategorySelectorItemBox>
          </GiftCategorySelectorWrapper>
    )
}

export default GiftCategorySelector;