import styled from '@emotion/styled'




const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 8px;
  
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const RankBadge = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  //연한 레드
  background-color: #ff6b6b;
  color: white;
  font-weight: bold;
  border-radius: 20%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Brand = styled.div`
  font-size: 0.75rem;
  color: gray;
  margin-top: 8px;
  align-items: flex-start;
`

const Name = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
`
const Price = styled.div`
  font-size: 0.875rem;

  strong {
    font-weight: 700;
    font-size: 1rem;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
`



interface Props {
  rank: number
  image: string
  brand: string
  name: string
  price: number
}
export const RankingItem = ({ rank, image, brand, name, price }: Props) => {
  return (
    <Card>
      <ImageWrapper>
        <img src={image} alt={name} />
        <RankBadge>{rank}</RankBadge>
      </ImageWrapper>
      <Brand>{brand}</Brand>
      <Name>{name}</Name>
      <Price>
        <strong>{price.toLocaleString()}</strong> 원
      </Price>
    </Card>
  )
}
export default RankingItem